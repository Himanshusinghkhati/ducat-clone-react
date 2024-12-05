import React, { useEffect, useState } from "react";
import HeroSection from "../component/HeroSection";
import CertificateSection from "../component/CertificateSection";
import ExploreSection from "../component/ExploreSection";
import LearnerSection from "../component/LearnerSection";
import EnrollSection from "../component/EnrollSection";
import CourcesSection from "../component/CourcesSection";
import Testimonials from "../component/Testimonials";
import PlacementSection from "../component/PlacementSection";
import SocialSection from "../component/SocialSection";
import ContactModal from "../component/ContactModal";

function HomePage() {
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContactForm(true);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup to avoid memory leaks if the component unmounts
  }, []);

  const handleCloseForm = () => {
    setShowContactForm(false);
  };

  return (
    <>
      <SocialSection />
      <HeroSection />
      <CertificateSection />
      <ExploreSection />
      <LearnerSection />
      <EnrollSection />
      <CourcesSection />
      <Testimonials />
      <PlacementSection />
      {showContactForm && <ContactModal onClose={handleCloseForm} />}
    </>
  );
}

export default HomePage;
