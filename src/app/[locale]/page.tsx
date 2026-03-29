import { setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { StepsSection } from "@/components/sections/StepsSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      
      {/* 0. Identify the Authority */}
      <AboutSection />
      
      {/* 1. Address the problem/objection directly */}
      <StepsSection />
      
      {/* 2. Overcome risk with an irresistible offer */}
      <OfferSection />
      
      {/* 3. Show them WHAT I do (Services) */}
      <ServicesSection />
      
      {/* 4. Kill remaining objections (FAQ) */}
      <FAQSection />
      
      {/* 5. Final Push */}
      <ContactCTA />
    </>
  );
}
