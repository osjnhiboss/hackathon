import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Check } from "lucide-react";

interface PricingSectionProps {
  onNavigate?: (page: string) => void;
}

export function PricingSection({ onNavigate }: PricingSectionProps) {
  const plans = [
    {
      name: "Free",
      price: "₦0",
      description: "Perfect for getting started",
      features: [
        "Create up to 5 public markets",
        "Community leaderboard",
        "Basic analytics",
        "Email support"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Pro",
      price: "₦15,000",
      period: "/month",
      description: "For serious decision-makers",
      features: [
        "Unlimited private markets",
        "Advanced analytics",
        "Batch invites",
        "API access",
        "Priority support",
        "Custom stake types"
      ],
      cta: "Start Pro Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For teams and organizations",
      features: [
        "On-premise or white-label",
        "Compliance and SLA included",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced security",
        "Training and onboarding"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free, scale as you grow. No hidden fees, cancel anytime.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.popular ? 'border-primary border-2 shadow-lg' : 'border'}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">
                  {plan.name}
                </CardTitle>
                <div className="space-y-2">
                  <div className="text-4xl">
                    {plan.price}
                    {plan.period && (
                      <span className="text-lg text-muted-foreground">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground">
                    {plan.description}
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30' : ''}`}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                  onClick={() => plan.name === "Free" ? onNavigate?.('sign-up') : null}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include secure payouts, dispute resolution, and compliance features.
          </p>
        </div>
      </div>
    </section>
  );
}