import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ArrowRight, Shield, Clock } from "lucide-react";

interface CTASectionProps {
  onNavigate?: (page: string) => void;
}

export function CTASection({ onNavigate }: CTASectionProps) {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Premium background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-accent/10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-4xl mx-auto border border-primary/30 bg-card/95 backdrop-blur-2xl shadow-2xl shadow-primary/20 overflow-hidden relative">
          {/* Animated gradient border */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-accent to-primary opacity-20 blur-xl"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          <CardContent className="p-12 text-center space-y-8 relative">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
                Ready to outsmart uncertainty?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join hundreds of founders and business owners who are making better decisions with prediction markets.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 group bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30"
                onClick={() => onNavigate?.('create-market')}
              >
                Start Your First Prediction
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10"
                onClick={() => onNavigate?.('explore')}
              >
                See Live Markets
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Setup in under 3 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Secure & compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Free to start</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
