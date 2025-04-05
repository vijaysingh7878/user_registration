import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";

export default function FormPage() {
    const tostifyMsg = (msg, status) =>
        toast(msg, { type: status == true ? "success" : "error" });
    const navigate = useNavigate();
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
        axios.post('https://my-backend.onrender.com/user/create', formData).then(
            (success) => {
                tostifyMsg(success.data.msg, success.data.status)
                if (success.data.status == 1) {
                    event.target.reset();
                    navigate('/thankyou')
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
            <div className="max-w-lg mx-auto mt-16 p-8 bg-white rounded-3xl shadow-lg border border-gray-100">
                <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">Register Now</h2>
                <form className="space-y-6" onSubmit={formHendler}>

                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="text"
                        name="class"
                        placeholder="Class"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="text"
                        name="pincode"
                        placeholder="Pincode"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="tel"
                        name="mobileNumber"
                        placeholder="Mobile Number"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <select
                        required
                        defaultValue=""
                        name="category"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="" disabled>I am a...</option>
                        <option value="students">Student</option>
                        <option value="parent">Parent</option>
                        <option value="school">School</option>
                        <option value="college">College</option>
                        <option value="institution">Institution</option>
                        <option value="company">Company/Startup</option>
                    </select>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold py-3 rounded-xl shadow-md"
                    >
                        Submit
                    </button>
                </form>
            </div>

        </>
    )
}
