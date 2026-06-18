import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

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
import Testimonials from "./pages/Testimonials";
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
      <Route path="/" component={Home} />
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
      <Route path="/testimonials" component={Testimonials} />
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
    window.scrollTo(0, 0);
  }, [pathname]);

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
