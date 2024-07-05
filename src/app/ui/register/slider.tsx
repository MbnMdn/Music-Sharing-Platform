'use client'
import {useEffect, useRef} from 'react';
import taylor from '../dashboard/assets/taylor.jpg'
import lanaDelRey from '../dashboard/assets/lana-del-rey.jpg'
import adele from '../dashboard/assets/adele.jpg'
import billie from '../dashboard/assets/billie.jpg'
import duaLipa from '../dashboard/assets/dua-lipa2.jpg'
import sheren from '../dashboard/assets/ed-sheren.jpg'
import gaga from '../dashboard/assets/gaga.jpg'
import halsey from '../dashboard/assets/halsey.jpg'
import harry from '../dashboard/assets/harry1.jpg'
import kanye from '../dashboard/assets/kanye.jpg'
import maneskin from '../dashboard/assets/maneskin.jpg'
import mj from '../dashboard/assets/mj.jpg'
import rihana from '../dashboard/assets/rihana.jpg'
import shakira from '../dashboard/assets/shakira.jpg'
import weeknd from '../dashboard/assets/weeknd.jpg'
import sia from '../dashboard/assets/sia.jpg'


import Image from "next/image";

export default function Slider() {
    const carouselRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            const totalScrollDistance = carousel.scrollWidth - carousel.clientWidth;
            const duration = 200; // Total duration to scroll from start to end
            const frameRate = 10; //  frames per second
            const scrollDistancePerFrame = totalScrollDistance / (duration / frameRate);

            let scrollDirection = 1; // 1 for forward, -1 for backward

            const scroll = () => {
                if (carousel.scrollLeft >= totalScrollDistance) {
                    scrollDirection = -1; // Change direction to backward
                } else if (carousel.scrollLeft <= 0) {
                    scrollDirection = 1; // Change direction to forward
                }

                carousel.scrollLeft += scrollDistancePerFrame * scrollDirection;
            // const scroll = () => {
            //     if (carousel.scrollLeft == carousel.scrollWidth ) {
            //         // carousel.scrollLeft = 0; // Reset to the beginning
            //         carousel.scrollLeft = -scrollDistancePerFrame;
            //         console.log(carousel.scrollLeft)
            //
            //     } else {
            //         carousel.scrollLeft += scrollDistancePerFrame;
            //         console.log(carousel.scrollLeft)
            //     }
                requestAnimationFrame(scroll);
            };
            requestAnimationFrame(scroll);
        }
    }, []);


    return (
        <div className="carousel h-screen w-fill rounded-box space-x-4 p-4" style={{ pointerEvents: 'none'}} ref={carouselRef}>
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
        </div>
    );
}
