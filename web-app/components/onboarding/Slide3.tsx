import { TextContainer } from '@/components/stepper/SectionContainers';
import { IllustrationContainer } from '@/components/stepper/SectionContainers';

import clsx from 'clsx';
import Image from 'next/image';

import commonStyles from "@/styles/onboarding/CommonSlide.module.css";
import styles from '@/styles/onboarding/Slide3.module.css';


export const Slide3 = () => {
  return (
    <>
      <TextContainer className={styles.textContainer}>
        <p className={commonStyles.title}>VIVE TUS PROPIAS EXPERIENCIAS</p>
        <p className={clsx(
          commonStyles.subtitle,
          styles.text,
        )}>
          <strong className={styles.strongText}>VIVE TU PASIÓN DE FORMA ÚNICA</strong>
          <br />COMO NUNCA LO IMAGINASTE
        </p>
      </TextContainer>
      <IllustrationContainer className={styles.illustrationContainer}>
        <Image
          className={clsx(
            commonStyles.illustration,
            styles.illustration,
          )}
          width={263}
          height={357}
          src="/images/win-mobile-perspective2.png"
          alt="win Mobile Mockup"
        />
      </IllustrationContainer>
    </>
  )
}