import { useRouter } from "next/router";
import { motion } from "framer-motion";

import Layout from "@/components/layouts/Layout";
import { SuccessSvg } from '../components/onboarding/SuccessSvg';

import styles from '@/styles/Success.module.css';
import { useCountdown } from '../hooks/useCountdown';

export default function SuccessPage() {
  const router = useRouter()

  const onCoundownEnd = () => {
    router.replace('/');
  }

  const countdown = useCountdown(7, onCoundownEnd);


  return (
    <Layout
      title="Win Frontend Challenge"
      description="Front End Technical Interview"
    >
      <SuccessSvg />
      <h1 className={styles.title}>¡FELICITACIONES!</h1>
      <h2 className={styles.text}>Bienvenido a WIN</h2>
      <p className={styles.text}>Ya puedes ser parte del mundo del deporte</p>
      <motion.span animate={{ opacity: [0, 1], transition: { delay: 2 } }} className={styles.countdown}>Volviendo a Inicio en {countdown}</motion.span>
    </Layout>
  );
}