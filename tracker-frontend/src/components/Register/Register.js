import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import Card from '../Card/Card';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';
import Input from '../Input/Input';

export default function Register() {
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

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
                            type="email"
                            name="email"
                            placeholder="user@gmail.com"
                            
                        />
                         {errors.email && <div className="error">{errors.email}</div>}
                    </InputField>
                    <InputField name="username" label="Username" error={errors.username}>
                         <Input
                            type="text"
                            name="username"
                            placeholder="your_username"
                            value={form.username}
                  //handleOnChange={handleOnChange}
                        />
                    </InputField>

               
                    <InputField name="firstName" label="First Name" error={errors.firstName} className="flex-1">
                        <Input
                            type="text"
                            name="firstName"
                            placeholder="Jane"
                            value={form.firstName}
                   // handleOnChange={handleOnChange}
                  />
                    </InputField>

                    <InputField name="lastName" label="Last Name" error={errors.lastName} className="flex-1">
                        <Input
                            type="text"
                            name="lastName"
                            placeholder="Doe"
                            value={form.lastName}
                    //handleOnChange={handleOnChange}
                        />
                    </InputField>
                

                    <InputField name="password" label="Password" error={errors.password}>
                        <Input
                            type="password"
                            name="password"
                            placeholder="password"
                            value={form.password}
                  //handleOnChange={handleOnChange}
                        />
                    </InputField>

                    <InputField name="passwordConfirm" label="Confirm Password" error={errors.passwordConfirm}>
                        <Input
                            type="password"
                            name="passwordConfirm"
                            placeholder="confirm password"
                            value={form.passwordConfirm}
                  //handleOnChange={handleOnChange}
                        />
                    </InputField>

                    <p className="to-login">
                         Already have an account? Login <Link to="/login">here.</Link>
                    </p>
                    <Button> {isLoading ? "Loading..." : "Sign Up"}
                    </Button>
                </div>
            </Card>
            </div>
            </div>
        </div>
    )
}