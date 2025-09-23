import {BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from "./components/pages/Layout";
import { ThemeProvider } from "./components/context/theme-provider";
import WeatherDashboard from "./components/pages/WeatherDashboard";
import CityPage from "./components/pages/CityPage";

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider defaultTheme="dark">
        <Layout>
          <Routes>
             <Route path='/' element={<WeatherDashboard/>} />
              <Route path='/city/:cityName' element={<CityPage/>} />
          </Routes>
        </Layout>
    </ThemeProvider>
      
    </BrowserRouter>

    
  );
}

export default App;
