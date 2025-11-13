import Section from '../components/Section'

export default function Coreosofia() {
  return (
    <div className="pt-16">
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl sm:text-5xl font-semibold text-rose-900">Cos’è Coreosofia</h1>
          <p className="mt-3 text-rose-800/90 max-w-3xl">Un metodo di esplorazione e cura attraverso il movimento. Nasce dall’incontro tra danzaterapia, pratiche somatiche e lavoro simbolico. Ogni gesto diventa parola, ogni respiro un ponte verso la tua verità.</p>
        </div>
      </section>

      <Section eyebrow="Per chi" title="A chi si rivolge">
        <div className="grid md:grid-cols-3 gap-6">
          {["Ricerca di sé", "Trasformazione", "Benessere"].map((x) => (
            <div key={x} className="p-6 bg-white/70 rounded-2xl border border-rose-100 shadow-sm">
              <h3 className="font-semibold text-rose-900">{x}</h3>
              <p className="mt-2 text-rose-800/80 text-sm">Per chi desidera ascoltare il corpo, integrare emozioni, coltivare creatività e presenza.</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Cosa offre" title="Formati e strumenti">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {t:'Sessioni individuali', d:'Percorsi delicati e profondi, in ascolto del tuo ritmo.'},
            {t:'Gruppi tematici', d:'Spazi di condivisione e ricerca attraverso il movimento.'},
            {t:'Ritiri', d:'Immersioni esperienziali tra natura, silenzio e danza.'},
          ].map((c) => (
            <div key={c.t} className="p-6 bg-white/70 rounded-2xl border border-rose-100 shadow-sm">
              <h3 className="font-semibold text-rose-900">{c.t}</h3>
              <p className="mt-2 text-rose-800/80 text-sm">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
