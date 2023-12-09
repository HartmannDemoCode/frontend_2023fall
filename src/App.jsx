import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import facade from './apiFacade'

function App() {
  const [userContext, setUserContext] = useState(null)

  return (
    <>
      <Header facade={facade} setUserContext={setUserContext}/>
     <h1>Hello to User: {userContext && userContext.username}</h1> 
    </>
  )
}

export default App
