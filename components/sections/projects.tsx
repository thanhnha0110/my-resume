import type { Project } from "@/types/resume"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

interface ProjectsProps {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900"
                >
                  <Github className="h-4 w-4" />
                  <span>Code</span>
                </Link>
              )}
              {project.demo && (
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Demo</span>
                </Link>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

