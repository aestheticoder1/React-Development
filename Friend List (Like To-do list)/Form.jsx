import React from 'react';
import { useForm } from 'react-hook-form';

function Form({handleClickData}) {

    const { register, handleSubmit, reset } = useForm();

    return(
        <div >
            <form className=' flex gap-8 items-center' action="" onSubmit={handleSubmit((data)=>handleClickData(data,reset))}>
                <input className='p-1 text-lg border-none font-semibold' {...register('your_name')} type="text" placeholder='Enter Your Name' />
                <input className='p-1 text-lg border-none font-semibold' {...register('your_email')} type="email" placeholder='Enter Your Email'/>
                <input className='p-1 text-lg border-none font-semibold' {...register('your_image')} type="text" placeholder='Enter Image Url'/>
                <input className=' text-white bg-green-600 px-2 py-1 font-semibold rounded-md text-lg' type="submit" />
           </form>
        </div>
    )
    
}

export default Form;