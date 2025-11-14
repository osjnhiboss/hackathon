import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "Are prediction outcomes legally binding?",
      answer: "No — markets provide probabilistic signals and payouts per the platform rules. They are not legal contracts and should not replace formal agreements."
    },
    {
      question: "Can I create private markets for my team?",
      answer: "Yes. Choose \"Invite-only\" when creating a market and only invited users can participate."
    },
    {
      question: "What happens if a market outcome is disputed?",
      answer: "We first check predefined evidence rules. If unresolved, a moderator panel reviews submitted evidence. All dispute steps are recorded."
    },
    {
      question: "How do payouts work?",
      answer: "Winners receive platform credits instantly after settlement. Fiat/crypto withdrawals require KYC to prevent fraud."
    },
    {
      question: "Are prediction markets gambling?",
      answer: "Our platform is designed for information discovery and decision support. We prohibit markets about chance-based gambling outcomes and any content that violates our policies."
    },
    {
      question: "How accurate are the predictions?",
      answer: "Market accuracy depends on participant expertise and incentives. Our platform maintains an 89% average accuracy rate across resolved markets with real stakes."
    },
    {
      question: "Can I integrate Foresight with my existing tools?",
      answer: "Yes! Pro and Enterprise plans include API access and integrations with Slack, Trello, and Zapier to get market updates in your workflow."
    },
    {
      question: "What types of questions work best?",
      answer: "Clear, time-bound, verifiable questions work best. Examples: \"Will our app reach 10k downloads by March 31?\" or \"Will our campaign generate 500+ leads this quarter?\""
    }
  ];

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Foresight
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg px-6 border">
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}