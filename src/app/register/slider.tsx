'use client'
import { useEffect, useRef } from 'react';
import MusicPic from "@/app/ui/dashboard/assets/music-pic.jpg";

export default function Slider() {
    const carouselRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            const totalScrollDistance = carousel.scrollWidth - carousel.clientWidth;
            const duration = 50; // Total duration to scroll from start to end
            const frameRate = 1000 / 60; // 60 frames per second
            const scrollDistancePerFrame = totalScrollDistance / (duration / frameRate);

            const scroll = () => {
                if (carousel.scrollLeft >= totalScrollDistance) {
                    carousel.scrollLeft = 0; // Reset to the beginning
                } else {
                    carousel.scrollLeft += scrollDistancePerFrame;
                }
                requestAnimationFrame(scroll);
            };

            requestAnimationFrame(scroll);
        }
    }, []);

    return (
        <div className="carousel rounded-box h-screen overflow-x-scroll" ref={carouselRef}>
            <div className="carousel-item">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                    alt="Burger"/>
            </div>
            <div className="carousel-item">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                    alt="Burger"/>
            </div>
            <div className="carousel-item">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                    alt="Burger"/>
            </div>
            <div className="carousel-item">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                    alt="Burger"/>
            </div>
            <div className="carousel-item">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                    alt="Burger"/>
            </div>
            <div className="carousel-item">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                    alt="Burger"/>
            </div>
            <div className="carousel-item">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                    alt="Burger"/>
            </div>
        </div>
    );
}
