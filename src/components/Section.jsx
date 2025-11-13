export default function Section({ id, eyebrow, title, subtitle, children, light = false }) {
  return (
    <section id={id} className={`relative ${light ? 'bg-white' : 'bg-gradient-to-b from-white via-pink-50/40 to-sky-50/40'} py-16 sm:py-20` }>
      <div className="absolute inset-x-0 -top-16 h-24 bg-gradient-to-b from-transparent to-white/30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {eyebrow && <p className="text-rose-500 text-sm tracking-widest uppercase mb-2">{eyebrow}</p>}
        {title && <h2 className="text-3xl sm:text-4xl font-semibold text-rose-900">{title}</h2>}
        {subtitle && <p className="mt-2 text-rose-800/80 max-w-2xl">{subtitle}</p>}
        <div className="mt-8">
          {children}
        </div>
      </div>
    </section>
  )
}
