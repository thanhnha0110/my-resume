import type { Personal } from "@/types/resume"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendContactForm } from "@/services/contact-service"

interface ContactProps {
  contact: Personal
}

export default function Contact({ contact }: ContactProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Contact Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-600 mb-4">
            Feel free to reach out to me directly at{" "}
            <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
              {contact.email}
            </a>{" "}
            or use the contact form.
          </p>
          <ContactForm />
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
          <ul className="space-y-3">
            {contact.email && (
              <li className="flex items-start">
                <span className="font-medium w-24">Email:</span>
                <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
                  {contact.email}
                </a>
              </li>
            )}
            {contact.phone && (
              <li className="flex items-start">
                <span className="font-medium w-24">Phone:</span>
                <a href={`tel:${contact.phone}`} className="text-primary hover:underline">
                  {contact.phone}
                </a>
              </li>
            )}
            {contact.location && (
              <li className="flex items-start">
                <span className="font-medium w-24">Location:</span>
                <span>{contact.location}</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  )
}

function ContactForm() {
  return (
    <form action={sendContactForm} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <Input id="name" name="name" required />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input id="email" name="email" type="email" required />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Subject
        </label>
        <Input id="subject" name="subject" required />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <Textarea id="message" name="message" rows={5} required />
      </div>
      <Button type="submit" className="w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  )
}

