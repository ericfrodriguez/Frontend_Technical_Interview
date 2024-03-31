import { useState } from 'react';
import clsx from 'clsx';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';

import styles from "@/styles/ui/StepperCarousel.module.css";



interface StepperPaginationProps {
  data: React.ReactNode[];
  currentSlide: number;
}

const StepperPagination = ({ data, currentSlide }: StepperPaginationProps) => {

  const swiper = useSwiper();

  return (
    <div className={styles.pagination}>
      {
        data.map((_, index) => (
          <span
            key={index}
            onClick={() => swiper.slideTo(index)}
            className={clsx(
              styles['pag-item'],
              currentSlide === index && styles['pag-item__active']
            )}
          />
        ))
      }
    </div>
  );
}

export const StepperCarousel = () => {

  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const data = [...new Array(6).map(value => '2')];

  return (
    <div className={styles.container}>
      <Swiper
        className={styles.swiper}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
      >
        <StepperPagination data={data} currentSlide={currentSlide} />
        {
          data.map((_, index) => (
            <SwiperSlide key={index} className={styles['swiper-slide']}>Slide {index + 1}</SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}