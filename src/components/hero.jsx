import heroImg from '../assets/images/Foto 6.jpg';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#2b1f36] text-white py-20 md:py-28">
      {/* Imagen de fondo */}
      <img
        src={heroImg}
        alt="Instalación de paneles solares empresariales MAX EnergIA"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Degradado en morado oscuro y acento naranja corporativo */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#23182c]/95 via-[#4B385C]/80 to-[#FF4D00]/25"
        aria-hidden="true"
      />

      {/* Contenido principal */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="max-w-2xl">
          <span className="inline-block bg-[#FF4D00]/20 border border-[#FF4D00]/50 text-orange-200 text-xs font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full mb-4">
            Autogeneración solar para empresas
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Genera tu propia energía solar y reduce tu factura
          </h1>
          <p className="text-slate-100 text-base sm:text-lg mb-8 leading-relaxed">
            Evaluamos el potencial solar de tu empresa con ingeniería e inteligencia artificial, y te acompañamos desde el diseño hasta la operación.
          </p>
          <a
            href="#formulario"
            className="inline-block w-full sm:w-auto text-center bg-[#FF4D00] hover:bg-[#e04400] text-white font-bold px-8 py-4 rounded-full shadow-lg transition transform hover:-translate-y-0.5"
          >
            Quiero mi evaluación
          </a>
        </div>
      </div>
    </section>
  );
}