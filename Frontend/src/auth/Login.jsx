import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const Login = () => {
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();
    const Navigate = useNavigate();

    const handleSubmit = async () =>{
        const result = await axios.post("http://localhost:3000/api/login",)
    }

    return (
        <div>

        </div>
    )
}

export default Login
