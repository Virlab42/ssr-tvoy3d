'use client'
import './Portfolio.scss';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Zoom } from 'swiper/modules';
import 'swiper/css/zoom';
import Image from "next/image";

import item1 from '/public/content/3d1.jpg';
import item2 from '/public/content/3d2.jpg';
import item3 from '/public/content/3d3.jpg';
import item4 from '/public/content/3d4.jpg';
import item5 from '/public/content/3d5.jpg';
import item6 from '/public/content/3d6.jpg';
import item7 from '/public/content/3d7.jpg';
import item8 from '/public/content/3d8.jpg';
import item9 from '/public/content/3d9.jpg';
import item10 from '/public/content/3d10.jpg';
import item11 from '/public/content/3d11.jpg';
import item12 from '/public/content/3d12.jpg';
import item13 from '/public/content/3d13.jpg';

function Portfolio() {
    const [images] = useState([
        { original: item1, thumbnail: item1, thumbnailHeight: 70, title: 'Title 1' },
        { original: item2, thumbnail: item2, thumbnailHeight: 70, title: 'Title 2' },
        { original: item3, thumbnail: item3, thumbnailHeight: 70, title: 'Title 3' },
        { original: item4, thumbnail: item4, thumbnailHeight: 70, title: 'Title 4' },
        { original: item5, thumbnail: item5, thumbnailHeight: 70, title: 'Title 4' },
        { original: item6, thumbnail: item6, thumbnailHeight: 70, title: 'Title 4' },
        { original: item7, thumbnail: item7, thumbnailHeight: 70, title: 'Title 4' },
        { original: item8, thumbnail: item8, thumbnailHeight: 70, title: 'Title 4' },
        { original: item9, thumbnail: item9, thumbnailHeight: 70, title: 'Title 4' },
        { original: item10, thumbnail: item10, thumbnailHeight: 70, title: 'Title 4' },
        { original: item11, thumbnail: item11, thumbnailHeight: 70, title: 'Title 4' },
        { original: item12, thumbnail: item12, thumbnailHeight: 70, title: 'Title 4' },
        { original: item13, thumbnail: item13, thumbnailHeight: 70, title: 'Title 4' },
        // Добавьте остальные изображения
    ]);

  

    return (
        <div className="slider-container">
            <h3>Галерея работ, обработанных и напечатанных у нас</h3>
            <p>Мы изготавливаем быстрые прототипы и малосерийные производственные заказы для клиентов в различных отраслях.</p>
            <div className='galary'>
                {/* <ImageGallery items={images} additionalClass="custom-gallery" thumbnailHeight={50} /> */}
                <Swiper
                    slidesPerView={4}
                    spaceBetween={5}
                    navigation={true}
                    zoom={true}
                    pagination={{
                    clickable: true,
                    }}
                    breakpoints={{
                    140: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                    },
                    540: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    1500: {
                        slidesPerView: 3,
                        spaceBetween: 5,
                    },
                    1900: {
                        slidesPerView: 4,
                        spaceBetween: 5,
                    },
                    }}
                    modules={[Pagination, Navigation, Zoom]}
                    className="mySwiper"
                >
                {images.length > 0 ? (
                    images.map(article => (
                        <SwiperSlide key={article.original}>
                        <div className="swiper-zoom-container"><Image src={article.original}></Image></div>
                        </SwiperSlide>
                    ))
                ) : (
                    <p className="no-articles">Статьи не найдены</p>
                )}
                </Swiper>
            </div>
        </div>
    );
}

export default Portfolio;
