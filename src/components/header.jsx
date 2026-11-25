import logoMax from '../assets/marca/max energia Logo-03.png';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
     

      {/* Barra principal */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img
            src={logoMax}
            alt="MAX EnergIA - Minimizando el riesgo & Maximizando beneficios"
            className="h-16 sm:h-16 w-auto object-contain"
          />
        </a>

        <a
          href="#formulario"
          className="bg-[#4B385C] hover:bg-[#3a2b47] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition shadow-sm"
        >
          Quiero mi evaluación
        </a>
      </div>
    </header>
  );
}