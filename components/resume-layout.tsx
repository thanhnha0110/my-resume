import type { ResumeData } from "@/types/resume"
import Header from "@/components/sections/header"
import About from "@/components/sections/about"
import Experience from "@/components/sections/experience"
import Education from "@/components/sections/education"
import Skills from "@/components/sections/skills"
import Projects from "@/components/sections/projects"
import Contact from "@/components/sections/contact"

interface ResumeLayoutProps {
  resumeData: ResumeData
}

export default function ResumeLayout({ resumeData }: ResumeLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <Header personal={resumeData.personal} />
          <div className="p-6 sm:p-10 space-y-10">
            <About about={resumeData.about} />
            <Experience experience={resumeData.experience} />
            <Education education={resumeData.education} />
            <Skills skills={resumeData.skills} />
            <Projects projects={resumeData.projects} />
            <Contact contact={resumeData.personal} />
          </div>
        </div>
      </div>
    </div>
  )
}

