import { useState } from 'react'

export default function Contatti() {
  const [form, setForm] = useState({ nome: '', email: '', messaggio: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="pt-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-semibold text-rose-900">Contatti</h1>
        <p className="mt-3 text-rose-800/90 max-w-3xl">Scrivimi per informazioni, per prenotare il colloquio conoscitivo o per progetti in scuole e strutture.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-10">
          <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-white/70 border border-rose-100 shadow-sm">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm text-rose-800/80 mb-1">Nome</label>
                <input
                  type="text" required
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="w-full rounded-xl border border-rose-200 bg-white/80 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
                />
              </div>
              <div>
                <label className="block text-sm text-rose-800/80 mb-1">Email</label>
                <input
                  type="email" required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-rose-200 bg-white/80 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
                />
              </div>
              <div>
                <label className="block text-sm text-rose-800/80 mb-1">Messaggio</label>
                <textarea
                  required rows={5}
                  value={form.messaggio}
                  onChange={(e) => setForm({ ...form, messaggio: e.target.value })}
                  className="w-full rounded-xl border border-rose-200 bg-white/80 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
                />
              </div>
              <button className="rounded-full bg-rose-700 text-white px-6 py-3">Invia</button>
              {sent && <p className="text-green-700 text-sm">Messaggio inviato! Ti risponderò al più presto.</p>}
            </div>
          </form>

          <div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-rose-50 to-sky-50 border border-rose-100 shadow-sm">
              <h3 className="font-semibold text-rose-900">Dettagli</h3>
              <p className="mt-2 text-rose-800/80 text-sm">Email: <a className="underline decoration-rose-300" href="mailto:maresa@example.com">maresa@example.com</a></p>
              <p className="mt-1 text-rose-800/80 text-sm">Telefono: <a className="underline decoration-rose-300" href="tel:+39000000000">+39 000 000 000</a></p>
              <p className="mt-1 text-rose-800/80 text-sm">Città: Milano</p>
              <div className="mt-4 flex gap-3">
                <a href="#" className="rounded-full bg-rose-100 text-rose-700 px-3 py-2 text-sm">Instagram</a>
                <a href="#" className="rounded-full bg-rose-100 text-rose-700 px-3 py-2 text-sm">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
