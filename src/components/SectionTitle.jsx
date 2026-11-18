export default function SectionTitle({ eyebrow, title, description, center = false }) {
  return <div className={`mb-10 ${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}><p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-violet-600">{eyebrow}</p><h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>{description && <p className="mt-4 leading-7 text-slate-600">{description}</p>}</div>
}
