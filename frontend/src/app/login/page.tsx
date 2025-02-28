"use client"
import React, { useState } from 'react';
import { Button, Label, TextInput, Card } from 'flowbite-react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import Link from "next/link";

export default function () {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login submitted:', formData);
        // Add authentication logic here
    };

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

                        <p className="text-gray-500 text-sm mt-6">WELCOME BACK 👋</p>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Continue to your Account.</h3>

                        <div className="relative flex py-5 items-center">
                            <div className="flex-grow border-t border-gray-200"></div>
                            <span className="flex-shrink mx-4 text-gray-500 text-sm">Use Email</span>
                            <div className="flex-grow border-t border-gray-200"></div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email" value="EMAIL" className="text-xs text-gray-500" />
                                </div>
                                <TextInput
                                    id="email"
                                    type="email"
                                    placeholder="johndoe@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="password" value="PASSWORD" className="text-xs text-gray-500" />
                                </div>
                                <div className="relative">
                                    <TextInput
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••••••••••"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <HiEyeOff className="text-gray-500" /> : <HiEye className="text-gray-500" />}
                                    </button>
                                </div>
                            </div>

                            <Button type="submit" className="w-full bg-gray-800 hover:bg-gray-900">
                                CONTINUE
                            </Button>
                        </form>

                        <p className="text-center text-gray-500 text-sm mt-6">
                            Are you a Newbie? <Link href="/signup" className="font-bold text-gray-800">GET STARTED - IT'S FREE</Link>
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="w-1/2 bg-gray-100 flex items-center justify-center p-8">
                        <div className="w-full h-full">
                            <img src="/helping-hands.png" alt="helping-hands"/>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-700 text-white p-6 text-center">
                <p>Footer</p>
            </footer>
        </div>
    );
};

