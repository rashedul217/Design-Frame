import React from 'react';
import HeroSection from '../components/home/HeroSection';
import OngoingProjectsCom from '../components/home/OngoingProjectsCom';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';
import FloatingContact from '../components/common/FloatingContact';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <OngoingProjectsCom />
      <FeaturedProjects />
      <Testimonials />
      <CTASection />
      <FloatingContact />
    </main>
  );
};

export default Home;