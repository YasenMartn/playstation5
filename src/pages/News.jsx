import React from 'react';
import {games} from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Autoplay, Pagination, Navigation])


const News = () => {
    return (
        <div className='news'>
            <h1 className="header">Coming Soon</h1>

            <Swiper
                spaceBetween={50}
                slidesPerView={4}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                breakpoints={{
                    "0": {
                        "slidesPerView": 1,
                        "spaceBetween": 60
                    },
                    "700": {
                        "slidesPerView": 2,
                        "spaceBetween": 60
                    },
                    "1000": {
                        "slidesPerView": 3,
                        "spaceBetween": 60
                    },
                    "1400": {
                        "slidesPerView": 4,
                        "spaceBetween": 60
                    }
                }}
                autoplay={{
                    "delay": 1500,
                    "disableOnInteraction": false,
                    "pauseOnMouseEnter": false
                }}
            >
                {games.map(game =>
                    <SwiperSlide key={game.id}>
                        <div className="imgContainer">
                            <img src={game.img} alt={game.name} className="img" />
                        </div>
                        <span className="gameTitle">{game.name}</span>
                    </SwiperSlide>)
                }
            </Swiper>


        </div>
    )
}

export default News