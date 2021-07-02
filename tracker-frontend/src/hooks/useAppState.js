import { useEffect,useState } from "react";
//import { useNavigate } from "react-router"; 
import apiClient from '../services/apiClient';



export default function useAppState(){
    const [error , setError] = useState(null)
    const [appState, setAppState] = useState({
        user: null,
        isAuthenticated: false,
        nutritions: [],
        sleep: [],
        exercises: [],
        token: ""
      })
    
      useEffect(() => {
        const fetchUser = async () => {
          const { data, error } = await apiClient.fetchUserFromToken()
          if (data){
            setAppState((a) => (
                {
                    ...a, user: data.user,isAuthenticated: true
                }
                ))
          } 
          if (error) setError(error)
        }
    
        const token = localStorage.getItem("tracker_token")
        if (token) {
          apiClient.setToken(token)
          fetchUser()
        }
      }, [])
    
      useEffect(() => {
        const fetchExercise = async () => {
          const { data, error } = await apiClient.listUserExercise()
          if (data) {
            setAppState((a) => (
                {
                    ...a, exercise:[data.exercises]
                }
                ))
            }
          if (error) setError(error)
        }
          fetchExercise()
      
      }, [appState.exercises])

      return {appState,error,setAppState,setError}
}
