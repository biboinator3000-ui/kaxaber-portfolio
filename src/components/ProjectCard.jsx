export default function ProjectCard({ project }) {
  return <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
    <div className={`relative grid h-44 place-items-center overflow-hidden bg-gradient-to-br ${project.accent}`} aria-label={`${project.title}-ის ვიზუალური პრევიუ`}>
      <span className="absolute -right-5 -top-7 h-32 w-32 rounded-full bg-white/15" /><span className="absolute -bottom-10 -left-5 h-36 w-36 rounded-full border-[18px] border-white/15" />
      <span className="relative grid h-16 w-16 place-items-center rounded-2xl bg-white/90 text-3xl shadow-lg">{project.symbol}</span>
    </div>
    <div className="p-6"><p className="text-xs font-bold uppercase tracking-wider text-violet-600">{project.category}</p><h3 className="mt-2 text-xl font-bold text-slate-950">{project.title}</h3><p className="mt-3 min-h-12 text-sm leading-6 text-slate-600">{project.description}</p><ul className="mt-5 flex flex-wrap gap-2">{project.technologies.map((tech) => <li key={tech} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">{tech}</li>)}</ul><div className="mt-6 flex gap-3"><a href={project.github} target="_blank" rel="noreferrer" className="button-secondary flex-1">GitHub <span aria-hidden="true">↗</span></a><a href={project.demo} target="_blank" rel="noreferrer" className="button-primary flex-1">Demo <span aria-hidden="true">↗</span></a></div></div>
  </article>
}
