const BENEFICIOS_DATA = [
  {
    numero: '01',
    titulo: 'Ahorro en la factura de energía',
    descripcion: 'Reduce hasta un 80% tus costos operativos mensuales generando tu propia electricidad.',
  },
  {
    numero: '02',
    titulo: 'Energía limpia para tus metas de sostenibilidad',
    descripcion: 'Disminuye la huella de carbono de tu operación y cumple estándares ambientales.',
  },
  {
    numero: '03',
    titulo: 'Acompañamiento técnico en todo el proceso',
    descripcion: 'Nos encargamos desde la ingeniería y trámites de conexión hasta la operación y mantenimiento.',
  },
  {
    numero: '04',
    titulo: 'Análisis apoyado en inteligencia artificial',
    descripcion: 'Modelamos el potencial solar y el retorno de inversión exacto de tu empresa con IA.',
  },
];

export default function Benefits() {
  return (
    <section className="py-16 md:py-20 max-w-6xl mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#4B385C] mb-3">
          ¿Por qué dar el salto a la energía solar con MAX EnergIA?
        </h2>
        <p className="text-slate-600">
          Soluciones fotovoltaicas diseñadas a la medida del consumo energético de tu industria o comercio.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {BENEFICIOS_DATA.map((item) => (
          <article
            key={item.numero}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-[#FF4D00]/40 hover:shadow-md transition"
          >
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#FF4D00] flex items-center justify-center font-bold mb-4">
              {item.numero}
            </div>
            <h3 className="font-semibold text-lg text-[#4B385C] mb-2">
              {item.titulo}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {item.descripcion}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}