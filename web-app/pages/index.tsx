import Layout from '@/components/layouts/Layout';
import { StepperCarousel } from '@/components/ui/StepperCarousel';
import styles from "@/styles/Home.module.css";

export default function HomePage() {
  return (
    <>
      <Layout
        title="Inicio - Win Frontend Challenge"
        description="Front End Technical Interview"
      >
        <section className={styles.stepperContainer}>
          <StepperCarousel />
        </section>
      </Layout>
    </>
  );
}
