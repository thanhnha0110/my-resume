export interface ResumeData {
  personal: Personal
  about: string
  experience: Experience[]
  education: Education[]
  skills: Skills
  projects: Project[]
}

export interface Personal {
  name: string
  title: string
  email: string
  phone: string
  location: string
  website?: string
  github?: string
  linkedin?: string
  twitter?: string
  avatar?: string
}

export interface Experience {
  company: string
  position: string
  location: string
  startDate: string
  endDate?: string
  responsibilities: string[]
}

export interface Education {
  institution: string
  degree: string
  field?: string
  location: string
  startDate: string
  endDate?: string
  description?: string
}

export interface Skills {
  [category: string]: string[]
}

export interface Project {
  name: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
}

