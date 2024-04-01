import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { StepperPagination } from './StepperPagination';
import { NavigationButton } from './NavigationButton';

import 'swiper/css';
import styles from "@/styles/stepper/StepperCarousel.module.css";

export interface StepperCarouselProps {
  data: {
    name: string;
    component: () => JSX.Element;
  }[];
}

export const StepperCarousel = ({ data }: StepperCarouselProps) => {

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  return (
    <div className={styles.container}>
      <Swiper
        className={styles.swiper}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
      >
        <StepperPagination data={data} />
        {
          data.map(({ name, component }) => {
            const Component = component;

            return (
              <SwiperSlide key={name} className={styles['swiper-slide']}>
                <Component />
              </SwiperSlide>
            )
          })
        }
        <NavigationButton />
      </Swiper>
    </div>
  )
}