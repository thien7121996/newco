"use client";
import { ContactUsSection, ContactUsWrapper } from "./styles";
import { ContactInfo } from "@/components/ui/ContactInfo";
import { FormContact } from "@/components/ui/FormContact/FormContact";
export const ContactUs = () => {
  return (
    <ContactUsWrapper>
      <ContactUsSection>
        <FormContact />
        <ContactInfo />
      </ContactUsSection>
    </ContactUsWrapper>
  );
};
ContactUs.displayName = "ContactUs";
