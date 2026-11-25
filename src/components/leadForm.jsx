import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useUtmParams } from '../hooks/useUtmParams';

export default function LeadForm() {
  const utms = useUtmParams();
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    correo: '',
    telefono: '',
    factura_mensual: '',
    acepta_datos: false,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.acepta_datos) {
      setErrorMsg('Debes autorizar el tratamiento de datos personales para continuar.');
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from('leads_campana').insert([
        {
          nombre: formData.nombre.trim(),
          empresa: formData.empresa.trim(),
          correo: formData.correo.trim(),
          telefono: formData.telefono.trim(),
          factura_mensual: Number(formData.factura_mensual),
          acepta_tratamiento_datos: formData.acepta_datos,
          utm_source: utms.utm_source,
          utm_medium: utms.utm_medium,
          utm_campaign: utms.utm_campaign,
        },
      ]);

      if (error) throw error;
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setErrorMsg('Ocurrió un error al enviar tus datos. Por favor intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="formulario" className="py-16 bg-emerald-950/5 border-t border-slate-200">
      <div className="max-w-xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-10">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                ¡Solicitud recibida!
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Gracias. Nuestro equipo te contactará en los próximos días hábiles.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Solicita tu evaluación solar
              </h2>
              <p className="text-sm text-slate-600 mb-6">
                Completa los datos de tu empresa y calcularemos tu potencial de ahorro.
              </p>

              {errorMsg && (
                <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ej. Carlos Mendoza"
                    className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm focus:border-emerald-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    name="empresa"
                    required
                    value={formData.empresa}
                    onChange={handleChange}
                    placeholder="Ej. Industrias del Valle S.A.S."
                    className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm focus:border-emerald-600 focus:outline-none"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Correo corporativo *
                    </label>
                    <input
                      type="email"
                      name="correo"
                      required
                      value={formData.correo}
                      onChange={handleChange}
                      placeholder="nombre@empresa.com"
                      className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm focus:border-emerald-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Teléfono / Celular *
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      required
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="Ej. 300 123 4567"
                      className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm focus:border-emerald-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Valor aproximado de factura mensual de energía (COP) *
                  </label>
                  <input
                    type="number"
                    name="factura_mensual"
                    required
                    min="100000"
                    step="any"
                    value={formData.factura_mensual}
                    onChange={handleChange}
                    placeholder="Ej. 5000000"
                    className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm focus:border-emerald-600 focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="acepta_datos"
                      required
                      checked={formData.acepta_datos}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-600"
                    />
                    <span className="text-xs text-slate-600 leading-relaxed">
                      Autorizo el tratamiento de mis datos personales por parte de MAX EnergIA conforme a la{' '}
                      <strong>Ley 1581 de 2012</strong> y su política de privacidad, para recibir información comercial y técnica sobre proyectos de autogeneración solar. *
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#4B385C] hover:bg-[#3a2b47] disabled:bg-slate-400 text-white font-bold py-3.5 rounded-xl shadow-md transition cursor-pointer"
                >
                  {loading ? 'Enviando solicitud...' : 'Quiero mi evaluación'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}