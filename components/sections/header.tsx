import type { Personal } from "@/types/resume"
import Image from "next/image"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

interface HeaderProps {
  personal: Personal
}

export default function Header({ personal }: HeaderProps) {
  return (
    <div className="bg-primary text-primary-foreground p-6 sm:p-10">
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        {personal.avatar && (
          <div className="shrink-0">
            <Image
              src={personal.avatar || "/placeholder.svg"}
              alt={personal.name}
              width={120}
              height={120}
              className="rounded-full border-4 border-primary-foreground/20"
            />
          </div>
        )}
        <div className="space-y-4 text-center md:text-left">
          <div>
            <h1 className="text-3xl font-bold">{personal.name}</h1>
            <p className="text-xl mt-1 text-primary-foreground/80">{personal.title}</p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {personal.email && (
              <a href={`mailto:${personal.email}`} className="flex items-center gap-1 hover:underline">
                <Mail className="h-4 w-4" />
                <span>{personal.email}</span>
              </a>
            )}
            {personal.phone && (
              <a href={`tel:${personal.phone}`} className="flex items-center gap-1 hover:underline">
                <Phone className="h-4 w-4" />
                <span>{personal.phone}</span>
              </a>
            )}
            {personal.location && (
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{personal.location}</span>
              </div>
            )}
            {personal.github && (
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:underline"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            )}
            {personal.linkedin && (
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:underline"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

