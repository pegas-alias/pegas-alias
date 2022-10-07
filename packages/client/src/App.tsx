// import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageNavigation from './components/page-navigation/page-navigation';
import { Main, Login, SignUp, NewGame, Profile, Rules, Leaders, Forum, Round, ChangePassword } from './pages/index';


import './scss/style.scss';

export function App() {
  // useEffect(() => {
  //   // Предустановка я.практикум:
  //   // const fetchServerData = async () => {
  //   //   const url = `http://localhost:${__SERVER_PORT__}`
  //   //   const response = await fetch(url)
  //   //   const data = await response.json()
  //   //   console.log(data)
  //   // }
  //   //
  //   // fetchServerData()
  // }, [])
  return <div className="app">
    <Router>
      <PageNavigation />
      <Routes>

        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/about" element={<Login />} />
        <Route path="/new-game" element={<NewGame />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/leaders" element={<Leaders />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/round" element={<Round />} />

      </Routes>
    </Router>
  </div>
}

