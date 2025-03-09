import type { ResumeData } from "@/types/resume"

// This simulates a database repository in Laravel
export class ResumeRepository {
  // In a real app, this would fetch from a database
  async getResumeData(): Promise<ResumeData> {
    // Simulating a database fetch with mock data
    return {
      personal: {
        name: "John Doe",
        title: "Full Stack Developer",
        email: "john.doe@example.com",
        phone: "+1 (555) 123-4567",
        location: "San Francisco, CA",
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        avatar: "/placeholder.svg?height=120&width=120",
      },
      about:
        "Passionate and detail-oriented Full Stack Developer with 5+ years of experience building scalable web applications. Proficient in Laravel, Vue.js, and React. Committed to writing clean, maintainable code and implementing best practices.",
      experience: [
        {
          company: "Tech Innovations Inc.",
          position: "Senior Full Stack Developer",
          location: "San Francisco, CA",
          startDate: "2021-03-01",
          responsibilities: [
            "Led a team of 5 developers to build and maintain a SaaS platform using Laravel and Vue.js",
            "Implemented repository pattern and service layer architecture to improve code maintainability",
            "Reduced API response time by 40% through query optimization and caching strategies",
            "Integrated payment processing system with Stripe API and implemented subscription management",
          ],
        },
        {
          company: "WebSolutions Co.",
          position: "Full Stack Developer",
          location: "San Francisco, CA",
          startDate: "2018-06-01",
          endDate: "2021-02-28",
          responsibilities: [
            "Developed and maintained multiple client websites using Laravel, MySQL, and jQuery",
            "Implemented responsive designs and ensured cross-browser compatibility",
            "Created RESTful APIs for mobile applications and third-party integrations",
            "Participated in code reviews and mentored junior developers",
          ],
        },
        {
          company: "StartUp Labs",
          position: "Junior Web Developer",
          location: "San Jose, CA",
          startDate: "2016-09-01",
          endDate: "2018-05-30",
          responsibilities: [
            "Built and maintained web applications using PHP, MySQL, and JavaScript",
            "Collaborated with designers to implement UI/UX improvements",
            "Fixed bugs and implemented new features for existing applications",
            "Participated in daily stand-up meetings and sprint planning",
          ],
        },
      ],
      education: [
        {
          institution: "University of California",
          degree: "Bachelor of Science",
          field: "Computer Science",
          location: "Berkeley, CA",
          startDate: "2012-09-01",
          endDate: "2016-05-30",
          description: "Graduated with honors. Specialized in web development and database systems.",
        },
        {
          institution: "Online Learning Platform",
          degree: "Professional Certificate",
          field: "Advanced Laravel Development",
          location: "Online",
          startDate: "2017-01-01",
          endDate: "2017-06-30",
        },
      ],
      skills: {
        "Programming Languages": ["PHP", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
        "Frameworks & Libraries": ["Laravel", "Vue.js", "React", "Node.js", "Express", "Bootstrap", "Tailwind CSS"],
        Databases: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
        "Tools & Platforms": ["Git", "Docker", "AWS", "Linux", "Nginx", "CI/CD", "RESTful APIs", "GraphQL"],
      },
      projects: [
        {
          name: "E-commerce Platform",
          description:
            "A full-featured e-commerce platform with product management, cart functionality, and payment processing",
          technologies: ["Laravel", "Vue.js", "MySQL", "Stripe API"],
          github: "https://github.com/johndoe/ecommerce",
          demo: "https://ecommerce-demo.example.com",
        },
        {
          name: "Task Management System",
          description: "A collaborative task management system with real-time updates and team collaboration features",
          technologies: ["Laravel", "React", "WebSockets", "Redis"],
          github: "https://github.com/johndoe/taskmanager",
          demo: "https://tasks-demo.example.com",
        },
        {
          name: "Content Management System",
          description: "A custom CMS with role-based access control and content versioning",
          technologies: ["Laravel", "Alpine.js", "MySQL", "AWS S3"],
          github: "https://github.com/johndoe/cms",
        },
        {
          name: "API Gateway",
          description: "A centralized API gateway for microservices with authentication and rate limiting",
          technologies: ["Laravel", "Redis", "JWT", "Docker"],
          github: "https://github.com/johndoe/api-gateway",
        },
      ],
    }
  }
}

