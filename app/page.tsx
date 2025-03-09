import ResumeLayout from "@/components/resume-layout"
import { getResumeData } from "@/services/resume-service"

export default async function Home() {
  const resumeData = await getResumeData()

  return <ResumeLayout resumeData={resumeData} />
}

