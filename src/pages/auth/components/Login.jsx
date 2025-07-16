import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import { instance } from '../../../api/instance';

export const Login = ({ show }) => {
   const [isLoading, setIsLoading] = useState(false);
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();
   const authContext = useContext(AuthContext);

   if (!authContext) {
      return null;
   }

   const { login: loginFn } = authContext;

   const login = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      try {
         const data = {
            email,
            password,
         };
         const response = await instance.post('/auth/login', data);
         setIsLoading(false);
         console.log(response.data.access_token);
         loginFn(response.data.access_token);
         navigate('/');
      } catch (error) {
         setIsLoading(false);
         console.error(error);
      }
   };
   return (
      <div>
         <p className='font-[Inter] font-medium text-4xl leading-[30px] tracking-wider'>Log in to Exclusive</p>
         <p className='mt-6'>Enter your details below</p>
         <form onSubmit={login} noValidate className='w-[370px] mt-12 flex flex-col gap-10'>
            <input onChange={(e) => setEmail(e.target.value)} className='w-full outline-0 border-b-2 border-b-[#A0A0A0] py-2' type="email" placeholder='Email or Phone Number' />
            <input onChange={(e) => setPassword(e.target.value)} className='w-full outline-0 border-b-2 border-b-[#A0A0A0] py-2' type="password" placeholder='Password' />
            <div className='flex  gap-22'>
               <button type='submit' className='w-full bg-[#db4444] text-white py-4 rounded-sm cursor-pointer'>Log In</button>
               <button className='w-full text-[#db4444] py-4 rounded-sm cursor-pointer'>Forget Password?</button>
            </div>
         </form>
         <p className='mt-8 flex justify-center items-center gap-4 text-[#000000a3]'>Don't have account? <a onClick={show} className='text-black border-b' href="#">Sign Up</a></p>
      </div>
   )
}
