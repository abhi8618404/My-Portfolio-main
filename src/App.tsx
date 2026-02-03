import '@lottiefiles/lottie-player';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import Layout from "@/components/Layout";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "@/hooks/useTheme";
import { CursorProvider } from "@/hooks/useCursor";
import CustomCursor from "@/CustomCursor";
import { useIsDesktop } from "@/hooks/useIsDesktop";

const queryClient = new QueryClient();

// Read Vite BASE_URL so router basename matches dev ("/") and production ("/My-Portfolio-main/")
const baseUrl = import.meta.env.BASE_URL ?? "/";
const normalizedBase =
  baseUrl !== "/" && baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;

const router = createHashRouter(
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
    basename: normalizedBase,
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
