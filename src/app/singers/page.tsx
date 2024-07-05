import React from "react";
import Singers from "@/app/ui/singers/singers";

export default function Page() {
    return (
        <div className="flex-col gap-3 mt-2">
            <h1 className="text-5xl font-bold mb-12">Popular Singers</h1>
            <Singers/>
        </div>
    );
}