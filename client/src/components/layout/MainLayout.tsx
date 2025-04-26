import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion";
import ScrollToTop from "../ui/scroll-to-top";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ 
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="flex-grow pt-16"
        >
          <div className="min-h-[calc(100vh-200px)]">
            {children}
          </div>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <ScrollToTop />
    </div>
  );
}