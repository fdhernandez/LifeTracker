import './App.css';
import { useState} from "react"
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
import ExerciseForm from "../ExerciseForm/ExerciseForm";
import { AppStateP} from "../../contexts/appStateContext"


export default function AppContainer(){
  return(
    <AppStateP>
      <App/>
    </AppStateP>
  )
}


function App() {
  //const [user, setUser] = useState({})
  //const [isFetching, setIsFetching] = useState(false)
  //const [errors, setErrors] = useState(null)

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path = "/" element={<Hero/>}/>
          <Route path="/activity" element={<Activity/>}></Route>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/exercise" element={<Exercise/>}/>
          <Route path="/nutrition" element={<Nutrition/>}/>
          <Route path="/sleep" element={<Sleep/>}/>
          <Route path="/invalidlogin" element={<InvalidLogin/>}/>
          <Route path="/exercise/form" element={<ExerciseForm />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

//export default App;