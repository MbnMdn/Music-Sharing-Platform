import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";
import {FiInfo} from "react-icons/fi";
import React from "react";

export default function UserStatsHover({artist}: { artist: any }) {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <FiInfo className="block" size={20}/>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">User statistics:</h4>
                        <p className="text-sm">
                            Total likes: {artist?.like_count}
                        </p>
                        <p className="text-sm">
                            Total views: 1324567
                        </p>
                        <div className="flex items-center pt-2">
                            {/*<CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}*/}
                            <span className="text-xs text-muted-foreground">Joined December 2021</span>
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
}