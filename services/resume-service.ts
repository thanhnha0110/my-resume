import type { ResumeData } from "@/types/resume"
import { ResumeRepository } from "@/repositories/resume-repository"

// This simulates a service layer in Laravel
export async function getResumeData(): Promise<ResumeData> {
  const repository = new ResumeRepository()
  return await repository.getResumeData()
}

