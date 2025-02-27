import React, { useState } from 'react';
import {login} from '../../../services/opeartions/authAPI'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const [showPassword, setShowPassword] = useState(false);
    const {email, password} = formData;

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password, navigate));
    }
  return (
    <form onSubmit={handleOnSubmit} className='mt-6 flex w-full flex-col gap-y-4'>
        <label className='w-full'>
            <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5'>
                Email Address <sup>*</sup>
            </p>
            <input
                required
                type="email"
                name='email'
                value={email}
                onChange={handleOnChange}
                placeholder='Enter your email address'
                className='form-style w-full'
            />
        </label>
    </form>
  )
}

export default LoginForm
