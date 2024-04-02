import Image from 'next/image';

import styles from '@/styles/onboarding/TeamLogo.module.css';

interface TeamLogoProps {
  image: string;
  name: string;
}

export const TeamLogo = ({ image, name }: TeamLogoProps) => {
  return (
    <div className={styles.container}>
      <Image
        src={image}
        width={56}
        height={56}
        alt={name}
      />
    </div>
  )
}