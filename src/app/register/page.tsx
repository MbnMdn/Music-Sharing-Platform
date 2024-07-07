import React from "react";
import Slider from "@/app/ui/register/slider";
import AuthForm from "@/app/register/auth-form";

export default function Page() {
    return (
        <div data-theme="light">
            <div className="flex h-screen w-screen items-center justify-center content-center ">
                <div className="hidden md:block md:w-1/2 lg:w-2/3">
                    <Slider/>
                </div>
                <div className=" h-screen items-center flex m-10 md:w-1/2 lg:w-1/3 align-middle justify-around content-center">
                    <AuthForm/>
                </div>
            </div>
        </div>
    );
}