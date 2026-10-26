import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import GroupPortal from "./pages/GroupPortal";
import SoundAndLightings from "./pages/SoundAndLightings";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import PropertyRegistration from "./pages/services/PropertyRegistration";
import MarriageRegistration from "./pages/services/MarriageRegistration";
import TrustRegistration from "./pages/services/TrustRegistration";
import SocietyRegistration from "./pages/services/SocietyRegistration";
import EncumbranceCertificate from "./pages/services/EncumbranceCertificate";
import CertifiedCopy from "./pages/services/CertifiedCopy";
import LegalDocumentation from "./pages/services/LegalDocumentation";
import Projects from "./pages/Projects";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import BookConsultation from "./pages/BookConsultation";
import WhyChooseUs from "./pages/WhyChooseUs";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import ThankYou from "./pages/ThankYou";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      {/* ── MASTER GROUP LANDING PAGE (Root Domain Portal) ── */}
      <Route path="/" component={GroupPortal} />

      {/* ── ENTERPRISE 1: A.B. DHANAM ONLINE SERVICES (Legal Division) ── */}
      <Route path="/legal" component={Home} />
      <Route path="/online-services" component={Home} />

      {/* ── ENTERPRISE 2: A.B. DHANAM RADIO & LIGHTINGS (Single-Page Site) ── */}
      <Route path="/radio-and-lightings" component={SoundAndLightings} />
      <Route path="/sound-and-lightings" component={SoundAndLightings} />

      {/* ── LEGAL DIVISION SUBPAGES & ESSENTIAL ROUTES ── */}
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      
      <Route path="/services/property-registration" component={PropertyRegistration} />
      <Route path="/services/marriage-registration" component={MarriageRegistration} />
      <Route path="/services/trust-registration" component={TrustRegistration} />
      <Route path="/services/society-registration" component={SocietyRegistration} />
      <Route path="/services/encumbrance-certificate" component={EncumbranceCertificate} />
      <Route path="/services/certified-copy" component={CertifiedCopy} />
      <Route path="/services/legal-documentation" component={LegalDocumentation} />

      <Route path="/projects" component={Projects} />
      <Route path="/faq" component={FAQ} />
      <Route path="/contact" component={Contact} />
      <Route path="/book-consultation" component={BookConsultation} />
      
      <Route path="/why-choose-us" component={WhyChooseUs} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms" component={Terms} />
      <Route path="/thank-you" component={ThankYou} />
      <Route component={NotFound} />
    </Switch>
  );
}

function ScrollToTop() {
  const [pathname] = useLocation();

  useEffect(() => {
    // If navigating to a URL with a hash, smoothly scroll to that anchor element
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }, 120);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  // Global smooth scrolling delegation for in-page anchor links (#services, #gallery, etc.)
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href) return;

      if (href.startsWith("#") && href.length > 1) {
        const id = href.slice(1);
        const element = document.getElementById(id);
        if (element) {
          e.preventDefault();
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });

          window.history.pushState(null, "", href);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return null;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL?.replace(/\/$/, "") || ""}>
          <ScrollToTop />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
