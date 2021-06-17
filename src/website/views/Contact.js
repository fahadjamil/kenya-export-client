import React from "react";
import FooterSection from "../components/FooterSection";

import ContactCard from "../components/Contact/ContactCard";
import ContactForm from "../components/Contact/ContactForm";

const Contact = () => {
  return (
    <React.Fragment>
      <ContactCard />
      <ContactForm />
      <FooterSection />
    </React.Fragment>
  );
};

export default Contact;
