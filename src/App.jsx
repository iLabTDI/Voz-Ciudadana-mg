import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ElectoralLandingPage from "./pages/ElectoralLandingPage"
import { ForoPage } from "./pages/ForoPage"
import { BiografiaPage } from "./pages/BiografiaPage"
import { GaleriaPage } from "./pages/GaleriaPage"
import { MainLayout } from "./layouts/MainLayout"

function App() {
  return (

    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<ElectoralLandingPage />} />
        <Route path="foro" element={<ForoPage />} />
        <Route path="biografia" element={<BiografiaPage />} />
        <Route path="galeria" element={<GaleriaPage />} />
      </Route>
    </Routes>

  )
}

export default App

