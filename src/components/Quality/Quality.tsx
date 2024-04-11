"use client"
import useDostoins from "@/Hooks/useDostoins";
import Image from "next/image";
import React, { useId } from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    subsets: ['cyrillic'],
    weight: ['300', '400', '500', '700'],
    variable: "--font-roboto",
});

const Quality = () => {

    const getDostoin = useDostoins()

    return (
        <section className=' py-[130px] bg-numbertwo bg-no-repeat bg-[length:300px_500px] bg-[87%] ' id='quality'>
            <div className={roboto.className + " container mx-auto "}>
                <div className="w-full flex gap-12 text-[20px] font-[300] text-center text-white">
                    {getDostoin.map((item, index) => (
                                <>
                                    <div className="max-w-[200px] flex flex-col items-center">
                                        <Image width={80} height={80} src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (item?.attributes?.image?.data.attributes?.url ?? '')} alt=""/>
                                        <div className="mt-10">{item.attributes?.text}</div>
                                    </div>
                                </>
                            ))}
                </div>
                
            </div>  
        </section>
    )
}

export default Quality;