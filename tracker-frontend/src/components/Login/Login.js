import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import axios from "axios"
import "./Login.css"
//mport {  Card } from "components"
import Card from '../Card/Card';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';
import Input from '../Input/Input';
import API from '../../services/apiClient';
//import PageH from '../PageH/PageH'



export default function Login({handleLogIn, setAppState }) {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
      email: '',
      password: ''
    })
  
    const handleOnInputChange = (event) => {
      if (event.target.name === "email") {
        if (event.target.value.indexOf("@") <= 0) {
          setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
        } else {
          setErrors((e) => ({ ...e, email: null }))
        }
      }
      setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
    }
  
    const handleOnSubmit = async (event) => {
      event.preventDefault()
      setIsLoading(true)
      setErrors((e) => ({ ...e, form: null }))
  
      const { data, error } = await API.loginUser({ email: form.email, password: form.password })
      if (data) {
        API.setToken(data.token)
        setAppState((a) => ({...a, user: data.user}))
      }
      if (error) {
        console.log(errors)
        setErrors((e) => ({ ...e, form: error }))
        setIsLoading(false)
        return
      }
      setIsLoading(false)
      navigate("/activity")
    }

    return (
        <div className="Login">
            <div className="splash-image" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)` }}>
            < div className = "container">
            <Card className ="login-card">
            <h2>Sign In</h2>
            {errors.form && <div className="error">{errors.form}</div>}
            <br />
            
                <div className="form">
                    <InputField name="email" label="Email" >
                        <Input 
                            type="email"
                            name="email"
                            placeholder="user@codepath.org"
                            value={form.email}
                            onChange={handleOnInputChange}
                        />
                         {errors.email && <div className="error">{errors.email}</div>}
                    </InputField>
                    <InputField name="password" label="Password" >
                        <Input 
                            type="password"
                            name="password"
                            placeholder="password"
                            value={form.password}
                            onChange={handleOnInputChange}
                        />
                         {errors.password && <div className="error">{errors.password}</div>}
                    </InputField>

                    <p className="to-register">
                         Need an account? Sign up <Link to="/register">here.</Link>
                    </p>
                    <Button disabled={isLoading} onClick={handleOnSubmit}>
                        {isLoading ? "Loading..." : "Login"}
                    </Button>
                </div>
            </Card>
            </div>
            </div>
        </div>
    )
}