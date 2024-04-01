import clsx from "clsx";
import { useSwiper } from "swiper/react";
import styles from '@/styles/stepper/StepperPagination.module.css';
import { StepperCarouselProps } from "./StepperCarousel";

interface StepperPaginationProps {
  data: StepperCarouselProps['data'];
}

export const StepperPagination = ({ data }: StepperPaginationProps) => {

  const swiper = useSwiper();
  const currentSlide = swiper.activeIndex;

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