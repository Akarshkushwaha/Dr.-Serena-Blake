import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion"

const faqs = [
  {
        question: "Do you accept insurance?",
    answer:
      "No, I do not accept insurance directly. However, I provide a superbill for each session that you can submit to your insurance company for potential reimbursement. Many clients find they can recover a portion of their session fees through their out-of-network benefits.",
  },
  {
    question: "Are online sessions available?",
    answer:
      "Yes—all virtual sessions are conducted via Zoom. I offer virtual sessions on Mondays, Wednesdays, and Fridays from 1 PM–5 PM. Online therapy can be just as effective as in-person sessions and provides the convenience of meeting from your own comfortable space.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "I require 24-hour notice for any cancellations or rescheduling. Cancellations made with less than 24 hours notice will be charged the full session fee. This policy helps ensure that appointment times remain available for all clients who need them.",
  },
  {
    question: "What are your fees?",
    answer:
      "My session fees are $200 for individual therapy sessions and $240 for couples therapy sessions. Payment is due at the time of service, and I accept cash, check, or credit card. I also provide superbills for insurance reimbursement.",
  },
  {
    question: "What are your office hours?",
    answer:
      "I offer in-person sessions at my Maplewood Drive office on Tuesdays and Thursdays from 10 AM–6 PM. Virtual sessions via Zoom are available on Mondays, Wednesdays, and Fridays from 1 PM–5 PM. This schedule allows for both in-person and online therapy options.",
  },
  {
    question: "What services do you offer?",
    answer:
      "I specialize in three main areas: Anxiety & Stress Management, Relationship Counseling, and Trauma Recovery. I use evidence-based approaches like cognitive-behavioral therapy and mindfulness techniques, combined with compassionate, personalized care to help you achieve your therapeutic goals.",

  },
]

export function FAQ(){
  return (
    <section id="faq" className="py-20 px-4 bg-gradient-to-br from-blue-100 to-green-100">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Frequently Asked Question</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-1">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index+1}`} className="border-b-2 border-blue-300 bg transparent">
              <AccordionTrigger className="text-left text-lg font-semibold text-blue-900 hover:text-blue-700 py-6 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-blue-700 pb-6 text-base leading-relaxed">{faq.answer}
          
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
