
import React from "react";
import Reg2 from "@/app/register/reg2";
import Reg from "@/app/register/reg";
import Slider from "@/app/register/slider";
import Form from "@/app/register/form";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function Page() {
    return (
        <div data-theme="light">
            <div className="flex h-screen w-screen items-center justify-center content-center ">
                <div className="w-2/3">
                    <Slider/>
                </div>
                <div className="flex w-1/3 align-middle justify-around content-center">
                    <Form/>
                </div>
            </div>
        </div>
    );
}