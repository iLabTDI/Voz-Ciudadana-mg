import React from "react";
import { 
  Eye, 
  Award, 
  MessageSquare, 
  Users, 
  Shield, 
  BookOpen 
} from "lucide-react";

export const Propuestas = ({ isVisible }) => {
  return (
    <section
      id="propuestas"
      className={`py-16 px-4 bg-[#F9F9F7] relative z-10 transition-all duration-1000 ${
        isVisible.info ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
      }`}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-block rounded-lg bg-[#E8DDB5] px-3 py-1 text-sm text-[#006847] font-medium mb-2 shadow-md">
            Visión y Propuestas
          </div>
          <h2 className="text-3xl font-bold text-[#006847] mb-4">Propuestas para el Futuro Electoral</h2>
          <div className="h-1 w-48 bg-[#E8DDB5] mx-auto mb-4"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Conoce las propuestas del Magistrado Sergio para modernizar la justicia electoral y fortalecer la democracia.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Mi Visión */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-[#006847]/10 group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#006847] to-[#E8DDB5] rounded-full flex items-center justify-center mb-6">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#006847] mb-4">Mi Visión</h3>
            <div className="h-1 w-24 bg-[#E8DDB5] mb-6"></div>
            <p className="text-gray-700 mb-4">
              Consolidar un sistema de justicia electoral moderno, eficiente y cercano a la ciudadanía.
            </p>
            <p className="text-gray-700 mb-4">
              Promover una democracia inclusiva, participativa y transparente donde cada voto cuente.
            </p>
            <p className="text-gray-700">
              Trabajaré para que la justicia electoral sea accesible y se utilicen tecnologías innovadoras para acercar las instituciones a los ciudadanos.
            </p>
          </div>
          {/* Mis Valores */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-[#006847]/10 group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#006847] to-[#E8DDB5] rounded-full flex items-center justify-center mb-6">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#006847] mb-4">Mis Valores</h3>
            <div className="h-1 w-24 bg-[#E8DDB5] mb-6"></div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-[#E8DDB5] flex items-center justify-center text-[#006847] mr-3">
                  <span>✓</span>
                </div>
                <div>
                  <h4 className="font-medium text-[#006847] mb-1">Integridad</h4>
                  <p className="text-sm text-gray-600">Actuar con honestidad, transparencia y ética.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-[#E8DDB5] flex items-center justify-center text-[#006847] mr-3">
                  <span>✓</span>
                </div>
                <div>
                  <h4 className="font-medium text-[#006847] mb-1">Imparcialidad</h4>
                  <p className="text-sm text-gray-600">Decisiones basadas únicamente en la ley y los hechos.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-[#E8DDB5] flex items-center justify-center text-[#006847] mr-3">
                  <span>✓</span>
                </div>
                <div>
                  <h4 className="font-medium text-[#006847] mb-1">Compromiso</h4>
                  <p className="text-sm text-gray-600">Dedicación total a la protección de los derechos electorales.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-[#E8DDB5] flex items-center justify-center text-[#006847] mr-3">
                  <span>✓</span>
                </div>
                <div>
                  <h4 className="font-medium text-[#006847] mb-1">Innovación</h4>
                  <p className="text-sm text-gray-600">Búsqueda constante de nuevas formas de mejorar la justicia electoral.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Propuestas Principales */}
        <div className="bg-white rounded-xl shadow-xl p-8 overflow-hidden relative border border-[#006847]/10 group hover:shadow-2xl transition-all duration-500 mb-12">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#006847]/10 to-[#E8DDB5]/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
          <h3 className="text-2xl font-bold text-[#006847] mb-6 relative inline-block">
            Propuestas Principales
          </h3>
          <div className="h-1 w-48 bg-[#E8DDB5] mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Justicia Electoral Digital */}
            <div className="bg-[#F9F9F7] p-6 rounded-xl border border-[#006847]/10 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-[#006847] flex items-center justify-center text-white mb-4">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-semibold text-[#006847] mb-3">
                Justicia Electoral Digital
              </h4>
              <p className="text-gray-600 mb-4">
                Implementación de plataformas digitales para agilizar los procesos de impugnación electoral.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#E8DDB5] flex items-center justify-center text-[#006847] mr-2">
                    <span>✓</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Juicios en línea accesibles desde cualquier dispositivo
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#E8DDB5] flex items-center justify-center text-[#006847] mr-2">
                    <span>✓</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Notificaciones electrónicas en tiempo real
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#E8DDB5] flex items-center justify-center text-[#006847] mr-2">
                    <span>✓</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Expedientes digitales con búsqueda avanzada
                  </p>
                </li>
              </ul>
            </div>
            {/* Participación Ciudadana */}
            <div className="bg-[#F9F9F7] p-6 rounded-xl border border-[#006847]/10 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-[#006847] flex items-center justify-center text-white mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-semibold text-[#006847] mb-3">
                Participación Ciudadana
              </h4>
              <p className="text-gray-600 mb-4">
                Fortalecimiento de mecanismos de participación ciudadana en los procesos electorales.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#E8DDB5] flex items-center justify-center text-[#006847] mr-2">
                    <span>✓</span>
                  </div>
                  <p className="text-sm text-gray-600">Consultas ciudadanas digitales</p>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#E8DDB5] flex items-center justify-center text-[#006847] mr-2">
                    <span>✓</span>
                  </div>
                  <p className="text-sm text-gray-600">Observatorios electorales ciudadanos</p>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#E8DDB5] flex items-center justify-center text-[#006847] mr-2">
                    <span>✓</span>
                  </div>
                  <p className="text-sm text-gray-600">Foros de diálogo entre ciudadanos y autoridades</p>
                </li>
              </ul>
            </div>
            {/* Protección de Derechos */}
            <div className="bg-[#F9F9F7] p-6 rounded-xl border border-[#006847]/10 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-[#006847] flex items-center justify-center text-white mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-semibold text-[#006847] mb-3">
                Protección de Derechos
              </h4>
              <p className="text-gray-600 mb-4">
                Fortalecimiento de mecanismos para proteger los derechos político-electorales, especialmente para grupos vulnerables.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#E8DDB5] flex items-center justify-center text-[#006847] mr-2">
                    <span>✓</span>
                  </div>
                  <p className="text-sm text-gray-600">Protocolos para grupos indígenas</p>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#E8DDB5] flex items-center justify-center text-[#006847] mr-2">
                    <span>✓</span>
                  </div>
                  <p className="text-sm text-gray-600">Medidas contra la violencia política de género</p>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#E8DDB5] flex items-center justify-center text-[#006847] mr-2">
                    <span>✓</span>
                  </div>
                  <p className="text-sm text-gray-600">Accesibilidad electoral para personas con discapacidad</p>
                </li>
              </ul>
            </div>
            {/* Educación Cívica */}
            <div className="bg-[#F9F9F7] p-6 rounded-xl border border-[#006847]/10 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-[#006847] flex items-center justify-center text-white mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-semibold text-[#006847] mb-3">
                Educación Cívica
              </h4>
              <p className="text-gray-600 mb-4">
                Programas de educación cívica y electoral para fomentar una ciudadanía informada y participativa.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#E8DDB5] flex items-center justify-center text-[#006847] mr-2">
                    <span>✓</span>
                  </div>
                  <p className="text-sm text-gray-600">Programas educativos en escuelas y universidades</p>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#E8DDB5] flex items-center justify-center text-[#006847] mr-2">
                    <span>✓</span>
                  </div>
                  <p className="text-sm text-gray-600">Plataformas digitales de aprendizaje electoral</p>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#E8DDB5] flex items-center justify-center text-[#006847] mr-2">
                    <span>✓</span>
                  </div>
                  <p className="text-sm text-gray-600">Campañas de concientización sobre la importancia del voto</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
