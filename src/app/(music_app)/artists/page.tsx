"use client"

import React from "react";
import Singers from "@/app/ui/artists/singers";

export default function Page() {
    return (
        <div className="flex-col gap-3 mt-2">
            <h1 className="text-5xl font-bold mb-12">Popular Artists</h1>
            <Singers/>
        </div>
    );
}