import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CMSProvider } from "./contexts/CMSContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Listings from "./pages/Listings";
import PropertyDetail from "./pages/PropertyDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import RealEstate from "./pages/services/RealEstate";
import Mining from "./pages/services/Mining";
import Hospitality from "./pages/services/Hospitality";
import CMSAdmin from "./pages/admin/CMSAdmin";
import DarEsSalaam from "./pages/listings/DarEsSalaam";
import Zanzibar from "./pages/listings/Zanzibar";
import Arusha from "./pages/listings/Arusha";
import Nairobi from "./pages/listings/Nairobi";
import Kigali from "./pages/listings/Kigali";
import GetStarted from "./pages/GetStarted";
import Brokerage from "./pages/services/real-estate/Brokerage";
import LandAcquisition from "./pages/services/real-estate/LandAcquisition";
import Valuation from "./pages/services/real-estate/Valuation";
import Management from "./pages/services/real-estate/Management";
import Development from "./pages/services/real-estate/Development";
import Leasing from "./pages/services/real-estate/Leasing";
import LandSourcing from "./pages/services/mining/LandSourcing";
import JointVentures from "./pages/services/mining/JointVentures";
import Compliance from "./pages/services/mining/Compliance";
import Feasibility from "./pages/services/mining/Feasibility";
import Offtake from "./pages/services/mining/Offtake";
import HospitalityInvestment from "./pages/services/hospitality/Investment";
import HospitalityLeasing from "./pages/services/hospitality/Leasing";
import HospitalityManagement from "./pages/services/hospitality/Management";
import HospitalityOperations from "./pages/services/hospitality/Operations";
import HospitalitySales from "./pages/services/hospitality/Sales";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CMSProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/real-estate" element={<RealEstate />} />
            <Route path="/services/real-estate/brokerage" element={<Brokerage />} />
            <Route path="/services/real-estate/land-acquisition" element={<LandAcquisition />} />
            <Route path="/services/real-estate/valuation" element={<Valuation />} />
            <Route path="/services/real-estate/management" element={<Management />} />
            <Route path="/services/real-estate/development" element={<Development />} />
            <Route path="/services/real-estate/leasing" element={<Leasing />} />
            <Route path="/services/mining" element={<Mining />} />
            <Route path="/services/mining/land-sourcing" element={<LandSourcing />} />
            <Route path="/services/mining/joint-ventures" element={<JointVentures />} />
            <Route path="/services/mining/compliance" element={<Compliance />} />
            <Route path="/services/mining/feasibility" element={<Feasibility />} />
            <Route path="/services/mining/offtake" element={<Offtake />} />
            <Route path="/services/hospitality" element={<Hospitality />} />
            <Route path="/services/hospitality/investment" element={<HospitalityInvestment />} />
            <Route path="/services/hospitality/leasing" element={<HospitalityLeasing />} />
            <Route path="/services/hospitality/management" element={<HospitalityManagement />} />
            <Route path="/services/hospitality/operations" element={<HospitalityOperations />} />
            <Route path="/services/hospitality/sales" element={<HospitalitySales />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/listings/dar-es-salaam" element={<DarEsSalaam />} />
            <Route path="/listings/zanzibar" element={<Zanzibar />} />
            <Route path="/listings/arusha" element={<Arusha />} />
            <Route path="/listings/nairobi" element={<Nairobi />} />
            <Route path="/listings/kigali" element={<Kigali />} />
            <Route path="/listings/:id" element={<PropertyDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/admin/cms" element={<CMSAdmin />} />
            <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </CMSProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
