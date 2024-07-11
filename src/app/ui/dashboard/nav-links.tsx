"use client"

import {FiHome} from "react-icons/fi";
import {HiOutlineUser} from "react-icons/hi";
import {TbLogout} from "react-icons/tb";
import { TbHome } from "react-icons/tb";



import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useQuery} from "@apollo/client";
import {GET_ME} from "@/graphql/queries";





export default function NavLinks() {

    const {data, loading, error} = useQuery(GET_ME, {
    });

    const links = [
        {name: 'Home', href: '/', icon: FiHome},
        {name: 'Profile', href: `/user/${data?.me.id}`, icon: HiOutlineUser,},
        // {name: 'Favorites', href: '/dashboard/customers', icon: RiHeart3Line},
        // {name: 'Upload', href: '', icon: TbUpload},
        {name: 'Log Out', href: '/auth', icon: TbLogout},
    ];

    const pathname = usePathname();
    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className=
                            "flex  h-[48px] grow items-center  justify-center  gap-2 rounded-md bg-transparent p-3 text-sm font-medium hover:bg-violet-900 md:hover:bg-neutral-800 md:flex-row md:flex-none md:justify-start md:p-2 md:px-3"
                    >
                        {/*className={clsx(*/}
                        {/*    'flex h-[48px] grow items-center justify-between gap-2 rounded-md bg-transparent p-3 text-sm font-medium hover:bg-neutral-800  md:flex-none md:justify-start md:p-2 md:px-3',*/}
                        {/*    // {},*/}
                        {/*)}>*/}

                        <LinkIcon className="w-6 size-5 md:size-4 align-middle"/>
                        <p className="hidden text-base md:block ">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}
