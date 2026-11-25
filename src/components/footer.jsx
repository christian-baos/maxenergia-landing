import logoMax from '../assets/marca/max energia Logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#0B2545] text-slate-300 py-10 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
        <div>
          <img
            src={logoMax}
            alt="MAX EnergIA"
            loading="lazy"
            className="h-15 w-auto object-contain mb-1"
          />
          <p className="mt-1 text-slate-400">
            Soluciones de autogeneración solar e inteligencia artificial.
          </p>
        </div>

        <div className="text-center sm:text-right">
          <p>© {new Date().getFullYear()} MAX EnergIA · Cali, Colombia.</p>
          <p className="mt-1 text-slate-400">
            Tratamiento de datos conforme a la Ley 1581 de 2012.
          </p>
        </div>
      </div>
    </footer>
  );
}