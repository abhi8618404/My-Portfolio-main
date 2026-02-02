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

// Read Vite BASE_URL so router basename matches dev ("/") and production ("/My-Portfolio-main/")
const rawBase = (import.meta as any).env?.BASE_URL ?? "/";
const basename = rawBase === "/" ? "/" : String(rawBase).replace(/\/$/, "");

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

            {/* RouterProvider will render Layout and child routes via <Outlet /> */}
            <RouterProvider router={router} />
          </TooltipProvider>
        </CursorProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;