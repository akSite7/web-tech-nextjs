"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";

const footerOne = [
    { label: 'О комплексе', url: '/' },
    { label: 'Район', url: '/about' },
    { label: 'Каталог квартир', url: '/technologies' },
    { label: 'Ипотека', url: '/catalog' },
    { label: 'Контакты', url: '/contacts' }
];

const Footer = () => {
    return (
        <footer className="bg-footer p-[60px]">
            <div className="container ">
                <Link href="/">
                    <Image src='/assets/img/logo.svg' alt="Логотип сайта" width={130} height={60}/>
                </Link>
                {footerOne.map(( item, index ) => {
                    return (
                        <>
                            <li className="list-none" key={index}>
                                <Link href={item.url} className="text-sm text-white hover:text-accent transition-all">{item.label}</Link>
                            </li>
                        </>
                    )
                })}
            </div>
        </footer>
    )
}

export default Footer;