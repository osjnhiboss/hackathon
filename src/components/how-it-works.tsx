import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { MessageSquare, Settings, Users, TrendingUp } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Ask a clear question",
      description: "e.g., \"Will Product X hit 5k MAU by June 30?\""
    },
    {
      icon: Settings,
      title: "Open a market",
      description: "Pick stake type, deadline, and visibility."
    },
    {
      icon: Users,
      title: "Invite participants",
      description: "Share publicly or invite specific participants. They place bets."
    },
    {
      icon: TrendingUp,
      title: "Get your signal",
      description: "Market settles at deadline; winners receive payouts and you get a probability score."
    }
  ];

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From question to actionable probability in four simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-3xl text-primary/20">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-border"></div>
                    <div className="w-2 h-2 bg-primary rounded-full absolute -right-1 -top-0.75"></div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="text-lg px-8 py-6">
            Create a Market
          </Button>
        </div>
      </div>
    </section>
  );
}