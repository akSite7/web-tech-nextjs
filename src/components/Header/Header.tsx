"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";

const Header = () => {
    
    return (
        <header className="w-full">
            <div className="container pt-5 mx-auto h-full flex items-center">
                <div className="relative w-full h-full flex items-center justify-between">
                    <Link href="/">
                        <Image src='/assets/img/logo.svg' alt="Логотип сайта" width={130} height={60}/>
                    </Link>
                    <Navbar containerStyle="hidden md:flex"/>
                </div>
            </div>
        </header>
    )

}

export default Header;