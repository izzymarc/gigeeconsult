import React from "react";
import { Route, Router, Switch } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./components/theme/theme-provider";
import { I18nProvider } from "./lib/i18n/i18n-provider";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import MainLayout from "./components/layout/MainLayout";

// Service pages
import ConsultancyPage from "./pages/services/consultancy";
import CapacityBuildingPage from "./pages/services/capacity-building";
import ProjectManagementPage from "./pages/services/project-management";
import GeneralSuppliesPage from "./pages/services/general-supplies";

// Industry pages
import HealthcarePage from "./pages/industries/healthcare";
import TechnologyPage from "./pages/industries/technology";
import RetailPage from "./pages/industries/retail";
import ManufacturingPage from "./pages/industries/manufacturing";
import EnergyPage from "./pages/industries/energy";
import FinancialServicesPage from "./pages/industries/FinancialServicesPage";

// New pages
import InsightsPage from "./pages/InsightsPage";
import InsightDetailPage from "./pages/insights/[id]";
import InsightCategoryPage from "./pages/insights/category/[category]";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import CareersPage from "./pages/CareersPage";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="gigee-theme">
        <I18nProvider>
          <Router>
            <MainLayout>
              <Switch>
                <Route path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/services" component={ServicesPage} />
                <Route path="/contact" component={ContactPage} />
                
                {/* Service routes */}
                <Route path="/services/consultancy" component={ConsultancyPage} />
                <Route path="/services/capacity-building" component={CapacityBuildingPage} />
                <Route path="/services/project-management" component={ProjectManagementPage} />
                <Route path="/services/general-supplies" component={GeneralSuppliesPage} />
                
                {/* Industry routes */}
                <Route path="/industries/healthcare" component={HealthcarePage} />
                <Route path="/industries/technology" component={TechnologyPage} />
                <Route path="/industries/retail" component={RetailPage} />
                <Route path="/industries/manufacturing" component={ManufacturingPage} />
                <Route path="/industries/energy" component={EnergyPage} />
                <Route path="/industries/financial-services" component={FinancialServicesPage} />
                
                {/* Insights routes */}
                <Route path="/insights" component={InsightsPage} />
                <Route path="/insights/:id" component={InsightDetailPage} />
                <Route path="/insights/category/:category" component={InsightCategoryPage} />
                
                {/* Other routes */}
                <Route path="/case-studies" component={CaseStudiesPage} />
                <Route path="/careers" component={CareersPage} />
                
                <Route component={NotFoundPage} />
              </Switch>
            </MainLayout>
          </Router>
        </I18nProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
