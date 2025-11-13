import { Link } from 'react-router-dom'
import Section from '../components/Section'

function Card({ title, subtitle, children }) {
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-rose-50 to-sky-50 border border-rose-100 shadow-sm">
      <h3 className="text-xl font-semibold text-rose-900">{title}</h3>
      {subtitle && <p className="text-sm text-rose-800/80">{subtitle}</p>}
      <div className="mt-3 text-rose-800/90 text-sm">{children}</div>
    </div>
  )
}

export default function Online() {
  return (
    <div className="pt-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-semibold text-rose-900">Percorsi Online</h1>
        <p className="mt-3 text-rose-800/90 max-w-3xl">Spazi di ascolto e trasformazione da casa, con tempi morbidi e continuità. Ogni percorso include materiali, incontri su Zoom e pratiche tra una sessione e l’altra.</p>
      </section>

      <Section eyebrow="Panoramica" title="Due proposte principali">
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Stella Polare" subtitle="Orientamento interiore">
            <p>Per chi cerca direzione e chiarezza nei momenti di transizione. Include:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>4 incontri individuali (60’)</li>
              <li>Audio-pratiche guidate</li>
              <li>Diario di bordo</li>
            </ul>
            <Link to="#" className="mt-4 inline-block rounded-full bg-rose-700 text-white px-5 py-2 text-sm">Scopri di più</Link>
          </Card>
          <Card title="Giardino dell’Anima" subtitle="Ciclo creativo">
            <p>Per coltivare vitalità, gentilezza e presenza. Include:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>6 incontri di gruppo (90’)</li>
              <li>Toolkit creativo</li>
              <li>Spazio di condivisione</li>
            </ul>
            <Link to="#" className="mt-4 inline-block rounded-full bg-rose-700 text-white px-5 py-2 text-sm">Scopri di più</Link>
          </Card>
        </div>
      </Section>
    </div>
  )
}
