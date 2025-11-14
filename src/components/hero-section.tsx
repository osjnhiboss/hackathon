import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Premium glowing orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-40 right-20 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-primary/25 rounded-full blur-3xl animate-float"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-sm mb-4 backdrop-blur-sm shadow-lg shadow-primary/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span className="bg-gradient-to-r from-white to-primary/90 bg-clip-text text-transparent font-medium">
                  AI-Powered • Real-Time Analytics
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
                Validate business ideas with real bets — faster, cheaper, smarter.
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Create prediction markets for product launches, pricing decisions, user growth, hiring, and local campaigns. Get community forecasts, back them with stakes, and turn ambiguous decisions into clear signals.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30"
                onClick={() => onNavigate('create-market')}
              >
                Create a Market
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10"
                onClick={() => onNavigate('explore')}
              >
                Explore Example Predictions
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="text-center group">
                <div className="text-2xl font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">500+</div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Active Markets</div>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent"></div>
              <div className="text-center group">
                <div className="text-2xl font-medium bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">89%</div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Accuracy Rate</div>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent"></div>
              <div className="text-center group">
                <div className="text-2xl font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">3 min</div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Setup Time</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Premium glow effects */}
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            {/* Gradient border effect */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary/40 via-accent/30 to-primary/40 rounded-2xl blur-sm"></div>
            
            <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTk1MDQ2OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Business analytics dashboard"
                className="w-full h-auto"
              />
              {/* Image overlay for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
