import { useRef } from "react"
import emailjs from "emailjs-com"
import confetti from "canvas-confetti"

function Contact() {
  const formRef = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formRef.current) return

    emailjs
      .sendForm(
        "Emilia",
        "template_dgxqpis",
        formRef.current,
        "O966CG-1rm-LUfsJ4"
      )
      .then(
        () => {
         
          confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#9c8b6a', '#d2be96', '#ffffff'] 
          });

        },
        (error) => {
          console.error(error)
          alert("Oppsss.. somethinhg is wrong")
        }
      )
  }

  return (
    <section id="contact" className="py-32 bg-[#f9f9f9]">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center text-[#3f3a32]">
          Contact <span className="text-[#9c8b6a]">Me</span>
        </h2>
        <p className="text-center text-[#5f584f] mb-12">
          Have a question or want to work together? Send me a message!
        </p>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-6"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your name"
            required
            className="w-full p-4 rounded-xl border border-[rgba(200,180,150,0.4)] bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#9c8b6a]/50 transition-all"
          />

          <input
            type="email"
            name="reply_to"
            placeholder="Your email"
            required
            className="w-full p-4 rounded-xl border border-[rgba(200,180,150,0.4)] bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#9c8b6a]/50 transition-all"
          />

          <textarea
            name="message"
            placeholder="Your message"
            required
            rows={5}
            className="w-full p-4 rounded-xl border border-[rgba(200,180,150,0.4)] bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#9c8b6a]/50 transition-all"
          />

          <button
            type="submit"
            className="
              w-full py-4 rounded-xl
              bg-[#9c8b6a] text-white font-bold tracking-widest uppercase text-sm
              hover:bg-[#867558]
              active:scale-[0.98]
              shadow-lg shadow-[#9c8b6a]/20
              transition-all duration-200
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact