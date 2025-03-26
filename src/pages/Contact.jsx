import React from 'react'
import { MessageSquare, Send } from 'lucide-react'


export const Contact = ({ isVisible }) => {
    return (
        <section id="contacto" className={`py-16 px-4 bg-[#F9F9F7] relative z-10 transition-all duration-1000 ${isVisible.contact ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"}`}>
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-12">
                    <div className="inline-block rounded-lg bg-[#006847] px-3 py-1 text-sm text-white mb-2 shadow-md">Contáctanos</div>
                    <h2 className="text-3xl font-bold text-[#006847] mb-4">Contacto</h2>
                    <div className="h-1 w-32 bg-[#E8DDB5] mx-auto mb-4"></div>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        Estamos aquí para atender tus consultas sobre temas electorales.
                    </p>
                </div>
                <div className="bg-white rounded-xl shadow-xl overflow-hidden relative border border-[#006847]/10 group hover:shadow-2xl transition-all duration-500">
                    <div className="absolute inset-0 bg-pattern opacity-5 pointer-events-none"></div>
                    <div className="md:flex">
                        <div className="md:w-1/2 p-8 relative z-10">
                            <h3 className="text-xl font-semibold text-[#006847] mb-6 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#006847]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Información de Contacto
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-10 h-10 rounded-full bg-[#006847]/10 flex items-center justify-center mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#006847]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-medium text-[#006847]">Dirección:</p>
                                        <p className="text-gray-600">Av. López Mateos Norte 1189, Guadalajara, Jalisco</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-10 h-10 rounded-full bg-[#006847]/10 flex items-center justify-center mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#006847]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-medium text-[#006847]">Teléfono:</p>
                                        <p className="text-gray-600">(33) 3648-1670</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-10 h-10 rounded-full bg-[#006847]/10 flex items-center justify-center mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#006847]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-medium text-[#006847]">Correo Electrónico:</p>
                                        <p className="text-gray-600">sala-guadalajara@te.gob.mx</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-10 h-10 rounded-full bg-[#006847]/10 flex items-center justify-center mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#006847]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-medium text-[#006847]">Horario de Atención:</p>
                                        <p className="text-gray-600">Lunes a Viernes de 9:00 a 15:00 y de 16:00 a 19:00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <h4 className="font-medium text-[#006847] mb-3">Síguenos en redes sociales:</h4>
                                <div className="flex space-x-4">
                                    <a href="#" className="bg-[#006847] text-white hover:bg-[#006847]/90 p-2 rounded-full transition-all shadow-md hover:shadow-lg transform hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="bg-[#006847] text-white hover:bg-[#006847]/90 p-2 rounded-full transition-all shadow-md hover:shadow-lg transform hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2" />
                                        </svg>
                                    </a>
                                    <a href="#" className="bg-[#006847] text-white hover:bg-[#006847]/90 p-2 rounded-full transition-all shadow-md hover:shadow-lg transform hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 p-8 bg-[#006847] text-white relative z-10">
                            <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
                            <h3 className="text-xl font-semibold mb-6 flex items-center relative z-10">
                                <MessageSquare className="mr-2 h-5 w-5" />
                                Envíenos un Mensaje
                            </h3>
                            <form className="space-y-4 relative z-10">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-1">Nombre Completo</label>
                                    <input type="text" id="name" className="w-full px-3 py-2 text-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#E8DDB5] bg-white/90" placeholder="Su nombre" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-1">Correo Electrónico</label>
                                    <input type="email" id="email" className="w-full px-3 py-2 text-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#E8DDB5] bg-white/90" placeholder="ejemplo@correo.com" />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-1">Asunto</label>
                                    <input type="text" id="subject" className="w-full px-3 py-2 text-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#E8DDB5] bg-white/90" placeholder="Asunto de su mensaje" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-1">Mensaje</label>
                                    <textarea id="message" rows="4" className="w-full px-3 py-2 text-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#E8DDB5] bg-white/90" placeholder="Escriba su mensaje aquí..."></textarea>
                                </div>
                                <button type="submit" className="w-full bg-[#E8DDB5] text-[#006847] hover:bg-[#E8DDB5]/90 font-medium py-2 px-4 rounded-md transition-all duration-300 flex items-center justify-center">
                                    <Send className="mr-2 h-5 w-5" /> Enviar Mensaje
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
