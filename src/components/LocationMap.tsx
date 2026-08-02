import { MapPin, ExternalLink } from 'lucide-react'

const LAT = 5.5536653
const LNG = -0.3182544
const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/owAQmU3vsYXW3qkt6'

interface LocationMapProps {
  locationName?: string
  address?: string
  zoom?: number
}

const LocationMap = ({
  locationName = 'Zulu Gardens, Tatop',
  address = 'Zulu Garden, Weija Tatop, Accra, Ghana',
  zoom = 17,
}: LocationMapProps) => {
  const mapSrc = `https://www.google.com/maps?q=${LAT},${LNG}&z=${zoom}&output=embed`

  return (
    <section className="w-full bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="px-6 pb-10 pt-16 sm:px-12 md:px-16 md:pt-24 lg:px-24">
        <p className="mb-4 font-display text-sm uppercase tracking-[0.35em] text-brand-dark">
          Find Us
        </p>
        <h2 className="mb-4 font-display text-4xl uppercase leading-[0.95] text-brand-dark sm:text-5xl lg:text-[3.4rem]">
          Visit {locationName}
        </h2>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <p className="flex items-center gap-2 text-base text-[#7F8285]">
            <MapPin size={18} className="text-brand-accent" />
            {address}
          </p>

          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-display text-sm uppercase tracking-wide text-brand-accent transition-colors hover:text-brand-dark"
          >
            Get Directions
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      <div className="h-[480px] w-full sm:h-[560px] md:h-[680px] lg:h-[800px]">
        <iframe
          title={locationName}
          src={mapSrc}
          className="h-full w-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}

export default LocationMap;