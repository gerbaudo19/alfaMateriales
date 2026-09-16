interface SectionHeadingProps {
  overline?: string
  title: string
  text?: string
  align?: 'center' | 'left'
  mono?: string
}

export default function SectionHeading({ overline, title, text, align = 'left', mono }: SectionHeadingProps) {
  const isCenter = align === 'center'
  return (
    <div className={`flex flex-col ${isCenter ? 'items-start text-left' : 'items-start text-left'} max-w-3xl ${isCenter ? 'mx-auto' : ''}`}>
      {mono && <span className="font-mono text-[11px] font-bold tracking-[0.18em] text-acer mb-2">{mono}</span>}
      {overline && (
        <span className="inline-flex items-center gap-2 border border-concrete-900 bg-obra-yellow px-2.5 py-1 font-mono text-[11px] font-black tracking-[0.12em] text-concrete-900">
          <span className="h-1.5 w-1.5 bg-concrete-900" />
          {overline}
        </span>
      )}
      <h2 className="mt-3 font-display text-[36px] font-black leading-[0.9] tracking-[-0.02em] text-concrete-900 sm:text-[44px]">{title}</h2>
      {text && <p className="mt-3 max-w-[52ch] text-[16px] leading-7 text-acer sm:text-[17px]">{text}</p>}
    </div>
  )
}
