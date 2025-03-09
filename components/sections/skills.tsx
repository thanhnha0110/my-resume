import type { Skills as SkillsType } from "@/types/resume"
import { Badge } from "@/components/ui/badge"

interface SkillsProps {
  skills: SkillsType
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Skills</h2>

      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category} className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {skillList.map((skill, index) => (
              <Badge key={index} variant="secondary" className="px-3 py-1 text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

