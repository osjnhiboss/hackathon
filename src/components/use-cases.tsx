import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Rocket, Store, TrendingUp } from "lucide-react";

export function UseCases() {
  const useCases = [
    {
      icon: Rocket,
      title: "Startup founders",
      image: "https://images.unsplash.com/photo-1586764921336-8b37580c7aea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTk1NjYyMTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Forecast fundraising success and set realistic targets.",
        "Predict user growth after a launch or feature release.",
        "Validate pricing tiers before a rollout."
      ]
    },
    {
      icon: Store,
      title: "Local businesses",
      image: "https://images.unsplash.com/photo-1531540823824-7d09de6461c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTk1NjYyMTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Estimate campaign ROI for a street-level promotion.",
        "Predict inventory needs for holiday demand.",
        "Test which product variant will outsell others next month."
      ]
    },
    {
      icon: TrendingUp,
      title: "Investors & advisors",
      image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTk0NzkwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Crowd-validate due diligence assumptions.",
        "Monitor startup milestones using market probabilities."
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl">
            Built for decision-makers
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you're launching a startup, running a local business, or advising others, Foresight gives you the signals you need.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48">
                <ImageWithFallback
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-black">
                    <useCase.icon className="w-4 h-4 mr-2" />
                    {useCase.title}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">
                  Perfect for {useCase.title.toLowerCase()}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {useCase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}