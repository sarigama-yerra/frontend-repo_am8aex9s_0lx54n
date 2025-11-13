import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Grazie! Ti contatteremo presto per la newsletter.')
    setEmail('')
  }

  return (
    <footer className="mt-24 bg-gradient-to-b from-rose-50 to-sky-50 border-t border-rose-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div>
            <h3 className="text-rose-800 font-semibold text-lg">Coreosofia</h3>
            <p className="text-rose-700/80 mt-2 text-sm">Danza creativa e crescita personale guidata da Maresa Pronti.</p>
            <div className="mt-4 space-y-1 text-sm text-rose-700/80">
              <p>Email: <a href="mailto:maresa@example.com" className="underline decoration-rose-300 hover:text-rose-900">maresa@example.com</a></p>
              <p>Telefono: <a href="tel:+39000000000" className="underline decoration-rose-300 hover:text-rose-900">+39 000 000 000</a></p>
              <p>Città: Milano</p>
            </div>
          </div>

          <div>
            <h4 className="text-rose-800 font-semibold">Newsletter</h4>
            <p className="text-rose-700/80 mt-2 text-sm">Ricevi ispirazioni, novità su percorsi e ritiri, risorse gratuite.</p>
            <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="La tua email"
                className="flex-1 rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300"
              />
              <button className="rounded-full bg-rose-700 text-white px-4 py-2 text-sm shadow hover:bg-rose-800">Iscriviti</button>
            </form>
          </div>

          <div>
            <h4 className="text-rose-800 font-semibold">Seguimi</h4>
            <div className="mt-3 flex gap-3">
              <a href="#" className="rounded-full bg-rose-100 text-rose-700 px-3 py-2 text-sm hover:bg-rose-200">Instagram</a>
              <a href="#" className="rounded-full bg-rose-100 text-rose-700 px-3 py-2 text-sm hover:bg-rose-200">Facebook</a>
              <a href="#" className="rounded-full bg-rose-100 text-rose-700 px-3 py-2 text-sm hover:bg-rose-200">YouTube</a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-rose-100 text-xs text-rose-700/70 flex flex-wrap items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Coreosofia · Maresa Pronti</p>
          <p className="italic">Corpo, cuore, coscienza in movimento.</p>
        </div>
      </div>
    </footer>
  )
}
