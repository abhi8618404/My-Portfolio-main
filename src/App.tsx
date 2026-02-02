import '@lottiefiles/lottie-player';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import Layout from "@/components/Layout";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "@/hooks/useTheme";
import { CursorProvider } from "@/hooks/useCursor";
import CustomCursor from "@/CustomCursor";
import { useIsDesktop } from "@/hooks/useIsDesktop";

const queryClient = new QueryClient();

// Read Vite's BASE_URL so the router basename matches your build base.
// - In dev: import.meta.env.BASE_URL === "/"
// - In production (GitHub Pages repo site): it will be "/My-Portfolio-main/"
const rawBase = import.meta.env.BASE_URL ?? "/";
const basename = rawBase === "/" ? "/" : rawBase.replace(/\/$/, "");

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Index /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ],
  {
    basename,
    // Opt in to v7 behaviors to remove those console warnings
    future: {
      v7_relativeSplatPath: true,
      v7_startTransition: true,
    },
  }
);

const App = () => {
  const isDesktop = useIsDesktop();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <CursorProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {isDesktop && <CustomCursor />}

            {/* Render the data-router-powered router */}
            <RouterProvider router={router} />
          </TooltipProvider>
        </CursorProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;