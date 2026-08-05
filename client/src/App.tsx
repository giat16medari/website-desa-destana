import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SpdPage from "./pages/SPDPage";
import RiskAssessmentPage from "./pages/RiskAssessmentPage";
import RevakPage from "./pages/RevakPage";
import FprbPage from "./pages/FprbPage";
import RelawanPage from "./pages/RelawanPage";
import RenkonPage from "./pages/RenkonPage";
import RpbPage from "./pages/RpbPage";
import PkdPage from "./pages/PkdPage";
import DocumentationPage from "./pages/DocumentationPage";
import PartnersPage from "./pages/PartnersPage";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path={"/"} component={Home} />
          <Route path={"/spd"} component={SpdPage} />
          <Route path={"/krb"} component={RiskAssessmentPage} />
          <Route path={"/revak"} component={RevakPage} />
          <Route path={"/fprb"} component={FprbPage} />
          <Route path={"/relawan"} component={RelawanPage} />
          <Route path={"/renkon"} component={RenkonPage} />
          <Route path={"/rpb"} component={RpbPage} />
          <Route path={"/pkd"} component={PkdPage} />
          <Route path={"/documentation"} component={DocumentationPage} />
          <Route path={"/partners"} component={PartnersPage} />
          <Route path={"/404"} component={NotFound} />
          {/* Final fallback route */}
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;