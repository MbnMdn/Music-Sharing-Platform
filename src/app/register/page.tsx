import React from "react";
import Slider from "@/app/register/slider";
import Form from "@/app/register/form";

export default function Page() {
    return (
        <div data-theme="light">
            <div className="flex h-screen w-screen items-center justify-center content-center ">
                <div className="hidden md:block md:w-1/2 lg:w-2/3">
                    <Slider/>
                </div>
                <div className="flex md:w-1/2 lg:w-1/3 align-middle justify-around content-center p-1">
                    <Form/>
                </div>
            </div>
        </div>
    );
}