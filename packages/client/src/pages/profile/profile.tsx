import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { FormField, Button, Intro } from '../../components';
import { Avatar } from '../../components/avatar/avatar';
import { errorToString, pattern } from '../../utils';

import './../../scss/form/form.scss';

export const Profile: React.FC = (): JSX.Element => {

  const { email, login, name, phone } = pattern();

  const {
    register,
    formState: {
      errors
    },
    handleSubmit
  } = useForm({ mode: 'onBlur' });

  const navigate = useNavigate();

  const onSubmit = (data: Record<string, unknown>) => {
    console.log(data)
  }

  return (
    <main>
      <Avatar />
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="form__title">Валентина Космодемьянская</h2>

        <div className="form__fields">

          <FormField
            register={register('email', {
              required: 'Заполните поле',
              pattern: {
                value: email,
                message: 'Некорректно введена почта'
              }
            })}
            placeholder="Почта"
            errorText={errorToString(errors?.email)}
          />

          <FormField
            register={register('login', {
              required: 'Заполните поле',
              pattern: {
                value: login,
                message: 'Некорректно введен логин'
              },
              minLength: {
                value: 3,
                message: 'Длина меньше 3'
              },
              maxLength: {
                value: 20,
                message: 'Длина больлше 20'
              }
            })}
            placeholder="Логин"
            errorText={errorToString(errors?.login)}
          />

          <FormField
            register={register('display_name', {
              minLength: {
                value: 3,
                message: 'Длина меньше 3'
              },
              maxLength: {
                value: 20,
                message: 'Длина больлше 20'
              }
            })}
            placeholder="Имя в чате"
            errorText={errorToString(errors?.display_name)}
          />

          <FormField
            register={register('first_name', {
              required: 'Заполните поле',
              pattern: {
                value: name,
                message: 'Некорректно введено имя'
              }
            })}
            placeholder="Имя"
            errorText={errorToString(errors?.first_name)}
          />

          <FormField
            register={register('second_name', {
              required: 'Заполните поле',
              pattern: {
                value: name,
                message: 'Некорректно введено фамилия'
              }
            })}
            placeholder="Фамилия"
            errorText={errorToString(errors?.second_name)}
          />

          <FormField
            register={register('phone', {
              required: 'Заполните поле',
              pattern: {
                value: phone,
                message: 'Некорректно введен телефон'
              }
            })}
            placeholder="Телефон"
            errorText={errorToString(errors?.phone)}
          />



        </div>

        <div className="form__buttons">
          <Button
            text="Сохранить"
            type="submit"
          />
          <Button
            classes="button--light"
            type='button'
            text="Изменить пароль"
            events={{
              onClick: () => navigate('/sign-up')
            }}
          />
          <Button
            classes="button--alert"
            type='button'
            text="Выйти из аккаунта"
            events={{
              onClick: () => navigate('/login')
            }}
          />
        </div>
      </form>
    </main>
  )
}


