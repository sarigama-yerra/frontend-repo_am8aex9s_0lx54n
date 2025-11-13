import { Link } from 'react-router-dom'
import Section from '../components/Section'

export default function InPresenza() {
  const eventi = [
    { t: 'Radici in Movimento', luogo: 'Milano', date: '12–13 Ottobre', d: 'Seminario intensivo per radicare e alleggerire.' },
    { t: 'Acqua e Respiro', luogo: 'Bologna', date: '9 Novembre', d: 'Serata esperienziale sul flusso e il lasciar andare.' },
    { t: 'Cerchi di Luna', luogo: 'Torino', date: '21–22 Dicembre', d: 'Percorso per attraversare il ciclo del cambiamento.' },
  ]

  return (
    <div className="pt-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-semibold text-rose-900">In presenza</h1>
        <p className="mt-3 text-rose-800/90 max-w-3xl">Seminari e percorsi in diverse città. Ogni esperienza è un invito a ritrovare il ritmo naturale attraverso il corpo e la relazione.</p>
      </section>

      <Section eyebrow="Calendario" title="Prossimi appuntamenti">
        <div className="grid md:grid-cols-3 gap-6">
          {eventi.map((e) => (
            <div key={e.t} className="rounded-2xl overflow-hidden border border-rose-100 bg-white/70">
              <div className="h-40 bg-[url('https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="p-5">
                <h3 className="font-semibold text-rose-900">{e.t}</h3>
                <p className="text-sm text-rose-800/80">{e.luogo} · {e.date}</p>
                <p className="mt-2 text-sm text-rose-800/80">{e.d}</p>
                <Link to="/contatti" className="mt-3 inline-block rounded-full bg-rose-700 text-white px-4 py-2 text-sm">Prenota</Link>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
