// "use client"
//
// import {FiHome} from "react-icons/fi";
// import {HiOutlineUser} from "react-icons/hi";
// import {TbLogout} from "react-icons/tb";
//
// import Link from 'next/link';
// import {usePathname} from 'next/navigation';
// import {useQuery} from "@apollo/client";
// import {GET_ME} from "@/graphql/queries";
// import { TbHome } from "react-icons/tb";
//
// export default function NavLinks() {
//
//     const {data, loading, error} = useQuery(GET_ME, {
//     });
//
//     const links = [
//         {name: 'Home', href: '/', icon: TbHome},
//         {name: 'Profile', href: `/users/${data?.me.id}`, icon: HiOutlineUser,},
//         {name: 'Log Out', href: '/auth', icon: TbLogout},
//     ];
//
//     const pathname = usePathname();
//     return (
//         <>
//             {links.map((link) => {
//                 const LinkIcon = link.icon;
//                 return (
//                     <Link
//                         key={link.name}
//                         href={link.href}
//                         className=
//                             "flex  h-[48px] grow items-center  justify-center  gap-2 rounded-md bg-transparent p-3 text-sm font-medium hover:bg-violet-900 md:hover:bg-neutral-800 md:flex-row md:flex-none md:justify-start md:p-2 md:px-3"
//                     >
//                         {/*className={clsx(*/}
//                         {/*    'flex h-[48px] grow items-center justify-between gap-2 rounded-md bg-transparent p-3 text-sm font-medium hover:bg-neutral-800  md:flex-none md:justify-start md:p-2 md:px-3',*/}
//                         {/*    // {},*/}
//                         {/*)}>*/}
//
//                         <LinkIcon className="w-6 size-5 md:size-4 align-middle" size={20}/>
//                         <p className="hidden text-base md:block ">{link.name}</p>
//                     </Link>
//                 );
//             })}
//         </>
//     );
// }






"use client"


import HomeIconNotActive from "@/app/ui/icons/HomeIconNotActive";


import { FiHome } from "react-icons/fi";
import { TbHomeFilled, TbHome } from "react-icons/tb";

import { HiOutlineUser } from "react-icons/hi";
import { TbLogout } from "react-icons/tb";
import { RiUser3Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useQuery } from "@apollo/client";
import { GET_ME } from "@/graphql/queries";

export default function NavLinks() {

    const { data, loading, error } = useQuery(GET_ME, {});

    const links = [
        { name: 'Home', href: '/', icon: TbHome },
        { name: 'Profile', href: `/users/${data?.me.id}`, icon: FaRegUser },
        { name: 'Log Out', href: '/auth', icon: TbLogout },
    ];

    const pathname = usePathname();

    return (
        <>
            {links.map((link) => {
                let LinkIcon = link.icon;
                if (link.href === '/' && pathname === '/') {
                    LinkIcon = TbHomeFilled;
                } else if (link.href === `/users/${data?.me.id}` && pathname === `/users/${data?.me.id}`) {
                    LinkIcon = FaUser;
                }

                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-transparent p-3 text-sm font-medium hover:bg-violet-900 md:hover:bg-neutral-800 md:flex-row md:flex-none md:justify-start md:p-2 md:px-3"
                    >
                        <LinkIcon className="size-5  md:size-3.5 align-middle"/>
                        <p className="hidden text-base md:block ">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}
