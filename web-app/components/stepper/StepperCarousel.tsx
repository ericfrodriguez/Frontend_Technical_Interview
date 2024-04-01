import { useState } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

import { StepperPagination } from './StepperPagination';
import styles from "@/styles/stepper/StepperCarousel.module.css";

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