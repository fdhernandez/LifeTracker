import './App.css';
import { useEffect, useState} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
//import axios from "axios"
import Navbar from '../Navbar/Navbar';
import Hero from "../Hero/Hero"
import Activity from '../Activity/Activity';
import Login from '../Login/Login';
import Exercise from '../Exercise/Exercise';
import Nutrition from '../Nutrition/Nutrition';
import Sleep from '../Sleep/Sleep';
import Register from '../Register/Register';
//import InvalidLogin from '../InvalidLogin/InvalidLogin';

import NewEx from '../NewEx/NewEx.js'
import API from '../../services/apiClient'

export default function App() {
  const [appState, setAppState] = useState({})
  const [errors, setErrors] = useState({})
  const [exercises, setExercises] = useState({}) 
  const [isLoading, setIsLoading] = useState(false)
  
  const [totalExerciseTime, setTotalExerciseTime] = useState(0)
  

  
  const handleLogout = async () => {
    await API.logoutUser()
    setAppState({})
    console.log("app", appState)
    setErrors(null)
  }

    /** Fetch user by token generated */
  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true)
      console.log("refresh")
      const { data } = await API.fetchUserFromToken()
      if (data) {
        setAppState((a) => ({...a, user: data.user}))
      }
      setIsLoading(false)
    }

    // only set token if it exists
    const token = localStorage.getItem("tracker_token")
    if (token) {
      API.setToken(token)
      fetchUser()
    }
  }, [])

  const handleUpdateExercise = async (newExercise) => {
    setExercises(oldExercises => [...oldExercises, newExercise])
  }


  useEffect(() => {
    const fetchExercises = async () => {
      const { data, error } = await API.fetchExercises()
      if (data?.listExercises) {
        setExercises(data.listExercises)
      }
      if (error) {
        setErrors((e) => ({ ...e, error }))
      }
    }
    fetchExercises()
  }, [appState.user])

  
   useEffect(() => {
    const fetchExerciseTime = async () => {
      const { data, error } = await API.fetchTotalExerciseTime()
      if (data?.totalTime) {
        setTotalExerciseTime(data.totalTime)
      }
      if (error) {
        setErrors((e) => ({ ...e, error }))
      }
    }
    fetchExerciseTime()
  }, [exercises, appState])




  return (
    <div className="App">
      <BrowserRouter>
        {!isLoading ? 
        <>
        <Navbar user={appState?.user} handleLogout={handleLogout} isLoading={isLoading}/>
        <Routes>
          <Route path='/' element={ <Hero/> }/>
          <Route path='/activity' element={ <Activity appState={appState} user={appState?.user} totalExerciseTime={totalExerciseTime} />} />
          <Route path='/exercise' element={ <Exercise appState={appState} user={appState?.user} exercises={exercises}/>} />
          <Route path='/nutrition' element={ <Nutrition appState={appState} user={appState?.user} />} />
          <Route path='/sleep' element={ <Sleep appState={appState} user={appState?.user} />} />
          <Route path='/register' element={ <Register  setAppState={setAppState}/>} />
          <Route path='/login' element={ <Login  setAppState={setAppState}/>} />

          <Route path='/exercise/create' element={ <NewEx appState={appState} user={appState?.user} handleUpdateExercise={handleUpdateExercise}/>} />
        
        </Routes>
        </> : null }
      </BrowserRouter>
    </div>
  )
}


