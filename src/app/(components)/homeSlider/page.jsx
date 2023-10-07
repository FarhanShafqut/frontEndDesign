'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import 'src/app/(components)/homeSlider/style.css'


export default class homeSlider extends Component {
    render() {
        const settings = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 3000,
            cssEase: "linear",
            infinite: true
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className="my-6" >
                        <div className="relative h-full lg:min-h-[680px] rounded-md ">
                            <div className="absolute -z-10  h-full w-full  ">
                                <div className="overflow-hidden w-full h-full ">
                                    <img src="/images/main-banner-1.jpg" className="object-cover rounded-md " width={1000} height={1000} />
                                </div>
                            </div>
                            <div className="-translate-y-12 lg:-translate-y-0 ">

                                <div className="  ms-10 space-y-5 pt-16 dark:text-orange-400 text-slate-200 " >
                                    <p className="hidden"> </p>
                                    <h3 className="text-4xl font-semibold"> Sale</h3>
                                    <p className=" text-2xl font-semibold">From 100$ to 1000$</p>
                                    <p className="text-2xl font-semibold">Special Sale</p>
                                </div>
                                <div className="ms-10  pt-2 text-orange-400 dark:text-slate-200   ">
                                    <button className={`{text-sm object-fill font-semibold p-1 px-3 rounded-full text-white  bg-slate-800 hover:bg-slate-700 active:bg-slate-900  dark:bg-orange-500 dark:hover:bg-orange-400 dark:active:bg-orange-600   }`}>ShopNow</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-6" >
                        <div className="relative w-full h-full lg:min-h-[680px] rounded-md ">

                            <div className="absolute -z-10  h-full w-full  ">
                                <div className="overflow-hidden w-full h-full ">
                                    <img src="/images/main-banner.jpg" className="object-cover rounded-md " width={1000} height={1000} />
                                </div>
                            </div>
                            <div className="-translate-y-12 lg:-translate-y-0 ">
                                <div className="ms-10 space-y-5 pt-16 dark:text-orange-400 text-slate-200   " >
                                    <p className="hidden"> </p>
                                    <h3 className="text-4xl font-semibold">Special Sale</h3>
                                    <p className=" text-2xl font-semibold">From 100$ to 1000$</p>
                                    <p className="text-2xl font-semibold">Special Sale</p>
                                </div>
                                <div className="ms-10  pt-2 text-orange-400 dark:text-slate-200   ">
                                    <button className={`{text-sm object-fill font-semibold p-1 px-3 rounded-full text-white  bg-slate-800 hover:bg-slate-700 active:bg-slate-900  dark:bg-orange-500 dark:hover:bg-orange-400 dark:active:bg-orange-600   }`}>ShopNow</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>

            </div>
        );
    }
}