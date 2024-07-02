'use client'
import {useEffect, useRef} from 'react';
import taylor from '../ui/dashboard/assets/taylor.jpg'
import lanaDelRey from '../ui/dashboard/assets/lana-del-rey.jpg'
import adele from '../ui/dashboard/assets/adele.jpg'
import billie from '../ui/dashboard/assets/billie.jpg'
import duaLipa from '../ui/dashboard/assets/dua-lipa2.jpg'
import sheren from '../ui/dashboard/assets/ed-sheren.jpg'
import gaga from '../ui/dashboard/assets/gaga.jpg'
import halsey from '../ui/dashboard/assets/halsey.jpg'
import harry from '../ui/dashboard/assets/harry1.jpg'
import harry2 from '../ui/dashboard/assets/harry2.jpg'
import kanye from '../ui/dashboard/assets/kanye.jpg'
import maneskin from '../ui/dashboard/assets/maneskin.jpg'
import mj from '../ui/dashboard/assets/mj.jpg'
import rihana from '../ui/dashboard/assets/rihana.jpg'
import shakira from '../ui/dashboard/assets/shakira.jpg'
import weeknd from '../ui/dashboard/assets/weeknd.jpg'
import sia from '../ui/dashboard/assets/sia.jpg'




import Image from "next/image";

export default function Slider() {
    const carouselRef = useRef<HTMLDivElement | null>(null);

    // useEffect(() => {
    //     const carousel = carouselRef.current;
    //     if (carousel) {
    //         const totalScrollDistance = carousel.scrollWidth - carousel.clientWidth;
    //         const duration = 50; // Total duration to scroll from start to end
    //         const frameRate = 1000 / 60; // 60 frames per second
    //         const scrollDistancePerFrame = totalScrollDistance / (duration / frameRate);
    //
    //         const scroll = () => {
    //             if (carousel.scrollLeft >= totalScrollDistance) {
    //                 carousel.scrollLeft = 0; // Reset to the beginning
    //             } else {
    //                 carousel.scrollLeft += scrollDistancePerFrame;
    //             }
    //             requestAnimationFrame(scroll);
    //         };
    //         requestAnimationFrame(scroll);
    //     }
    // }, []);

    return (
        <div className="carousel h-screen w-fill rounded-box space-x-4 p-4 ">
            {/*<div className="carousel rounded-box h-screen overflow-x-scroll" ref={carouselRef}>*/}
            <div className="carousel-item ">
                <Image
                    src={taylor.src}
                    width={400}
                    height={2160}
                    alt="Burger"
                    className="rounded-box"
                />
            </div>
            <div className="carousel-item ">
                <Image
                    src={lanaDelRey.src}
                    width={400}
                    height={2160}
                    alt="Burger"
                    className="rounded-box"
                />
            </div>

            <div className="carousel-item ">
                <Image
                    src={adele.src}
                    width={400}
                    height={2160}
                    alt="Burger"
                    className="rounded-box"
                />
            </div>

            <div className="carousel-item ">
                <Image
                    src={billie.src}
                    width={400}
                    height={2160}
                    alt="Burger"
                    className="rounded-box"
                />
            </div>
            <div className="carousel-item ">
                <Image
                    src={duaLipa.src}
                    width={400}
                    height={2160}
                    alt="Burger"
                    className="rounded-box"
                />
            </div>
            <div className="carousel-item ">
                <Image
                    src={sheren.src}
                    width={400}
                    height={2160}
                    alt="Burger"
                    className="rounded-box"
                />
            </div>
            <div className="carousel-item ">
                <Image
                    src={gaga.src}
                    width={400}
                    height={2160}
                    alt="Burger"
                    className="rounded-box"
                />
            </div>
            <div className="carousel-item ">
                <Image
                    src={halsey.src}
                    width={400}
                    height={2160}
                    alt="Burger"
                    className="rounded-box"
                />
            </div>
            <div className="carousel-item ">
                <Image
                    src={harry.src}
                    width={400}
                    height={2160}
                    alt="Burger"
                    className="rounded-box"
                />
            </div>
            <div className="carousel-item ">
                <Image
                    src={harry2.src}
                    width={400}
                    height={2160}
                    alt="Burger"
                    className="rounded-box"
                />
            </div>
            <div className="carousel-item ">
                <Image
                    src={kanye.src}
                    width={400}
                    height={2160}
                    alt="Burger"
                    className="rounded-box"
                />
            </div>

            <div className="carousel-item ">
                <Image
                    src={maneskin.src}
                    width={400}
                    height={2160}
                    alt="Burger"
                    className="rounded-box"
                />
            </div>
            <div className="carousel-item ">
                <Image
                    src={mj.src}
                    width={400}
                    height={2160}
                    alt="Burger"
                    className="rounded-box"
                />
            </div>
            <div className="carousel-item ">
                <Image
                    src={rihana.src}
                    width={400}
                    height={2160}
                    alt="Burger"
                    className="rounded-box"
                />
            </div>
            <div className="carousel-item ">
                <Image
                    src={shakira.src}
                    width={400}
                    height={2160}
                    alt="Burger"
                    className="rounded-box"
                />
            </div>
            <div className="carousel-item ">
                <Image
                    src={weeknd.src}
                    width={400}
                    height={2160}
                    alt="Burger"
                    className="rounded-box"
                />
            </div>
            <div className="carousel-item ">
                <Image
                    src={sia.src}
                    width={400}
                    height={2160}
                    alt="Burger"
                    className="rounded-box"
                />
            </div>

            {/*<div className="carousel-item ">*/}
            {/*    <img*/}
            {/*        src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"*/}
            {/*        alt="Burger"*/}
            {/*        className="rounded-box"*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<div className="carousel-item">*/}
            {/*    <img*/}
            {/*        src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"*/}
            {/*        alt="Burger"*/}
            {/*        className="rounded-box"*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<div className="carousel-item">*/}
            {/*    <img*/}
            {/*        src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"*/}
            {/*        alt="Burger"*/}
            {/*        className="rounded-box"*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<div className="carousel-item">*/}
            {/*    <img*/}
            {/*        src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"*/}
            {/*        alt="Burger"*/}
            {/*        className="rounded-box"*/}
            {/*    /></div>*/}
            {/*<div className="carousel-item">*/}
            {/*    <img*/}
            {/*        src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"*/}
            {/*        alt="Burger"*/}
            {/*        className="rounded-box"*/}
            {/*    /></div>*/}
            {/*<div className="carousel-item">*/}
            {/*    <img*/}
            {/*        src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"*/}
            {/*        alt="Burger"*/}
            {/*        className="rounded-box"*/}
            {/*    /></div>*/}
            {/*<div className="carousel-item">*/}
            {/*    <img*/}
            {/*        src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"*/}
            {/*        alt="Burger"*/}
            {/*        className="rounded-box"*/}
            {/*    />*/}
            {/*</div>*/}
        </div>
    );
}
