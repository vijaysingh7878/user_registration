import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ThankyouPage() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen text-center">
                <h1 className="text-4xl font-bold text-green-600 mb-4">🎉 Congratulations!</h1>
                <p className="text-lg text-gray-700">Your registration is complete. Thank you!</p>
                <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer" onClick={() => navigate('/')}>New user</button>
            </div>

        </div>
    )
}
