import styles from '@/styles/onboarding/CommonSlide.module.css';
import clsx from 'clsx';

interface TextContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const TextContainer = ({ children, className, ...props }: TextContainerProps) => {
  return (
    <div
      className={clsx(styles.textContainer, className)}
      {...props}
    >
      {children}
    </div>
  )
}

interface IllustrationContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const IllustrationContainer = ({ children, className, ...props }: IllustrationContainerProps) => {
  return (
    <div
      className={clsx(styles.illustrationContainer, className)}
      {...props}
    >
      {children}
    </div>
  )
}