  import "@lottiefiles/lottie-player";
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
    //   future: {
    //     v7_relativeSplatPath: true,
    //     // v7_startTransition: true,
    //   },
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

              <RouterProvider router={router} />
            </TooltipProvider>
          </CursorProvider>
        </ThemeProvider>
      </QueryClientProvider>
    );
  };

  export default App;
