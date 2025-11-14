import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { Checkbox } from "../ui/checkbox";
import { Wallet } from "lucide-react";

interface SignUpPageProps {
  onNavigate: (page: string) => void;
}

export function SignUpPage({ onNavigate }: SignUpPageProps) {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary/15 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-md mx-auto">
          <Card className="border border-primary/20 bg-card/95 backdrop-blur-xl shadow-2xl shadow-primary/10">
            {/* Card top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent"></div>
            
            <CardHeader className="text-center space-y-2 pb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-accent/30">
                <span className="text-white text-2xl">P</span>
              </div>
              <CardTitle className="text-2xl bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Create Account
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Join thousands of predictors on Foresight
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="John Doe"
                    className="bg-input-background border-border/50 focus:border-primary/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com"
                    className="bg-input-background border-border/50 focus:border-primary/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="••••••••"
                    className="bg-input-background border-border/50 focus:border-primary/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input 
                    id="confirm-password" 
                    type="password" 
                    placeholder="••••••••"
                    className="bg-input-background border-border/50 focus:border-primary/50"
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label htmlFor="terms" className="text-sm text-muted-foreground">
                    I agree to the{" "}
                    <a href="#" className="text-primary hover:text-accent transition-colors">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-primary hover:text-accent transition-colors">
                      Privacy Policy
                    </a>
                  </label>
                </div>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-accent to-primary hover:shadow-lg hover:shadow-accent/30" size="lg">
                Create Account
              </Button>
              
              <div className="relative">
                <Separator className="bg-border/50" />
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-3 text-sm text-muted-foreground">
                  Or continue with
                </span>
              </div>
              
              <Button variant="outline" className="w-full border-primary/30 hover:bg-primary/10" size="lg">
                <Wallet className="w-5 h-5 mr-2" />
                Connect Wallet
              </Button>
              
              <div className="text-center text-sm">
                <span className="text-muted-foreground">Already have an account? </span>
                <button 
                  onClick={() => onNavigate('sign-in')}
                  className="text-primary hover:text-accent transition-colors font-medium"
                >
                  Sign In
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
