import { useState } from "react";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { FeaturesSection } from "./components/features-section";
import { HowItWorks } from "./components/how-it-works";
import { UseCases } from "./components/use-cases";
import { SampleMarket } from "./components/sample-market";
import { PricingSection } from "./components/pricing-section";
import { FAQSection } from "./components/faq-section";
import { CTASection } from "./components/cta-section";
import { Footer } from "./components/footer";
import { SignInPage } from "./components/pages/sign-in-page";
import { SignUpPage } from "./components/pages/sign-up-page";
import { CreateMarketPage } from "./components/pages/create-market-page";
import { ExplorePage } from "./components/pages/explore-page";
import { MarketDetailsPage } from "./components/pages/market-details-page";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "sign-in":
        return <SignInPage onNavigate={handleNavigate} />;
      case "sign-up":
        return <SignUpPage onNavigate={handleNavigate} />;
      case "create-market":
        return <CreateMarketPage onNavigate={handleNavigate} />;
      case "explore":
        return <ExplorePage onNavigate={handleNavigate} />;
      case "market-details":
        return <MarketDetailsPage onNavigate={handleNavigate} />;
      case "home":
      default:
        return (
          <>
            <HeroSection onNavigate={handleNavigate} />
            <div id="features">
              <FeaturesSection />
            </div>
            <div id="how-it-works">
              <HowItWorks />
            </div>
            <UseCases />
            <SampleMarket onNavigate={handleNavigate} />
            <div id="pricing">
              <PricingSection onNavigate={handleNavigate} />
            </div>
            <div id="faq">
              <FAQSection />
            </div>
            <CTASection onNavigate={handleNavigate} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
