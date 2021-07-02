import Button from '@material-ui/core/Button';
import { Grid, Paper ,Avatar, TextField, Typography, Link, Box} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
//import axios from "axios"
import { useAppStateContext } from '../../contexts/appStateContext';
import apiClient from '../../services/apiClient';

export default function InvalidLogin(){
    const { appState, setAppState} = useAppStateContext()
    const navigate = useNavigate()
    const [isProcessing, setIsProcessing] = useState(false)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
    username: "",
    password: "",
  })

//   useEffect(() => {
//     // if user is already logged in,
//     // redirect them to the home page
//     if (Object.keys(user).length !== 0) {
//       navigate("/activity")
//     }
//   }, [user, navigate])

  
    const handleOnInputChange = (event) => {
        if (event.target.name === "username") {
        // if (event.target.value.indexOf("@") === -1) {
        //     setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
        // } else {
        //     setErrors((e) => ({ ...e, email: null }))
        // }
        }

        setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
    }

    const handleOnSubmit = async () => {
        setIsProcessing(true)
        setErrors((e) => ({ ...e, form: null }))

        const {data, error } = await apiClient.loginUser({username: form.username, password: form.password})
        if (error){
          setErrors((e) => ({ ...e, form:error}))
        }
        if (data?.user){
            setAppState((a) => (
                {
                    ...a, user: data.user,isAuthenticated: true
                }
                ))
          apiClient.setToken(data.token)
        }
        setIsProcessing(false)
        navigate("/activity")
      }
    const paperStyle = {
        padding:20,
        height:"70vh",
        width:280,
        margin:"20px auto"
    }
    const textColor = {
        color:"red"
    }
    return(
        <Grid>
            <Box display="flex" justifyContent="center" alignItems="center">
                <Typography style={textColor}>You must be logged in to access that page</Typography>
            </Box>
            <Paper elevation = {10} style= {paperStyle}>
                <Grid align = "center">
                    <Avatar>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <h2>
                        Sign In
                    </h2>
                </Grid>
                <TextField 
                    onChange={handleOnInputChange} 
                    name ="username"
                    label = "Username" 
                    placeholder = "Enter username" 
                    fullWidth 
                    required/>
                <TextField 
                    onChange={handleOnInputChange} 
                    name ="password"
                    label = "Password" 
                    placeholder = "Enter password" 
                    type = "password" 
                    fullWidth 
                    required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        // checked={state.checkedB}
                        // onChange={handleChange}
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember Me"
                />
                <Button 
                    onClick ={handleOnSubmit}
                    type = 'submit' 
                    variant = "contained" 
                    color = 'primary' 
                    fullWidth
                    >Sign in
                </Button>
                <Typography>
                    Do you have an account?
                    <Link href ="/register">
                        Sign Up
                    </Link>
                </Typography>
                
            </Paper>
        </Grid>
    )
}