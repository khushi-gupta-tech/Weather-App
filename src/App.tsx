import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/pages/Layout";
import { ThemeProvider } from "./components/context/theme-provider";
import WeatherDashboard from "./components/pages/WeatherDashboard";
import {CityPage} from "./components/pages/CityPage";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
import { Toaster } from "sonner";

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:5*60*1000, // 5 minutes
      gcTime:10*60*1000,  // 10 minutes
      retry:false,
      refetchOnWindowFocus:false
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark">
          <Layout>
            <Routes>
              <Route path="/" element={<WeatherDashboard />} />
              <Route path="/city/:cityName" element={<CityPage />} />
            </Routes>
          </Layout>
          <Toaster richColors/>
        </ThemeProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
