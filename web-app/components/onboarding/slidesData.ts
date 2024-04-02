import { Slide1, Slide2, Slide3, Slide4 } from ".";
import { StepperCarouselProps } from "../stepper/StepperCarousel";


const onboardingSlides: StepperCarouselProps['data'] = [
  {
    name: 'slide1',
    component: Slide1,
  },
  {
    name: 'slide2',
    component: Slide2,
  },
  {
    name: 'slide3',
    component: Slide3,
  },
  {
    name: 'slide4',
    component: Slide4,
  },
];

export default onboardingSlides;