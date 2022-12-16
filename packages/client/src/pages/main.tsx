import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Intro } from '../components'
import { ButtonsNavigation } from '../components/buttons-navigation/buttons-navigation'
import { LOCAL_URL } from '../constants'
import playStartSound from '../services/browser-api/web-audio-api'
import { useAppDispatch } from '../services/hooks/useState'
import { signInYaOAuth } from '../services/http/login'
import { getUserApi } from '../services/store/user'
import { getTeamsApi } from '../services/store/game'
import { FilterState } from '../services/store/game/type'

export const Main: React.FC = (): JSX.Element => {
  if (typeof window !== 'undefined') {
    const dispatch = useAppDispatch()
    const initialStateFilter: FilterState = {
      'ratingFieldName': 'games',
      'cursor': 0,
      'status':'',
      'limit': 100
    } 
    // TODO 0 - state.player_id
    dispatch(getTeamsApi(initialStateFilter))
    playStartSound()
    const params = new URLSearchParams(location.search)
    const code = params.get('code')
    const navigate = useNavigate()
    useEffect(() => {
      if (code) {
        signInYaOAuth({ code, redirect_uri: LOCAL_URL })
        .then(() => {
          console.log('update games')
          dispatch(getUserApi())
          navigate('/')
        })
        .catch(e => console.log(e))
      }
    }, [code])
  }
    return (
    <main>
      <Intro />
      <ButtonsNavigation />
    </main>
  )
}
