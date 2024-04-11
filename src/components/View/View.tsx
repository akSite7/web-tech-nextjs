"use client"
import { Playfair_Display, Raleway } from "next/font/google";
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

const View = () => {
    return (
        <section className="w-full bg-view py-[200px] bg-center bg-no-repeat">
            <div className="container text-white">
                <h3 className={playfair.className + ' mb-12 text-4xl text-accent font-bold '}>Хотите посмотреть?</h3>
                <div className="grid grid-cols-2 gap-[35px]">
                    <p className={raleway.className + ' max-w-[535px] mt-[50px'}>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.</p>
                    <div className="grid grid-cols-2 gap-x-[30px] max-w-[550px]">
                        <input className="w-[230px] h-[50px] text-center opacity-30" type="text" placeholder="Ваше имя"/>
                        <input className="w-[230px] h-[50px] text-center opacity-30" type="tel" placeholder="Ваш телефон"/>
                        <span className="max-w-[700px] text-[11px] text-center pt-2 block">
                            *Мы никому не передаем ваши данные. 
                            <br />И не сохраняем ваш номер в базу.
                        </span>
                        <button className="bg-accent w-[230px] h-[50px] font-bold">Посмотреть район</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default View;