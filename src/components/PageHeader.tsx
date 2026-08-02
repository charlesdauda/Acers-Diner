import { ChevronDown } from 'lucide-react'

type PageHeaderProps = {
  title: string
}

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 bg-brand-header px-6 py-20 lg:py-28">
      <h1 className="font-display text-4xl uppercase text-brand-dark md:text-5xl lg:text-6xl">
        {title}
      </h1>
      <ChevronDown className="h-6 w-6 animate-bounce text-brand-dark" />
    </section>
  )
}

export default PageHeader