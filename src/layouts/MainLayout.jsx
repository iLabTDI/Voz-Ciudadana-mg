"use client"

import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { CursorFollower } from "./CursorFollower"
import { SocialBar } from "./SocialBar"
import { useEffect, useState } from "react"

export const MainLayout = () => {
  const [activeSection, setActiveSection] = useState("inicio")

  const scrollToSection = (id) => {
    if (window.location.pathname !== "/") {
      window.location.href = `/#${id}`
      return
    }

    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.location.pathname !== "/") return

      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      // Determinar sección activa basada en la posición de scroll
      const sections = [
        { id: "inicio", position: 0 },
        { id: "profile", position: windowHeight * 0.8 },
        { id: "proposals", position: windowHeight * 1.6 },
        { id: "inspiration", position: windowHeight * 2.4 },
        // { id: "gallery", position: windowHeight * 3.2 },
      ]

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].position) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden font-sans">
      {/* Cursor personalizado */}
      <CursorFollower />

      {/* Barra de redes sociales fija */}
      <SocialBar />

      {/* Navbar */}
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Contenido principal */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer scrollToSection={scrollToSection} />
    </div>
  )
}

