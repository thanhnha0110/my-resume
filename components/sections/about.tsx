interface AboutProps {
  about: string
}

export default function About({ about }: AboutProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">About Me</h2>
      <p className="text-gray-600 whitespace-pre-line">{about}</p>
    </section>
  )
}

