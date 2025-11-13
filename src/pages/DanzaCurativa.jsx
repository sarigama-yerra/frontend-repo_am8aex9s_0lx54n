import Section from '../components/Section'

export default function DanzaCurativa() {
  return (
    <div className="pt-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-semibold text-rose-900">DanzaCurativa</h1>
        <p className="mt-3 text-rose-800/90 max-w-3xl">Progetti di danzaterapia per scuole, centri educativi e strutture di cura. Programmi su misura per età, bisogni e contesti, con obiettivi chiari e valutazione del processo.</p>
      </section>

      <Section eyebrow="Ambiti" title="Dove interveniamo">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {t:'Educativo', d:'Infanzia, primaria, secondaria. Sviluppo socio-emotivo, creatività e cooperazione.'},
            {t:'Clinico', d:'RSA, centri diurni, comunità. Cura non verbale, stimolazione cognitiva ed emotiva.'},
            {t:'Formativo-Culturale', d:'Biblioteche, centri culturali, enti. Laboratori, performance partecipate, conferenze esperienziali.'},
          ].map((c) => (
            <div key={c.t} className="p-6 bg-white/70 rounded-2xl border border-rose-100 shadow-sm">
              <h3 className="font-semibold text-rose-900">{c.t}</h3>
              <p className="mt-2 text-rose-800/80 text-sm">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Collaborazioni" title="Con chi abbiamo lavorato">
        <ul className="list-disc pl-6 text-rose-800/90 space-y-1">
          <li>Istituto Comprensivo Milano Centro</li>
          <li>Biblioteca Civica Crescenzago</li>
          <li>RSA Cuore Sereno</li>
          <li>Centro Diurno Arcobaleno</li>
        </ul>
      </Section>
    </div>
  )
}
