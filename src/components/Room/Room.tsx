"use client"
import useRooms from "@/Hooks/useRooms";
import { Playfair_Display, Raleway } from "next/font/google";
import Image from "next/image";
import React from "react"

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

const Room = () => {

    const getRoom = useRooms()

    return (
        <section className="bg-numberthree bg-no-repeat bg-[length:450px_500px] bg-[left_15%_top]">
            <div className="container">
                <h2 className={playfair.className + ' mb-[100px] text-accent font-bold text-4xl '}>Наши квартиры</h2>
                <div className="grid grid-cols-2 gap-8">
                    {getRoom.map((item, index) => (
                                    <>
                                        <div className=" relative text-2xl cursor-pointer ">
                                            <Image className="w-full h-full" width={535} height={320} src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (item?.attributes?.image?.data.attributes?.url ?? '')} alt=""/>
                                            <div className={raleway.className + ' absolute left-10 bottom-10 text-white hover:text-accent transition-all'}>{item.attributes?.text}</div>
                                        </div>
                                    </>
                                ))}
                </div>
                
            </div>
        </section>        
    )
}

export default Room;