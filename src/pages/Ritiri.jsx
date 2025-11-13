import { Link } from 'react-router-dom'
import Section from '../components/Section'

export default function Ritiri() {
  const ritiri = [
    { t: 'Rinascere nella Natura', s: 'Weekend trasformativo', img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop' },
    { t: 'Silenzio in Movimento', s: 'Ritiro residenziale 4 giorni', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop' },
    { t: 'Cerimonia del Corpo', s: 'Intensivo di fine anno', img: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop' },
  ]

  return (
    <div className="pt-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-semibold text-rose-900">Ritiri</h1>
        <p className="mt-3 text-rose-800/90 max-w-3xl">Spazi sacri di rigenerazione. Tra natura, silenzio e comunità, lasciamo che il corpo ritrovi pace e forza.</p>
      </section>

      <Section eyebrow="Proposte" title="Ritiri trasformativi">
        <div className="grid md:grid-cols-3 gap-6">
          {ritiri.map((r) => (
            <div key={r.t} className="rounded-3xl overflow-hidden border border-rose-100 bg-white/70">
              <div className="h-56" style={{ backgroundImage: `url(${r.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="p-5">
                <h3 className="font-semibold text-rose-900">{r.t}</h3>
                <p className="text-sm text-rose-800/80">{r.s}</p>
                <Link to="/contatti" className="mt-3 inline-block rounded-full bg-rose-700 text-white px-4 py-2 text-sm">Scopri di più</Link>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
