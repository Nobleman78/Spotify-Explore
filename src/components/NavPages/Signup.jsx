import React from 'react';

const Signup = () => {
    const handleSubmit =(event)=>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password)

    }
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <a className="" onClick={() => document.getElementById('my_modal_2').showModal()}>Signup</a>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit} className='px-4'>
                        <h2 className=' text-black text-center font-bold text-2xl mb-4'>Signup</h2>
                        <label className=' text-black'>Email</label>
                        <input name='email' required className=" text-black w-full mt-2 outline rounded p-2 mb-2 " type="email" placeholder="Enter Your Email" />
                        <br />
                        <label className='text-black'>Password</label>
                        <input name='password' required className='text-black w-full outline p-2 rounded mt-2 mb-2' type="password" placeholder="Enter Your Password" />
                        <br />
                        <button className='cursor-pointer bg-success p-2 mt-4 rounded text-white w-full'>Submit</button>
                    </form>

                </div>
            </dialog>
        </div>

    );
};

export default Signup;