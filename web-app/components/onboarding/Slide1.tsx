import commonStyles from "@/styles/onboarding/CommonSlide.module.css";
import Image from "next/image";
import { IllustrationContainer, TextContainer } from "../stepper/SectionContainers";

export const Slide1 = () => {
  return (
    <>
      <TextContainer>
        <p className={commonStyles.title}>BIENVENIDO A WIN</p>
        <p className={commonStyles.subtitle}>EL ÚNICO MARKETPLACE DE FÚTBOL</p>
        <p className={commonStyles.text}>INVIERTE EN EL MERCADO DE PASES Y DISFRUTA DE EXPERIENCIAS ÚNICAS</p>
      </TextContainer>
      <IllustrationContainer>
        <Image
          className={commonStyles.illustration}
          width={304}
          height={510}
          src="/images/win-mobile-perspective.png"
          alt="Win Mobile Phone Mockup"
        />
      </IllustrationContainer>
    </>
  )
}