// import React from 'react';
// function Page() {

// }
//
import React from "react";
import Reg2 from "@/app/register/reg2";
import Reg from "@/app/register/reg";
import Slider from "@/app/register/slider";
import Form from "@/app/register/form";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function Page() {

    return (
        <div data-theme="cupcake">
            <div className="flex h-screen bg-neutral-100 items-center justify-center content-center ">
                <div className="w-1/2">
                    <Slider/>
                </div>
                <div className="w-1/2 bg-gray-400 h-screen   content-center">
                    <Form/>
                </div>
            </div>
        </div>

    );

}