import { Facebook, Instagram,  Mail } from "lucide-react"

export const SocialBar = () => {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden md:block bg-white p-2 rounded-full shadow-xl">
      <div className="flex flex-col space-y-3">
        <a
          href="https://www.facebook.com/profile.php?id=100011499285580&ref=ig_profile_ac"
          className="w-10 h-10 rounded-full bg-[#1877F2] hover:bg-[#0E5FC0] flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-110"
          aria-label="Facebook"
        >
          <Facebook className="h-5 w-5" />
        </a>
        <a
          href="#"
          className="w-10 h-10 rounded-full bg-[#ffffff] hover:bg-[#ffffff] flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-110"
          aria-label="Twitter"
        >
          <img src="../../assets/twitter.avif" alt="" className="h-10 w-10"/>
          {/* <Twitter className="h-5 w-5" /> */}
        </a>
        <a
          href="https://www.instagram.com/sergioarturoguerreroolvera/"
          className="w-10 h-10 rounded-full bg-[#E4405F] hover:bg-[#D32645] flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-110"
          aria-label="Instagram"
        >
          <Instagram className="h-5 w-5" />
        </a>
        <a
          href="#"
          className="w-10 h-10 rounded-full bg-[#000000] hover:bg-[#000000] flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-110"
          aria-label="Titktok"
        >
          <img src="../../assets/tiktok.png" alt="" className="h-15 w-15"/>
          {/* <Linkedin className="h-5 w-5" /> */}
        </a>
        <a
          href="mailto:contacto@tribunalelectoral.gob.mx"
          className="w-10 h-10 rounded-full bg-[#EA4335] hover:bg-[#D33426] flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-110"
          aria-label="Email"
        >
          <Mail className="h-5 w-5" />
        </a>
      </div>
    </div>
  )
}

