import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Clock, Target, BarChart3, Shield } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Clock,
      title: "Launch in minutes",
      description: "Create a prediction market in under 3 minutes — define the question, set the outcome window, choose public or invite-only, and invite participants."
    },
    {
      icon: Target,
      title: "Incentivized accuracy",
      description: "Participants stake real or platform credits to back forecasts. Skin in the game = higher quality signals."
    },
    {
      icon: BarChart3,
      title: "Decision-grade signals",
      description: "Aggregate market prices to get a single, interpretable probability you can use for investor meetings, product decisions, or local campaign planning."
    },
    {
      icon: Shield,
      title: "Private markets & compliance",
      description: "Run invite-only markets for internal forecasts or public ones for community learning. Built-in dispute resolution and audit logs keep results trustworthy."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl">
            Why Foresight works
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Turn uncertainty into actionable insights with our prediction marketplace designed for real business decisions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
