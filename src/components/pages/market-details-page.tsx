import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Input } from "../ui/input";
import { 
  ArrowLeft, 
  Calendar, 
  Eye, 
  Users, 
  TrendingUp, 
  DollarSign,
  Clock,
  CheckCircle2,
  XCircle,
  BarChart3,
  Trophy,
  Activity
} from "lucide-react";

interface MarketDetailsPageProps {
  onNavigate: (page: string) => void;
}

export function MarketDetailsPage({ onNavigate }: MarketDetailsPageProps) {
  const [selectedOutcome, setSelectedOutcome] = useState<"yes" | "no" | null>(null);
  const [betAmount, setBetAmount] = useState("");
  const [showResults, setShowResults] = useState(false);

  const marketData = {
    title: "Will Café Nova reach ₦250,000 weekly revenue within 90 days of introducing the new brunch menu?",
    category: "Business",
    yesPrice: 37,
    noPrice: 63,
    volume: "$47,834",
    traders: 1247,
    deadline: "Jan 1, 2026",
    closesIn: "48 hours",
    visibility: "Invite-only",
    stakes: "Platform credits or ₦",
    participants: 12,
    description: "This market helps Café Nova's owner make informed inventory and staffing decisions for their brunch launch. The market will resolve YES if weekly revenue reaches ₦250,000 within the specified timeframe.",
    creator: "Café Nova Owner",
    createdDate: "Oct 3, 2025",
    totalPool: "₦47,834",
    resolution: {
      status: "resolved",
      outcome: "yes",
      finalValue: "₦267,500",
      resolvedDate: "Dec 28, 2025",
      description: "Market resolved YES - Café Nova successfully reached ₦267,500 in weekly revenue on week 11 of the new brunch menu launch."
    }
  };

  const tradeHistory = [
    { user: "User#1234", action: "Bought YES", amount: "₦5,000", price: "35%", time: "2 hours ago" },
    { user: "User#5678", action: "Sold NO", amount: "₦3,200", price: "62%", time: "5 hours ago" },
    { user: "User#9012", action: "Bought YES", amount: "₦7,500", price: "33%", time: "1 day ago" },
    { user: "User#3456", action: "Bought NO", amount: "₦4,100", price: "65%", time: "2 days ago" },
  ];

  const priceHistory = [
    { date: "Oct 3", yes: 25, no: 75 },
    { date: "Oct 10", yes: 28, no: 72 },
    { date: "Oct 17", yes: 32, no: 68 },
    { date: "Oct 24", yes: 35, no: 65 },
    { date: "Oct 31", yes: 37, no: 63 },
  ];

  const topPredictors = [
    { rank: 1, user: "User#1234", prediction: "YES", amount: "₦15,000", profit: "+₦9,450", accuracy: "89%" },
    { rank: 2, user: "User#5678", prediction: "YES", amount: "₦12,500", profit: "+₦7,875", accuracy: "85%" },
    { rank: 3, user: "User#9012", prediction: "YES", amount: "₦10,200", profit: "+₦6,426", accuracy: "82%" },
  ];

  const handleTrade = () => {
    if (selectedOutcome && betAmount) {
      alert(`Trade placed: ${selectedOutcome.toUpperCase()} - Amount: ₦${betAmount}`);
      setBetAmount("");
      setSelectedOutcome(null);
    }
  };

  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-primary/15 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Back button */}
        <Button 
          variant="ghost" 
          className="mb-6 hover:bg-white/10"
          onClick={() => onNavigate('home')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
        
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Market Header */}
            <Card className="border border-primary/20 bg-card/95 backdrop-blur-xl">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="outline" className="bg-primary/10 border-primary/30">
                    {marketData.category}
                  </Badge>
                  <Badge className="bg-accent/20 text-accent border border-accent/30">
                    Live Market
                  </Badge>
                </div>
                <CardTitle className="text-2xl lg:text-3xl mb-4">
                  {marketData.title}
                </CardTitle>
                <p className="text-muted-foreground">
                  {marketData.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Market Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <div className="text-xs text-muted-foreground">Deadline</div>
                      <div className="text-sm">{marketData.deadline}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <div className="text-xs text-muted-foreground">Visibility</div>
                      <div className="text-sm">{marketData.visibility}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <div className="text-xs text-muted-foreground">Participants</div>
                      <div className="text-sm">{marketData.participants} predictors</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <div className="text-xs text-muted-foreground">Total Pool</div>
                      <div className="text-sm">{marketData.totalPool}</div>
                    </div>
                  </div>
                </div>

                {/* Market Confidence */}
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Market confidence</span>
                    <span className="text-sm">{marketData.yesPrice}% YES, {marketData.noPrice}% NO</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full transition-all" style={{ width: `${marketData.yesPrice}%` }}></div>
                  </div>
                </div>

                {/* Toggle Results */}
                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    onClick={() => setShowResults(!showResults)}
                    className="border-accent/30 hover:bg-accent/10"
                  >
                    <Activity className="w-4 h-4 mr-2" />
                    {showResults ? "Hide Results" : "View Market Outcome"}
                  </Button>
                </div>

                {/* Results Section */}
                {showResults && (
                  <Card className="border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-primary/5">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-accent/20 rounded-full">
                          <Trophy className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">Market Resolved</CardTitle>
                          <p className="text-sm text-muted-foreground">
                            Resolved on {marketData.resolution.resolvedDate}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-accent/10 rounded-lg border border-accent/30">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-8 h-8 text-accent" />
                          <div>
                            <div className="font-semibold text-lg">Outcome: YES</div>
                            <div className="text-sm text-muted-foreground">
                              Final weekly revenue: {marketData.resolution.finalValue}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground p-4 bg-background/50 rounded-lg">
                        {marketData.resolution.description}
                      </p>

                      {/* Top Predictors */}
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Trophy className="w-4 h-4 text-accent" />
                          Top Predictors (Winners)
                        </h4>
                        <div className="space-y-2">
                          {topPredictors.map((predictor) => (
                            <div 
                              key={predictor.rank}
                              className="flex items-center justify-between p-3 bg-background/70 rounded-lg border border-primary/10 hover:border-accent/30 transition-all"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center text-sm">
                                  #{predictor.rank}
                                </div>
                                <div>
                                  <div className="text-sm font-medium">{predictor.user}</div>
                                  <div className="text-xs text-muted-foreground">
                                    {predictor.prediction} • {predictor.amount}
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm text-accent font-semibold">{predictor.profit}</div>
                                <div className="text-xs text-muted-foreground">{predictor.accuracy} accuracy</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>

            {/* Tabs for History and Chart */}
            <Card className="border border-primary/20 bg-card/95 backdrop-blur-xl">
              <CardContent className="p-6">
                <Tabs defaultValue="history">
                  <TabsList className="bg-card/50 backdrop-blur-sm border border-primary/20 mb-6">
                    <TabsTrigger value="history">Trade History</TabsTrigger>
                    <TabsTrigger value="chart">Price Chart</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="history" className="space-y-3">
                    {tradeHistory.map((trade, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border/50 hover:border-primary/30 transition-all">
                        <div>
                          <div className="font-medium text-sm">{trade.user}</div>
                          <div className="text-xs text-muted-foreground">{trade.time}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm">{trade.action}</div>
                          <div className="text-xs text-muted-foreground">{trade.amount} @ {trade.price}</div>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                  
                  <TabsContent value="chart">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-accent rounded-full"></div>
                            <span className="text-sm">YES</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-muted-foreground rounded-full"></div>
                            <span className="text-sm">NO</span>
                          </div>
                        </div>
                        <BarChart3 className="w-5 h-5 text-muted-foreground" />
                      </div>
                      
                      <div className="space-y-3">
                        {priceHistory.map((point, idx) => (
                          <div key={idx} className="space-y-1">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">{point.date}</span>
                              <span>{point.yes}% / {point.no}%</span>
                            </div>
                            <div className="flex gap-1 h-2">
                              <div 
                                className="bg-accent rounded-l"
                                style={{ width: `${point.yes}%` }}
                              ></div>
                              <div 
                                className="bg-muted-foreground rounded-r"
                                style={{ width: `${point.no}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Trading Panel */}
          <div className="lg:col-span-1">
            <Card className="border border-primary/20 bg-card/95 backdrop-blur-xl sticky top-24">
              <CardHeader>
                <CardTitle>Place Your Prediction</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Outcome Selection */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Select Outcome</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setSelectedOutcome("yes")}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        selectedOutcome === "yes"
                          ? "border-accent bg-accent/10"
                          : "border-border/50 hover:border-accent/30"
                      }`}
                    >
                      <CheckCircle2 className={`w-6 h-6 mx-auto mb-2 ${
                        selectedOutcome === "yes" ? "text-accent" : "text-muted-foreground"
                      }`} />
                      <div className="text-sm font-medium">YES</div>
                      <div className="text-2xl text-accent mt-1">{marketData.yesPrice}%</div>
                      <div className="text-xs text-muted-foreground">
                        ₦{(marketData.yesPrice / 100).toFixed(2)}/share
                      </div>
                    </button>
                    
                    <button
                      onClick={() => setSelectedOutcome("no")}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        selectedOutcome === "no"
                          ? "border-red-500 bg-red-500/10"
                          : "border-border/50 hover:border-red-500/30"
                      }`}
                    >
                      <XCircle className={`w-6 h-6 mx-auto mb-2 ${
                        selectedOutcome === "no" ? "text-red-500" : "text-muted-foreground"
                      }`} />
                      <div className="text-sm font-medium">NO</div>
                      <div className="text-2xl mt-1">{marketData.noPrice}%</div>
                      <div className="text-xs text-muted-foreground">
                        ₦{(marketData.noPrice / 100).toFixed(2)}/share
                      </div>
                    </button>
                  </div>
                </div>

                {/* Amount Input */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Amount (₦)</label>
                  <Input
                    type="number"
                    placeholder="Enter amount"
                    value={betAmount}
                    onChange={(e) => setBetAmount(e.target.value)}
                    className="bg-input-background border-border/50"
                  />
                  <div className="flex gap-2 mt-2">
                    {[1000, 5000, 10000].map((amount) => (
                      <Button
                        key={amount}
                        variant="outline"
                        size="sm"
                        onClick={() => setBetAmount(amount.toString())}
                        className="flex-1 text-xs"
                      >
                        ₦{amount.toLocaleString()}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Potential Return */}
                {betAmount && selectedOutcome && (
                  <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shares</span>
                      <span>{(parseFloat(betAmount) / (selectedOutcome === "yes" ? marketData.yesPrice : marketData.noPrice) * 100).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Potential Return</span>
                      <span className="text-accent font-medium">
                        ₦{(parseFloat(betAmount) * (selectedOutcome === "yes" ? 100 / marketData.yesPrice : 100 / marketData.noPrice)).toFixed(2)}
                      </span>
                    </div>
                  </div>
                )}

                {/* Trade Button */}
                <Button
                  className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30"
                  disabled={!selectedOutcome || !betAmount}
                  onClick={handleTrade}
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Place Trade
                </Button>

                {/* Market Info */}
                <div className="pt-4 border-t border-border/50 space-y-2 text-xs text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Creator</span>
                    <span>{marketData.creator}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Created</span>
                    <span>{marketData.createdDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Closes in</span>
                    <span className="text-accent">{marketData.closesIn}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
