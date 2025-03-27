'use client'

import Link from "next/link";
import React from "react";
import {SignUpForm} from "@/app/sign-up/sign-up-form/sign-up-form";

const SignupPage: React.FC = () => {
    /* THIS CODE MAY NOT BE NEEDED */
    // const [formData, setFormData] = useState({
    //     email: '',
    //     password: '',
    //     username: ''
    // });
    //
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { id, value } = e.target;
    //     setFormData(prev => ({
    //         ...prev,
    //         [id]: value
    //     }));
    // };
    //
    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     console.log('Signup submitted:', formData);
    //     // Add registration logic here
    // };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Main Content */}
            <div className="flex-grow flex justify-center items-center p-6">
                <div className="flex w-full max-w-6xl bg-white rounded-lg overflow-hidden shadow-lg">
                    {/* Form Section */}
                    <div className="w-1/2 p-8 flex flex-col">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-gray-100 p-2 rounded">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold">Kind Space</h2>
                        </div>

                        <h3 className="text-2xl font-semibold text-gray-800">Sign Up for Free</h3>
                        <p className="text-xl text-gray-700 mb-1">Gain Access Instantly.</p>

                        <div className="relative flex py-5 items-center">
                            <div className="flex-grow border-t border-gray-200"></div>
                            <span className="flex-shrink mx-4 text-gray-500 text-sm">Use Email</span>
                            <div className="flex-grow border-t border-gray-200"></div>
                        </div>

                        <SignUpForm />

                        <p className="text-xs text-gray-500 mt-4 text-center">
                            By Signing up to Kind Space, means you agree to our Privacy Policy and Terms of Service
                        </p>

                        <p className="text-center text-gray-500 text-sm mt-6">
                            Already a Member? <Link href="/sign-in" className="font-bold text-gray-800">LOG IN</Link>
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="w-1/2 bg-gray-100 flex object-center items-center justify-center p-8">
                        <div className="w-full flex items-center h-full">
                            <img src="/helping-hands2.jpg" alt="holding hands"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};


export default SignupPage;
