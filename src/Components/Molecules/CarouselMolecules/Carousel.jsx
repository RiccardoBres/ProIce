import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Carousel.css';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image1 from '../../../Layout/Assets/CarouselProducts/carousel.jpg';
import Image2 from '../../../Layout/Assets/CarouselProducts/carousel4.jpg';
import Image3 from '../../../Layout/Assets/CarouselProducts/carousel7.jpg';
import Image4 from '../../../Layout/Assets/CarouselProducts/carousel6.jpg';
import Image5 from '../../../Layout/Assets/CarouselProducts/carousel.jpg';
import Image6 from '../../../Layout/Assets/CarouselProducts/carousel4.jpg';


const Carousel = () => {
    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={false}
            slidesPerView={2}
            spaceBetween={40}
            coverflowEffect={{
                rotate: 50, // Nessuna rotazione
                stretch: 50, // Allunga leggermente le immagini laterali
                depth: 50, // Effetto 3D sulle immagini
                modifier: 1, // Intensità dell'effetto
                slideShadows: false, // Ombre laterali
            }}
            pagination={false} // Abilita i punti di navigazione
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }} // Aggiungi la navigazione
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src={Image1} alt="Nature 1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Image2} alt="Nature 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Image3} alt="Nature 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Image4} alt="Nature 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Image5} alt="Nature 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Image6} alt="Nature 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Image1} alt="Nature 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Image2} alt="Nature 2" />
            </SwiperSlide>

            <FaArrowLeft size={30} color="#fff" className="swiper-button-prev" /> {/* Icona freccia sinistra */}
            <FaArrowRight size={30} color="#fff" className="swiper-button-next" /> {/* Icona freccia destra */}
        </Swiper>
    );
};

export default Carousel;
