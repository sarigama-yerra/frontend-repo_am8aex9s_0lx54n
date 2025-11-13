import { Link } from 'react-router-dom'
import Section from '../components/Section'

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-rose-200/40 rounded-full blur-3xl" />
          <div className="absolute top-40 -left-24 w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-rose-500 tracking-widest uppercase text-sm">Danza creativa e crescita personale</p>
              <h1 className="mt-3 text-4xl sm:text-6xl font-semibold leading-tight text-rose-900">
                Coreosofia
                <span className="block text-rose-700">di Maresa Pronti</span>
              </h1>
              <p className="mt-5 text-rose-800/90 max-w-xl">
                Un metodo morbido e profondo che unisce danza, ascolto del corpo e presenza consapevole. Per riscoprire la tua voce interiore e tornare a fiorire.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/contatti" className="rounded-full bg-rose-700 text-white px-6 py-3 shadow hover:bg-rose-800">Prenota il colloquio conoscitivo</Link>
                <Link to="/coreosofia" className="rounded-full bg-rose-100 text-rose-800 px-6 py-3 hover:bg-rose-200">Scopri di più</Link>
              </div>
            </div>
            <div>
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-rose-100 via-pink-50 to-sky-50 shadow-inner border border-rose-100 overflow-hidden flex items-center justify-center">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-90" />
              </div>
              <p className="sr-only">Foto evocativa di danza: Maresa in movimento</p>
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="Chi è" title="Maresa Pronti" subtitle="Arteterapeuta, danzatrice e facilitatrice. Unisce creatività e cura per accompagnarti con delicatezza verso ciò che sei.">
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="p-6 bg-white/70 rounded-2xl border border-rose-100 shadow-sm">
              <h3 className="font-semibold text-rose-900">Valori cardine</h3>
              <p className="mt-2 text-rose-800/80 text-sm">Ascolto, autenticità, bellezza. Ogni incontro è uno spazio sicuro per muovere emozioni e visioni.</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Metodo" title="Cos’è Coreosofia" subtitle="Una via di conoscenza attraverso il movimento, per integrare corpo, cuore e coscienza." >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white/70 rounded-2xl border border-rose-100 shadow-sm">
            <h3 className="font-semibold text-rose-900">A chi si rivolge</h3>
            <p className="mt-2 text-rose-800/80 text-sm">A chi desidera sciogliere tensioni, nutrire creatività, attraversare cambiamenti e ritrovare centratura.</p>
          </div>
          <div className="p-6 bg-white/70 rounded-2xl border border-rose-100 shadow-sm">
            <h3 className="font-semibold text-rose-900">Cosa offre</h3>
            <p className="mt-2 text-rose-800/80 text-sm">Percorsi individuali e di gruppo, online e in presenza, seminari tematici e ritiri residenziali.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Percorsi" title="Online" subtitle="Cammini guidati da casa: tempi morbidi, ascolto profondo e continuità.">
        <div className="grid md:grid-cols-2 gap-6">
          {[{t:'Stella Polare', d:'Un percorso di orientamento interiore per ritrovare direzione e fiducia.'}, {t:'Giardino dell’Anima', d:'Un ciclo di incontri creativi per coltivare la tua fioritura personale.'}].map((c) => (
            <div key={c.t} className="p-6 rounded-2xl bg-gradient-to-br from-rose-50 to-sky-50 border border-rose-100 shadow-sm">
              <h3 className="text-xl font-semibold text-rose-900">{c.t}</h3>
              <p className="mt-2 text-rose-800/80 text-sm">{c.d}</p>
              <Link to="/online" className="mt-4 inline-block rounded-full bg-rose-700 text-white px-5 py-2 text-sm hover:bg-rose-800">Scopri di più</Link>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Eventi" title="In presenza" subtitle="Seminari e cicli esperienziali a Milano e in altre città.">
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-rose-100 bg-white/70">
              <div className="h-40 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="p-5">
                <h3 className="font-semibold text-rose-900">Seminario {i}</h3>
                <p className="text-sm text-rose-800/80">Milano · 12–13 Ottobre</p>
                <p className="mt-2 text-sm text-rose-800/80">Due giorni per radicare, alleggerire e rinascere nel movimento.</p>
                <Link to="/in-presenza" className="mt-3 inline-block rounded-full bg-rose-700 text-white px-4 py-2 text-sm">Prenota</Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Ritiri" title="Weekend e Residenziali">
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-rose-100 bg-white/70">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="p-5">
                <h3 className="font-semibold text-rose-900">Ritiro {i}</h3>
                <p className="text-sm text-rose-800/80">Tra natura, silenzio e danza, per un vero reset dell’anima.</p>
                <Link to="/ritiri" className="mt-3 inline-block rounded-full bg-rose-700 text-white px-4 py-2 text-sm">Scopri di più</Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Ambiti" title="Danzaterapia per scuole e strutture" subtitle="Percorsi su misura per contesti educativi, clinici e culturali.">
        <div className="grid md:grid-cols-3 gap-6">
          {['Educativo', 'Clinico', 'Formativo-Culturale'].map((a) => (
            <div key={a} className="p-6 rounded-2xl bg-white/70 border border-rose-100 shadow-sm">
              <h3 className="font-semibold text-rose-900">Ambito {a}</h3>
              <p className="mt-2 text-rose-800/80 text-sm">Interventi dedicati, con obiettivi chiari e valutazione del processo.</p>
              <Link to="/danzacurativa" className="mt-4 inline-block rounded-full bg-rose-700 text-white px-4 py-2 text-sm">Scrivimi</Link>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Storie" title="Testimonianze">
        <div className="grid md:grid-cols-3 gap-6">
          {[{n:'Chiara', t:'Ho ritrovato fiducia nel mio corpo.'},{n:'Elena', t:'Uno spazio di gentilezza profonda.'},{n:'Marta', t:'Mi ha aiutata a dare forma al cambiamento.'}].map((x) => (
            <div key={x.n} className="p-6 bg-white/70 rounded-2xl border border-rose-100 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-200" />
                <p className="font-medium text-rose-900">{x.n}</p>
              </div>
              <p className="mt-3 text-rose-800/80 text-sm">“{x.t}”</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Rimani in contatto" title="Newsletter e Contatti" subtitle="Scrivimi per informazioni o per prenotare il colloquio conoscitivo.">
        <div className="flex flex-wrap gap-3">
          <Link to="/contatti" className="rounded-full bg-rose-700 text-white px-6 py-3">Scrivimi</Link>
          <Link to="/contatti" className="rounded-full bg-rose-100 text-rose-800 px-6 py-3">Iscriviti alla newsletter</Link>
        </div>
      </Section>
    </div>
  )
}
