"use client"

import {FiHome} from "react-icons/fi";
import {HiOutlineUser} from "react-icons/hi";
import {TbLogout} from "react-icons/tb";


import Link from 'next/link';
import {usePathname} from 'next/navigation';

const links = [
    {name: 'Home', href: '/dashboard', icon: FiHome},
    {name: 'Profile', href: '/artist', icon: HiOutlineUser,},
    // {name: 'Favorites', href: '/dashboard/customers', icon: RiHeart3Line},
    // {name: 'Upload', href: '', icon: TbUpload},
    {name: 'Log Out', href: '/auth', icon: TbLogout},
];

export default function NavLinks() {
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
