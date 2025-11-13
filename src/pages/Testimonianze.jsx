import Section from '../components/Section'

export default function Testimonianze() {
  const items = [
    { n: 'Chiara M.', t: 'Ho ritrovato fiducia nel mio corpo e nella mia voce.' },
    { n: 'Elena R.', t: 'Ogni incontro è un respiro. Delicatezza e potenza insieme.' },
    { n: 'Marta M.', t: 'Mi ha accompagnata a dare forma al cambiamento con semplicità.' },
    { n: 'Sara M.', t: 'Spazio sicuro, cura autentica, poesia quotidiana.' },
  ]

  return (
    <div className="pt-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-semibold text-rose-900">Testimonianze</h1>
        <p className="mt-3 text-rose-800/90 max-w-3xl">Alcune parole di chi ha camminato con Coreosofia. Grazie a ogni persona per la fiducia.</p>
      </section>

      <Section>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((x) => (
            <div key={x.n} className="p-6 bg-white/70 rounded-2xl border border-rose-100 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-200" />
                <div>
                  <p className="font-medium text-rose-900">{x.n}</p>
                </div>
              </div>
              <p className="mt-3 text-rose-800/80 text-sm">“{x.t}”</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
