"use client"

// import {
//     UserGroupIcon,
//     HomeIcon,
//     DocumentDuplicateIcon,
// } from '@heroicons/react/24/outline';
import {FiHome} from "react-icons/fi";
import {HiOutlineUser} from "react-icons/hi";
import {TbLogout, TbNotification} from "react-icons/tb";
import {RiHeart3Line} from "react-icons/ri";


import Link from 'next/link';
import {usePathname} from 'next/navigation';
import clsx from 'clsx';

const links = [
    {name: 'Home', href: '/dashboard', icon: FiHome},
    {name: 'Profile', href: '/user', icon: HiOutlineUser,},
    // {name: 'Favorites', href: '/dashboard/customers', icon: RiHeart3Line},
    // {name: 'Notifications', href: '/dashboard/customers', icon: TbNotification},
    {name: 'Log Out', href: '/register', icon: TbLogout},
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
                        className={clsx(
                            'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-transparent p-3 text-sm font-medium hover:bg-neutral-800  md:flex-none md:justify-start md:p-2 md:px-3',
                            // {},
                        )}>
                        <LinkIcon className="w-6 size-4 "/>
                        <p className="hidden text-base md:block ">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}
