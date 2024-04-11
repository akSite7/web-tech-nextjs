"use client";
import React from "react";
import { Playfair_Display, Raleway } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const playfair = Playfair_Display({
    subsets: ['cyrillic'],
    weight: ['400', '500', '700'],
    variable: "--font-playfair",
});

const raleway = Raleway({
    subsets: ['cyrillic'],
    weight: ['300', '400', '500', '700'],
    variable: "--font-raleway",
});

const Hero = () => {
    return (
        <section className="w-full bg-hero h-screen bg-center bg-no-repeat pt-[355px] mt-[-140px]" id="hero">
            <div className="container mx-auto">
                <div className={playfair.className}>
                    <h1 className="w-full text-center text-accent text-5xl font-bold leading-[65px]">
                        Жилой комплекс <br /> в историческом центре
                    </h1>
                    <Link className="flex justify-center pt-[80px]" href="#quality">
                        <Image src='/assets/img/hero/mouse.svg' alt="Переход" width={45} height={50}/>
                    </Link>
                    <ul className={raleway.className + ' text-white text-lg flex gap-[100px] ml-[-60px] pt-[200px] justify-center'}>
                        <li className="flex">
                            <Image src='/assets/img/hero/map.svg' className="mr-3" alt="Карта" width={15} height={30}/>Наб. реки Фонтанки 10-15
                        </li>
                        <li className="flex">
                            <Image src='/assets/img/hero/phone.svg' className="mr-3" alt="Телефон" width={20} height={30}/> 8 (812) 123-45-67
                        </li>
                    </ul>

                    
                    
                </div>
            </div>
        </section>
    )
}

export default Hero;