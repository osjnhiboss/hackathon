import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Calendar, Eye, Users, TrendingUp } from "lucide-react";

interface SampleMarketProps {
  onNavigate: (page: string) => void;
}

export function SampleMarket({ onNavigate }: SampleMarketProps) {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-5xl">
            See a market in action
          </h2>
          <p className="text-lg text-muted-foreground">
            Real prediction market created by a local business owner
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-2">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <Badge variant="outline" className="w-fit">
                    Live Market
                  </Badge>
                  <CardTitle className="text-xl lg:text-2xl">
                    Will Café Nova reach ₦250,000 weekly revenue within 90 days of introducing the new brunch menu?
                  </CardTitle>
                </div>
                <div className="text-right">
                  <div className="text-3xl text-primary">37%</div>
                  <div className="text-sm text-muted-foreground">Market probability</div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <div className="text-sm">Deadline</div>
                    <div className="text-sm">Jan 1, 2026</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <div className="text-sm">Visibility</div>
                    <div className="text-sm">Invite-only</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <div className="text-sm">Stakes</div>
                    <div className="text-sm">Platform credits or ₦</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <div className="text-sm">Participants</div>
                    <div className="text-sm">12 predictors</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm">Market confidence</span>
                  <span className="text-sm">37% YES, 63% NO</span>
                </div>
                <div className="w-full bg-background rounded-full h-3">
                  <div className="bg-green-500 h-3 rounded-full" style={{ width: '37%' }}></div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  className="flex-1 bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30"
                  onClick={() => onNavigate('market-details')}
                >
                  Place Prediction
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => onNavigate('market-details')}
                >
                  View Market Details
                </Button>
              </div>
              
              <div className="text-center pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  This market helps Café Nova's owner make informed inventory and staffing decisions for their brunch launch.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}