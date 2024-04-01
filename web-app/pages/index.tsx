import Layout from '@/components/layouts/Layout';
import onboardingSlides from '@/components/onboarding/slidesData';
import { StepperCarousel } from '@/components/stepper/StepperCarousel';

import styles from "@/styles/Home.module.css";

export default function HomePage() {
  return (
    <>
      <Layout
        title="Inicio - Win Frontend Challenge"
        description="Front End Technical Interview"
      >
        <section className={styles.stepperContainer}>
          <StepperCarousel data={onboardingSlides}/>
        </section>
      </Layout>
    </>
  );
}
