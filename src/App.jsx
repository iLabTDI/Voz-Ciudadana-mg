import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ElectoralLandingPage from "./pages/ElectoralLandingPage"
import { ForoPage } from "./pages/ForoPage"
import { BiografiaPage } from "./pages/BiografiaPage"
import { GaleriaPage } from "./pages/GaleriaPage"
import { MainLayout } from "./layouts/MainLayout"
import Vota13Page from "./pages/vota13"
import InspiracionPage from "./pages/inspiracion-page"

function App() {
  return (

    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<ElectoralLandingPage />} />
        <Route path="foro" element={<ForoPage />} />
        <Route path="biografia" element={<BiografiaPage />} />
        <Route path="galeria" element={<GaleriaPage />} />
        <Route path="vota13" element={<Vota13Page />} />
        <Route path="inspiracion" element={<InspiracionPage />} />

      </Route>
    </Routes>

  )
}

export default App

