'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, FreeMode, Keyboard, Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import type { GalleryImage } from '@/types/camper';
import css from './CamperGallery.module.css';

type CamperGalleryProps = {
  name: string;
  gallery: GalleryImage[];
};

export default function CamperGallery({ name, gallery }: CamperGalleryProps) {
  const images = [...gallery].sort((a, b) => a.order - b.order);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  if (images.length === 0) return null;

  return (
    <div className={css.gallery}>
      <Swiper
        className={css.main}
        modules={[A11y, Keyboard, Navigation, Thumbs]}
        navigation
        keyboard={{ enabled: true }}
        a11y={{ enabled: true }}
        loop={images.length > 1}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={image.id} className={css.mainSlide}>
            <Image
              src={image.original}
              alt={`${name}, photo ${image.order}`}
              fill
              sizes="(min-width: 1280px) 638px, 100vw"
              priority={index === 0}
              className={css.cover}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        className={css.thumbs}
        modules={[FreeMode, Thumbs]}
        onSwiper={setThumbsSwiper}
        slidesPerView={images.length}
        spaceBetween={32}
        freeMode
        watchSlidesProgress
      >
        {images.map((image, index) => (
          <SwiperSlide key={image.id} className={css.thumbSlide}>
            <Image
              src={image.thumb}
              alt={`${name}, photo ${image.order}`}
              fill
              sizes="136px"
              priority={index === 0}
              className={css.thumb}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
