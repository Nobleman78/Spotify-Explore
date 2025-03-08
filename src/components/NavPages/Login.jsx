import { useState } from 'react';
import './Login.css'

const Login = () => {

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')

    const handleSubmit =(event)=>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password);



    }

    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <a className="" onClick={() => document.getElementById('my_modal_1').showModal()}>Login</a>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit} className='px-4'>
                        <h2 className='text-center font-bold text-2xl mb-4'>Login</h2>
                        <label className=' '>Email</label>
                        <input name='email'  required className="w-full mt-2 outline rounded p-2 mb-2 " type="email" placeholder="Enter Your Email" />
                        <br />
                        <label>Password</label>
                        <input name='password' required className='w-full outline p-2 rounded mt-2 mb-2' type="password" placeholder="Enter Your Password" />
                        <br />
                        <button type='submit' className='cursor-pointer bg-success p-2 mt-4 rounded text-white w-full'>Submit</button>
                    </form>
                    
                </div>
            </dialog>


        </div>
    );
};

export default Login;