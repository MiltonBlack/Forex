import React, { useState, useEffect } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import img from '../../assets/broker.jpg'

const CreateAdmin = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [data, setData] = useState([])
    const [formData, setFormData] = useState({
        fullName: '',
        email: id,
        password: '',
        password2: '',
    })
    const { fullName, email, password, password2 } = formData;
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== password2) {
            console.log('passwords dont match');
        } else {
            const userData = {
                fullName,
                email,
                password,
            };
            fetch('http://localhost:3005/api/admin/register', {
                method: "POST",
                body: JSON.stringify(userData),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then((response) => response.json())
                .then((info) => {
                    setData(info)
                }).catch(err => console.log(err));

        }
    };
    console.log(id);
    console.log(formData);
    console.log(data);
    return (
        <div className='bg-sky-500 w-screen h-screen relative'>
            <img src={img} alt="" className='h-screen w-screen' />
            <div className='fixed top-0 right-0 left-0 bottom-0 w-full h-full flex items-center justify-center bg-black/50'>
                <div className='w-[370px] md:w-[512px] border-2 border-black shadow-lg p-2 bg-black/75'>
                    <h1 className='text-white text-2xl my-2 uppercase w-full text-center'>Create Your Account</h1>
                    <div className='grid grid-cols-1 gap-2'>
                        <input
                            type="text"
                            placeholder='Full Name...'
                            className='p-1'
                            name='fullName'
                            value={fullName}
                            onChange={onChange} />
                    </div>
                    <input
                        type="email"
                        placeholder='Email...'
                        className='my-2 p-1 w-full'
                        name='email'
                        value={id}
                        onChange={onChange} 
                        readOnly />
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                        <div className='flex bg-white pr-1'>
                            <input
                                type="text"
                                placeholder='Password...'
                                className='p-1 w-full outline-none'
                                name='password'
                                value={password}
                                onChange={onChange} />
                            <button><FaEye /></button>
                        </div>
                        <div className='flex bg-white pr-1'>
                            <input
                                type="text"
                                placeholder='Confirm Password...'
                                className='p-1 w-full outline-none'
                                name='password2'
                                value={password2}
                                onChange={onChange} />
                            <button><FaEyeSlash /></button>
                        </div>
                    </div>
                    <button
                        className='uppercase border-2 p-2 my-4 w-[70%] hover:bg-white text-white transition'
                        onClick={handleSubmit}>
                        Sign Up
                    </button>
                    <div className='flex justify-center items-center'>
                        <h1 className='mr-4 text-sm text-white'>Already Have An Account?</h1>
                        <Link to='/login'>
                            <em className=' text-blue-950 text-lg cursor-pointer'>Login</em>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateAdmin