import React from 'react'
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";

export default function FormPage() {
    const tostifyMsg = (msg, status) =>
        toast(msg, { type: status == true ? "success" : "error" });
    const formHendler = (event) => {
        event.preventDefault();
        const formData = {
            name: event.target.name.value,
            class: event.target.class.value,
            pincode: event.target.pincode.value,
            email: event.target.email.value,
            phone: event.target.mobileNumber.value,
            category: event.target.category.value,
        }
        axios.post('http://localhost:3000/user/create', formData).then(
            (success) => {
                tostifyMsg(success.data.msg, success.data.status)
                if (success.data.status == 1) {
                    event.target.reset();
                }
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )

    }
    return (
        <>
            <ToastContainer autoClose={1000} />
            <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md ">
                <h2 className="text-2xl font-bold mb-6 text-center">Registration Form</h2>
                <form className="space-y-4" onSubmit={formHendler}>
                    <input
                        type="text"
                        name='name'
                        placeholder="Your Name"
                        // required
                        className="w-full p-2 border rounded-lg"
                    />
                    <input
                        type="text"
                        placeholder="Your Class"
                        name='class'
                        // required
                        className="w-full p-2 border rounded-lg"
                    />
                    <input
                        type="text"
                        placeholder="Pincode"
                        name='pincode'
                        // required
                        className="w-full p-2 border rounded-lg"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        name='email'
                        // required
                        className="w-full p-2 border rounded-lg"
                    />
                    <input
                        type="tel"
                        placeholder="Mobile Number"
                        name='mobileNumber'
                        // required
                        className="w-full p-2 border rounded-lg"
                    />
                    <select
                        // required
                        defaultValue=""
                        name='category'
                        className="w-full p-2 border rounded-lg"
                    >
                        <option value="" disabled >I am a..</option>
                        <option value="students">Students</option>
                        <option value="parent">Parent</option>
                        <option value="school">School</option>
                        <option value="college">College</option>
                        <option value="institution">Institution</option>
                        <option value="company">Company/Startup</option>
                    </select>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}
