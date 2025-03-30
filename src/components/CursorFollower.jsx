"use client"

import { useEffect, useState } from "react"

export const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    // Hide cursor when leaving the window
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    // Check if hovering over clickable elements
    const handleHoverCheck = (e) => {
      const target = e.target
      const isClickable =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer") ||
        target.getAttribute("role") === "button"

      setIsHovering(isClickable)
    }

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mousemove", handleHoverCheck)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    document.documentElement.addEventListener("mouseleave", handleMouseLeave)
    document.documentElement.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mousemove", handleHoverCheck)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave)
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [isVisible])

  // Don't render on mobile devices
  if (typeof window !== "undefined" && window.innerWidth <= 768) {
    return null
  }

  return (
    <>
      <div
        className={`fixed pointer-events-none z-[9999] transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div
          className={`absolute w-8 h-8 -ml-4 -mt-4 rounded-full border-2 transition-all duration-200 ease-out ${
            isClicking
              ? "scale-75 border-magistral-sand-500"
              : isHovering
                ? "scale-150 border-blue-400"
                : "scale-100 border-blue-500"
          }`}
          style={{
            transform: `translate(0, 0) scale(${isClicking ? 0.75 : isHovering ? 1.5 : 1})`,
          }}
        ></div>
        <div
          className={`absolute w-2 h-2 -ml-1 -mt-1 rounded-full transition-all duration-150 ease-out ${
            isClicking
              ? "scale-150 bg-magistral-sand-500"
              : isHovering
                ? "scale-75 bg-blue-400"
                : "scale-100 bg-blue-500"
          }`}
          style={{
            transform: `translate(0, 0) scale(${isClicking ? 1.5 : isHovering ? 0.75 : 1})`,
          }}
        ></div>
      </div>
    </>
  )
}

