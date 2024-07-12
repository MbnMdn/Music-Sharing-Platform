import {FiInfo} from "react-icons/fi";
import React from "react";
import {Button} from "@/components/ui/button"
import {HoverCard, HoverCardContent, HoverCardTrigger,} from "@/components/ui/hover-card"

export default function UserStatsHover({artist}: { artist: any }) {
    const date = artist?.created_at.split(' ')[0];
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <Button variant="link" className="text-blue-50"><FiInfo className="block" size={20}/></Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                    <div className="space-y-1">
                        {/*<h4 className="text-sm font-semibold">User statistics:</h4>*/}
                        <p className="text-sm">
                            Total likes: {artist?.like_count}
                        </p>
                        <p className="text-sm">
                            Total views: {artist?.views}
                        </p>
                        <div className="flex items-center pt-2">
                            {/*<CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}*/}
                            <span className="text-xs text-muted-foreground">joined {date}</span>
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>


    );
}