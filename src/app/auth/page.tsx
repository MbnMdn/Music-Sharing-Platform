"use client"
import React from "react";
import Slider from "@/app/ui/register/slider";
import AuthForm from "@/app/auth/auth-form";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Page() {
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState('');


    useEffect(() => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            const error = params.get('error');
            if (error) {
                setErrorMessage(decodeURIComponent(error));
            }
        }
    }, [router]);

    return (
        <div data-theme="light">
            <div className="flex h-screen w-screen items-center justify-center content-center ">
                <div className="hidden md:block md:w-1/2 lg:w-2/3">
                    <Slider/>
                </div>
                <div
                    className="flex flex-col h-screen items-center m-10 md:w-1/2 lg:w-1/3 align-middle justify-around content-center">
                    <p>{errorMessage ? errorMessage : ""}</p>
                    <AuthForm/>
                </div>
            </div>
        </div>
    );
}