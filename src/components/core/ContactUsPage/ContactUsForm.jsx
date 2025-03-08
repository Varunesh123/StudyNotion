import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

import CountryCode from '../../../data/countrycode.json';
import { apiConnector } from '../../../services/apiConnector';
import { contactusEndpoint } from '../../../services/apis';

const ContactUsForm = () => {
    const [loading, setLoading] = useState(false)
    const {
        register, 
        haldleSubmit, 
        reset, 
        formState: {errors, isSubmitSuccessful}
    } = useForm()

    // const submitContactForm = async(data) => {
    //     console.log("Form Data", data)
    //     try {
    //         setLoading(true)
    //         const res = await apiConnector(
    //             "POST",
    //             contactusEndpoint.CONTACT_US_API,
    //             data
    //         )
    //         setLoading(false)
    //     } catch (error) {
    //         console.log("ERROR MESSAGE", error.message)
    //         setLoading(false)
    //     }
    //     useEffect(() => {
    //         if(isSubmitSuccessful){
    //             reset({
    //                 email: "",
    //                 firstName: "",
    //                 lastName: "",
    //                 message: "",
    //                 phoneNo: ""
    //             })
    //         }
    //     }, [reset, isSubmitSuccessful])
  return (
    <form
        className="flex flex-col gap-7"
        // onSubmit={handleSubmit(submitContactForm)}
    >
        <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
                <label htmlFor='firstName' className='lable-style'>
                    First Name
                </label>
                <input
                    type='text'
                    name='firstName'
                    id='firstName'
                    placeholder="Enter first name"
                    className="form-style"
                    {...register("firstname", {required: true})}
                />
                {errors.firstname && (
                    <span className="-mt-1 text-[12px] text-yellow-100">
                        Please enter your name.
                    </span>
                )}
            </div>
            <div className="flex flex-col gap-2 lg:w-[48%]">
                <label htmlFor="lastname" className="lable-style">
                    Last Name
                </label>
                <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Enter last name"
                    className="form-style"
                    {...register("lastname")}
                />
            </div>
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="email" className="lable-style">
                Email Address
            </label>
            <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email address"
                className="form-style"
                {...register("email", { required: true })}
            />
            {errors.email && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                    Please enter your Email address.
                </span>
            )}
        </div>
    </form>
  )
}

export default ContactUsForm
