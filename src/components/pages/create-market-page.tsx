import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { ArrowLeft, TrendingUp, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "../ui/alert";

interface CreateMarketPageProps {
  onNavigate: (page: string) => void;
}

export function CreateMarketPage({ onNavigate }: CreateMarketPageProps) {
  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute top-40 left-20 w-96 h-96 bg-primary/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-accent/15 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Back button */}
          <Button 
            variant="ghost" 
            className="mb-6 hover:bg-white/10"
            onClick={() => onNavigate('home')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <Card className="border border-primary/20 bg-card/95 backdrop-blur-xl shadow-2xl shadow-primary/10">
            {/* Card top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
            
            <CardHeader className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    Create Prediction Market
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Set up a new market for community predictions
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <Alert className="border-primary/30 bg-primary/5">
                <AlertCircle className="h-4 w-4 text-primary" />
                <AlertDescription className="text-sm">
                  Markets are immutable once created. Please ensure all details are correct before submitting.
                </AlertDescription>
              </Alert>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Market Question *</Label>
                  <Input 
                    id="title" 
                    placeholder="Will Bitcoin reach $100,000 by end of Q1 2025?"
                    className="bg-input-background border-border/50 focus:border-primary/50"
                  />
                  <p className="text-xs text-muted-foreground">Make it clear and verifiable</p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea 
                    id="description"
                    placeholder="Detailed description of the market, including resolution criteria..."
                    rows={4}
                    className="bg-input-background border-border/50 focus:border-primary/50"
                  />
                  <p className="text-xs text-muted-foreground">Explain how the market will be resolved</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Select>
                      <SelectTrigger className="bg-input-background border-border/50">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="sports">Sports</SelectItem>
                        <SelectItem value="politics">Politics</SelectItem>
                        <SelectItem value="entertainment">Entertainment</SelectItem>
                        <SelectItem value="crypto">Cryptocurrency</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="resolution-date">Resolution Date *</Label>
                    <Input 
                      id="resolution-date" 
                      type="date"
                      className="bg-input-background border-border/50 focus:border-primary/50"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="initial-pool">Initial Liquidity Pool (USD)</Label>
                  <Input 
                    id="initial-pool" 
                    type="number"
                    placeholder="1000"
                    className="bg-input-background border-border/50 focus:border-primary/50"
                  />
                  <p className="text-xs text-muted-foreground">Minimum: $100 USD</p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="oracle">Oracle Source *</Label>
                  <Select>
                    <SelectTrigger className="bg-input-background border-border/50">
                      <SelectValue placeholder="Select oracle" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manual">Manual Resolution</SelectItem>
                      <SelectItem value="chainlink">Chainlink Oracle</SelectItem>
                      <SelectItem value="api">API Oracle</SelectItem>
                      <SelectItem value="consensus">Community Consensus</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">How will the outcome be determined?</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-border/50">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-medium">Creation Fee</p>
                    <p className="text-sm text-muted-foreground">Platform fee for market creation</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">$25</p>
                    <p className="text-xs text-muted-foreground">One-time fee</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => onNavigate('home')}
                  >
                    Cancel
                  </Button>
                  <Button 
                    className="flex-1 bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30"
                    size="lg"
                  >
                    Create Market
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
