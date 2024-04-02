import clsx from 'clsx';

import { TextContainer } from '@/components/stepper/SectionContainers';
import { IllustrationContainer } from '@/components/stepper/SectionContainers';
import { TeamLogo } from './TeamLogo';

import commonStyles from "@/styles/onboarding/CommonSlide.module.css";
import styles from '@/styles/onboarding/Slide4.module.css';
import { logos } from './teamLogoData';

export const Slide4 = () => {
  return (
    <>
      <TextContainer className={styles.textContainer}>
        <p className={commonStyles.title}>DESCUBRE LOS MEJORES CLUBES</p>
        <p className={clsx(
          commonStyles.text,
          styles.text,
        )}>
          DONDE JUEGAN
          <strong className={styles.strongText}>&nbsp;NUESTRO JUGADORES</strong>
        </p>
      </TextContainer>
      <IllustrationContainer className={styles.illustrationContainer}>
        {
          logos.map(logo => (
            <TeamLogo key={logo.name} {...logo} />
          ))
        }
      </IllustrationContainer>
      <p className={styles.extraText}>Y MUCHOS MÁS INGRESANDO AL MERCADO</p>
    </>
  )
}