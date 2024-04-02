import { TextContainer } from '@/components/stepper/SectionContainers';
import { IllustrationContainer } from '@/components/stepper/SectionContainers';

import clsx from 'clsx';
import Image from 'next/image';

import commonStyles from "@/styles/onboarding/CommonSlide.module.css";
import styles from '@/styles/onboarding/Slide2.module.css';


export const Slide2 = () => {
  return (
    <>
      <TextContainer className={styles.textContainer}>
        <p className={commonStyles.title}>INGRESA AL MERCADO DE PASES</p>
        <p className={clsx(
          commonStyles.text,
          styles.text,
        )}>
          INVIERTE Y GANA CON LA PRÓXIMA
          <strong className={styles.strongText}>{'\n'}&nbsp;TRANSFERENCIA DEL JUGADOR</strong>
        </p>
      </TextContainer>
      <IllustrationContainer className={styles.illustrationContainer}>
        <Image
          className={clsx(
            commonStyles.illustration,
            styles.illustration
          )}
          width={375}
          height={587}
          src="/images/diego-alves-card.png"
          alt="Diego Alves Image"
          priority={true}
        />
      </IllustrationContainer>
    </>
  )
}