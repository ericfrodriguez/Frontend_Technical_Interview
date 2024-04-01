import { useRouter } from 'next/router';
import { useSwiper } from 'swiper/react';

import styles from '@/styles/stepper/NavigationButton.module.css';

export const NavigationButton = () => {

  const router = useRouter();
  const swiper = useSwiper();

  const handleClick = () => {
    if (swiper.isEnd) {
      router.replace('/search');
      return;
    }
    swiper.slideNext();
  }

  return (
    <button
      className={styles.button}
      onClick={handleClick}
    >
      {
        swiper.isEnd ? 'FINALIZAR' : 'SIGUIENTE'
      }
    </button>
  )
}