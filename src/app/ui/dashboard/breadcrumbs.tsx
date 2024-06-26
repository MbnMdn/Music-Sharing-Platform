import React from "react";


export default function Breadcrumbs() {
    return (
        <div className="breadcrumbs text-sm mb-2">
            <ul>
                <li className="text-neutral-500"><a>Home</a></li>
                <li className="text-neutral-500"><a>Documents</a></li>
                <li className="text-neutral-500">Add Document</li>
            </ul>
        </div>
    );
}