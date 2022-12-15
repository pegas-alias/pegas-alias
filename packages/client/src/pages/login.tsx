import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { FormField, Button, Intro } from '../components'
import { LOCAL_URL } from '../constants'
import { useAppDispatch } from '../services/hooks/useState'
import { loginUser, signUpYaOAuth } from '../services/http/login'
import { authorization, ErrorMessage, errorToString, pattern } from '../utils'
import { getUserApi } from '../services/store/user'

import './../scss/form/form.scss'

export const Login: React.FC = (): JSX.Element => {
  const { login, password } = pattern()
  const dispatch = useAppDispatch()
  
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onBlur' })

  const navigate = useNavigate()

  const onSubmit = (data: Record<string, unknown>) => {
    loginUser(data)
    .then((res) => {
      if(res) {
        dispatch(getUserApi())
          navigate('/')
      }
    })
    .catch(e => console.log(e))
  }

  const handleClick = () => {
    signUpYaOAuth().then(result => {
      const clientId = result.service_id
      window.location.replace(
        `https://oauth.yandex.ru/authorize?response_type=code&client_id=${clientId}&redirect_uri=${LOCAL_URL}`
      )
    })
  }

  authorization();
  return (
    <main>
      <Intro />
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="form__title">Вход в систему</h2>

        <div className="form__fields">
          <FormField
            register={register('login', {
              required: 'Заполните поле',
              pattern: {
                value: login,
                message: 'Некорректно введен логин',
              },
              minLength: {
                value: 3,
                message: 'Длина меньше 3',
              },
              maxLength: {
                value: 20,
                message: 'Длина больше 20',
              },
            })}
            placeholder="Логин"
            errorText={errorToString(errors?.login as ErrorMessage)}
          />

          <FormField
            register={register('password', {
              required: 'Заполните поле',
              pattern: {
                value: password,
                message: 'Некорректно введен пароль',
              },
            })}
            type="password"
            placeholder="Пароль"
            errorText={errorToString(errors?.password as ErrorMessage)}
          />
        </div>

        <div className="form__buttons">
          <Button text="Авторизоваться" type="submit" />
          <Button
            text="Авторизироваться через Яндекс"
            type="button"
            events={{
              onClick: () => {
                handleClick()
              },
            }}
          />
          <Button
            classes="button--light"
            type="button"
            text="Ещё нет аккаунта ?"
            events={{
              onClick: () => navigate('/sign-up'),
            }}
          />
        </div>
      </form>
    </main>
  )
}
