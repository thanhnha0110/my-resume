import type { Education as EducationType } from "@/types/resume"
import { formatDate } from "@/utils/date-formatter"

interface EducationProps {
  education: EducationType[]
}

export default function Education({ education }: EducationProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <h3 className="text-xl font-semibold text-gray-700">{edu.degree}</h3>
              <span className="text-gray-500 text-sm">
                {formatDate(edu.startDate)} - {edu.endDate ? formatDate(edu.endDate) : "Present"}
              </span>
            </div>
            <p className="text-gray-600 font-medium">
              {edu.institution}, {edu.location}
            </p>
            {edu.description && <p className="text-gray-600">{edu.description}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}

