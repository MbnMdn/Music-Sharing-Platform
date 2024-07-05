import React from "react";
import TrendingSongCardsScrollable from "@/app/ui/dashboard/trending-song-cards-scrollable";
import Link from 'next/link'
import {FiArrowRight} from "react-icons/fi";

export default function TrendingSection() {
    return (
        <div className="flex-col gap-3 ">
            <div className="flex flex-col md:flex-row gap-3 justify-between">
                <h1 className="text-5xl font-bold mt-2 mb-1 md:mb-10">Trending Songs</h1>
                <Link className="text-sm hover:underline text-neutral-400 flex justify-end gap-1 mt-1 mb-3 md:mb-0 md:self-center " href="/trending">view
                    more
                    <FiArrowRight className="self-center"/>
                </Link>
            </div>
            <TrendingSongCardsScrollable/>
        </div>
    );
}