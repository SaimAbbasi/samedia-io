interface SectionLabelProps {
  number: string
  label: string
  light?: boolean
}

export default function SectionLabel({ number, label, light = false }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-2 ${light ? 'text-dark' : 'text-cream'}`}>
      <span className="font-heading text-lime text-sm italic tracking-wider">
        {number} /
      </span>
      <span className="font-body text-xs uppercase tracking-widest opacity-70">
        {label}
      </span>
    </div>
  )
}
