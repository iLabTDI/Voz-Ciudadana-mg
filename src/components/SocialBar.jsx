"use client"

import { Facebook, Instagram, Mail } from "lucide-react"

export const SocialBar = () => {
  // SVG personalizado para X (Twitter)
  const XIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 512 462.799"
      className="h-6 w-6"
      fill="currentColor"
    >
      <path
        fillRule="nonzero"
        d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
      />
    </svg>
  )

  // SVG personalizado para TikTok
  const TikTokIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 293768 333327"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      className="h-6 w-6"
      fill="currentColor"
    >
      <path
        d="M204958 0c5369 45832 32829 78170 77253 81022v43471l-287 27V87593c-44424-2850-69965-30183-75333-76015l-47060-1v192819c6791 86790-60835 89368-86703 56462 30342 18977 79608 6642 73766-68039V0h58365zM78515 319644c-26591-5471-50770-21358-64969-44588-34496-56437-3401-148418 96651-157884v54345l-164 27v-40773C17274 145544 7961 245185 33650 286633c9906 15984 26169 27227 44864 33011z"
        fill="currentColor"
      />
      <path
        d="M218434 11587c3505 29920 15609 55386 35948 70259-27522-10602-43651-34934-47791-70262l11843 3zm63489 82463c3786 804 7734 1348 11844 1611v51530c-25770 2537-48321-5946-74600-21749l4034 88251c0 28460 106 41467-15166 67648-34260 58734-95927 63376-137628 35401 54529 22502 137077-4810 136916-103049v-96320c26279 15803 48830 24286 74600 21748V94050zm-171890 37247c5390-1122 11048-1985 16998-2548v54345c-21666 3569-35427 10222-41862 22528-20267 38754 5827 69491 35017 74111-33931 5638-73721-28750-49999-74111 6434-12304 18180-18959 39846-22528v-51797zm64479-119719h1808-1808z"
        fill="currentColor"
      />
      <path
        d="M206590 11578c5369 45832 30910 73164 75333 76015v51528c-25770 2539-48321-5945-74600-21748v96320c206 125717-135035 135283-173673 72939-25688-41449-16376-141089 76383-155862v52323c-21666 3569-33412 10224-39846 22528-39762 76035 98926 121273 89342-1225V11577l47060 1z"
        fill="currentColor"
      />
    </svg>
  )

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden md:block bg-white p-3 rounded-full shadow-xl">
      <div className="flex flex-col space-y-4">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/profile.php?id=100011499285580&ref=ig_profile_ac"
          className="w-12 h-12 rounded-full bg-[#1877F2] hover:bg-[#145DBF] flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook className="h-6 w-6" />
        </a>

        {/* Twitter (X) */}
        <a
          href="https://twitter.com" // Reemplaza con el enlace real si lo tienes
          className="w-12 h-12 rounded-full bg-[#000000] hover:bg-[#1A1A1A] flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          aria-label="Twitter (X)"
          target="_blank"
          rel="noopener noreferrer"
        >
          <XIcon />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/sergioarturoguerreroolvera/"
          className="w-12 h-12 rounded-full bg-[#E4405F] hover:bg-[#C13548] flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="h-6 w-6" />
        </a>

        {/* TikTok */}
        <a
          href="https://www.tiktok.com" // Reemplaza con el enlace real si lo tienes
          className="w-12 h-12 rounded-full bg-[#000000] hover:bg-[#1A1A1A] flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          aria-label="TikTok"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TikTokIcon />
        </a>

        {/* Email */}
        <a
          href="mailto:contacto@tribunalelectoral.gob.mx"
          className="w-12 h-12 rounded-full bg-[#EA4335] hover:bg-[#C63628] flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          aria-label="Email"
        >
          <Mail className="h-6 w-6" />
        </a>
      </div>
    </div>
  )
}

export default SocialBar