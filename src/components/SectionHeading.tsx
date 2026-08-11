interface SectionHeadingProps {
  overline?: string
  title: string
  text?: string
  align?: 'center' | 'left'
}

export default function SectionHeading({ overline, title, text, align = 'center' }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  return (
    <div className={`flex flex-col ${alignClass} max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`}>
      {overline && (
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">{overline}</span>
      )}
      <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{text}</p>}
    </div>
  )
}