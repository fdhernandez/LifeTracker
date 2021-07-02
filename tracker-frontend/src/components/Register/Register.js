import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import Card from '../Card/Card';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { useNavigate } from "react-router-dom"
import API from '../../services/apiClient'
//import PageH from '../PageH/PageH'


export default function Register({ setAppState }) {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    passwordConfirm: ""
  })

  const handleOnInputChange = (event) => {
    setErrors((e) => ({ ...e, form: null }))
    // check that password confirm is equal to password
    if (event.target.name === "password") {
      if (form.passwordConfirm && form.passwordConfirm !== event.target.value) {
        setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match" }))
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }))
      }
    }
    // check that password is equal to password confirm
    if (event.target.name === "passwordConfirm") {
      if (form.password && form.password !== event.target.value) {
        setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match" }))
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }))
      }
    }

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
    setIsLoading(true)
    setErrors((e) => ({ ...e, form: null }))

    // check that the password and email fields are valid before registering user
    if (form.passwordConfirm !== form.password) {
      setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }))
      return
    } else {
      setErrors((e) => ({ ...e, passwordConfirm: null }))
    }

    if (form.email.indexOf("@") <= 0) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
        return
    } else {
      setErrors((e) => ({ ...e, email: null }))
    }

    const { data, error } = await API.signupUser({
      email: form.email,
      password: form.password,
      username: form.username,
      firstName: form.firstName,
      lastName: form.lastName
    })
    if (data) {
      API.setToken(data.token)
      setAppState((a) => ({...a, user: data.user}))
    }
    if (error) {
      setErrors((e) => ({ ...e, form: error }))
      setIsLoading(false)
      return
    }

    setIsLoading(false)
    navigate("/activity")
  }

    return (
        <div className="Register">
            <div className="splash-image" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1486739985386-d4fae04ca6f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80)` }}>
            < div className = "container">
            <Card className ="register-card">
            <h2>Create an Account</h2>
            {errors.form && <div className="error">{errors.form}</div>}
            <br />
            
                <div className="form">
                    <InputField name="email" label="Email" >
                        <Input 
                         onChange={handleOnInputChange}
                            type="email"
                            name="email"
                            placeholder="user@gmail.com"
                            
                        />
                         {errors.email && <div className="error">{errors.email}</div>}
                    </InputField>
                    <InputField name="username" label="Username" >
                         <Input
                            type="text"
                            name="username"
                            placeholder="your_username"
                            value={form.username}
                            onChange={handleOnInputChange}
                        />
                    </InputField>

               
                    <InputField name="firstName" label="First Name"  className="flex-1">
                        <Input
                            type="text"
                            name="firstName"
                            placeholder="Jane"
                            value={form.firstName}
                            onChange={handleOnInputChange}
                  />
                    </InputField>

                    <InputField name="lastName" label="Last Name"  className="flex-1">
                        <Input
                            type="text"
                            name="lastName"
                            placeholder="Doe"
                            value={form.lastName}
                            onChange={handleOnInputChange}
                        />
                    </InputField>
                

                    <InputField name="password" label="Password">
                        <Input
                         onChange={handleOnInputChange}
                            type="password"
                            name="password"
                            placeholder="password"
                            value={form.password}
                        />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </InputField>

                    <InputField name="passwordConfirm" label="Confirm Password" >
                        <Input
                            type="passwordConfirm"
                            name="passwordConfirm"
                            placeholder="confirm password"
                            value={form.passwordConfirm}
                            onChange={handleOnInputChange}
                  
                        />
                         {errors.passwordConfirm && <span className="error">{errors.passwordConfirm}</span>}
                    </InputField>

                    <p className="to-login">
                         Already have an account? Login <Link to="/login">here.</Link>
                    </p>
                    {errors.form && <span className="error">{errors.form}</span>}
                    <Button onClick={handleOnSubmit}
                         type = 'submit' > 
                         {isLoading ? <>Loading</> : <>Register</>}
                        
                    </Button>
                </div>
            </Card>
            </div>
            </div>
        </div>
    )
}