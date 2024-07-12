"use client";
import {TbHome, TbHomeFilled, TbLogout} from "react-icons/tb";
import {FaRegUser, FaUser} from "react-icons/fa6";
import {BsFileMusic, BsFileMusicFill} from "react-icons/bs";

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useQuery} from "@apollo/client";
import {GET_ME} from "@/graphql/queries";
import {useEffect, useState} from 'react';


export default function NavLinks() {
    const {data, loading, error} = useQuery(GET_ME, {});
    const isMobile = useMobileMediaQuery();

    const links = [
        {name: 'Home', href: '/', icon: TbHome},
        {name: 'Profile', href: `/users/${data?.me.id}`, icon: FaRegUser},
        {name: 'Log Out', href: '/auth', icon: TbLogout},
    ];

    if (isMobile) {
        links.push({name: 'Player', href: '/player', icon: BsFileMusic});
    }

    const pathname = usePathname();

    return (
        <>
            {links.map((link) => {
                let LinkIcon = link.icon;
                if (link.href === '/' && pathname === '/') {
                    LinkIcon = TbHomeFilled;
                } else if (link.href === `/users/${data?.me.id}` && pathname === `/users/${data?.me.id}`) {
                    LinkIcon = FaUser;
                } else if (link.href === '/player' && pathname === '/player') {
                    LinkIcon = BsFileMusicFill;
                }

                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-transparent p-3 text-sm font-medium hover:bg-violet-900 md:hover:bg-neutral-800 md:flex-row md:flex-none md:justify-start md:p-2 md:px-3"
                    >
                        <LinkIcon className="size-4  md:size-3.5 align-middle"/>
                        <p className="hidden text-base md:block ">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}


function useMobileMediaQuery() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();

        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile;
}
