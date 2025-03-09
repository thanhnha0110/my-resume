import type { Experience as ExperienceType } from "@/types/resume"
import { formatDate } from "@/utils/date-formatter"

interface ExperienceProps {
  experience: ExperienceType[]
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Work Experience</h2>
      <div className="space-y-6">
        {experience.map((job, index) => (
          <div key={index} className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <h3 className="text-xl font-semibold text-gray-700">{job.position}</h3>
              <span className="text-gray-500 text-sm">
                {formatDate(job.startDate)} - {job.endDate ? formatDate(job.endDate) : "Present"}
              </span>
            </div>
            <p className="text-gray-600 font-medium">
              {job.company}, {job.location}
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              {job.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

