import clsx from "clsx";
import { useSwiper } from "swiper/react";
import styles from '@/styles/stepper/StepperPagination.module.css';

interface StepperPaginationProps {
  data: React.ReactNode[];
  currentSlide: number;
}

export const StepperPagination = ({ data, currentSlide }: StepperPaginationProps) => {

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