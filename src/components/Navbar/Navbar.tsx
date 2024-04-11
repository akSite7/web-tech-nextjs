import Link from "next/link";
import React from "react";

const menuLinks = [
    { label: 'О комплексе', url: '/' },
    { label: 'Район', url: '/about' },
    { label: 'Каталог квартир', url: '/technologies' },
    { label: 'Ипотека', url: '/catalog' },
    { label: 'Контакты', url: '/contacts' }
];

const Navbar = ( { containerStyle } : { containerStyle: string } ) => {
    return (
        <nav className={`${containerStyle}`}>
            <menu className="w-full flex items-center justify-center gap-10">
                {menuLinks.map(( item, index ) => {
                    return (
                        <>
                            <li key={index}>
                                <Link href={item.url} className="text-sm text-white hover:text-accent transition-all">{item.label}</Link>
                            </li>
                        </>
                    )
                })}
            </menu>
        </nav>
    )
}

export default Navbar;