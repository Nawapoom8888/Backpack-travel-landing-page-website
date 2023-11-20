import React from "react";
import ServiceSection from "../components/ServiceSection";
import AboutSection from "../components/AboutSection";
import DestinationSection from "../components/DestinationSection";
import PackageSection from "../components/PackageSection";
import StepSection from "../components/StepSection";
import BookingForm from "../components/BookingForm";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <div
      className=""
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="50"
      data-aos-offset="0"
    >
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <DestinationSection />
      <PackageSection />
      <StepSection />
      <BookingForm />
    </div>
  );
}
