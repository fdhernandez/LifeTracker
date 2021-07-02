import { useState } from "react";
import { Link } from "react-router-dom";
//import axios from "axios"
import "./Login.css"
//mport {  Card } from "components"
import Card from '../Card/Card';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';
import Input from '../Input/Input';





export default function Login ({ user, setUser }) {
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const handleOnInputChange = (event) => {
        if (event.target.name === "email") {
            if (event.target.value.indexOf("@") === -1) {
                setErrors((e) => ({ ...e, email: "Please enter a valid email."}))
            } else {
                setErrors((e) => ({ ...e, email: null}))
            }
        }

        setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
    }

    const handleOnSubmit = async () => {
        setIsLoading(true)
        setErrors((e) => ({ ...e, form: null}))

        try {
            // const res
        } catch(err) {
            console.log(err)
            setErrors((e) => ({ ...e, form: "Invalid username/password combination"}))
        } finally {
            setIsLoading(false)
        }
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
                            placeholder="user@gmail.com"
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