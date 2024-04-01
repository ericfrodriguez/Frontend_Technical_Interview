import styles from '@/styles/onboarding/CommonSlide.module.css';

interface TextContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const TextContainer = ({ children, ...props }: TextContainerProps) => {
  return (
    <div
      className={styles.textContainer}
      {...props}
    >
      {children}
    </div>
  )
}

interface IllustrationContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const IllustrationContainer = ({ children, ...props }: IllustrationContainerProps) => {
  return (
    <div
      className={styles.illustrationContainer}
      {...props}
    >
      {children}
    </div>
  )
}