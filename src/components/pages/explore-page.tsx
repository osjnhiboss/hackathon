import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { ArrowLeft, Search, TrendingUp, TrendingDown, Clock, DollarSign, Users } from "lucide-react";

interface ExplorePageProps {
  onNavigate: (page: string) => void;
}

export function ExplorePage({ onNavigate }: ExplorePageProps) {
  const [visibleMarkets, setVisibleMarkets] = React.useState(6);
  const [isLoading, setIsLoading] = React.useState(false);

  const allMarkets = [
    {
      id: 1,
      title: "Will Bitcoin reach $100,000 by end of Q1 2025?",
      category: "Finance",
      yesPrice: 67,
      noPrice: 33,
      volume: "$47,834",
      traders: 1247,
      closesIn: "48 hours",
      trending: "up"
    },
    {
      id: 2,
      title: "Will AI surpass human performance in chess by 2025?",
      category: "Technology",
      yesPrice: 89,
      noPrice: 11,
      volume: "$23,456",
      traders: 892,
      closesIn: "5 days",
      trending: "up"
    },
    {
      id: 3,
      title: "Will the next iPhone feature foldable display?",
      category: "Technology",
      yesPrice: 34,
      noPrice: 66,
      volume: "$18,234",
      traders: 654,
      closesIn: "12 days",
      trending: "down"
    },
    {
      id: 4,
      title: "Will SpaceX launch Starship to orbit this quarter?",
      category: "Space",
      yesPrice: 72,
      noPrice: 28,
      volume: "$56,789",
      traders: 1543,
      closesIn: "3 days",
      trending: "up"
    },
    {
      id: 5,
      title: "Will the S&P 500 close above 5000 this month?",
      category: "Finance",
      yesPrice: 58,
      noPrice: 42,
      volume: "$91,234",
      traders: 2341,
      closesIn: "15 days",
      trending: "up"
    },
    {
      id: 6,
      title: "Will Ethereum merge to proof-of-stake succeed?",
      category: "Crypto",
      yesPrice: 81,
      noPrice: 19,
      volume: "$34,567",
      traders: 987,
      closesIn: "7 days",
      trending: "down"
    },
    {
      id: 7,
      title: "Will Tesla release FSD Beta to all customers this year?",
      category: "Technology",
      yesPrice: 45,
      noPrice: 55,
      volume: "$28,901",
      traders: 756,
      closesIn: "20 days",
      trending: "up"
    },
    {
      id: 8,
      title: "Will oil prices exceed $100 per barrel this quarter?",
      category: "Finance",
      yesPrice: 52,
      noPrice: 48,
      volume: "$67,234",
      traders: 1876,
      closesIn: "10 days",
      trending: "down"
    },
    {
      id: 9,
      title: "Will the metaverse reach 1B users by 2026?",
      category: "Technology",
      yesPrice: 29,
      noPrice: 71,
      volume: "$41,567",
      traders: 1123,
      closesIn: "30 days",
      trending: "up"
    }
  ];

  const markets = allMarkets.slice(0, visibleMarkets);

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setVisibleMarkets(prev => Math.min(prev + 3, allMarkets.length));
      setIsLoading(false);
    }, 500);
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
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-white via-primary/90 to-accent/80 bg-clip-text text-transparent">
            Explore Markets
          </h1>
          <p className="text-lg text-muted-foreground">
            Browse and participate in thousands of prediction markets
          </p>
        </div>
        
        {/* Search and Filters */}
        <Card className="mb-8 border border-primary/20 bg-card/95 backdrop-blur-xl">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  placeholder="Search markets..."
                  className="pl-10 bg-input-background border-border/50"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full md:w-48 bg-input-background border-border/50">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="sports">Sports</SelectItem>
                  <SelectItem value="politics">Politics</SelectItem>
                  <SelectItem value="crypto">Crypto</SelectItem>
                  <SelectItem value="tech">Technology</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-48 bg-input-background border-border/50">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="volume">Highest Volume</SelectItem>
                  <SelectItem value="traders">Most Traders</SelectItem>
                  <SelectItem value="closing">Closing Soon</SelectItem>
                  <SelectItem value="new">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
        
        {/* Tabs */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="bg-card/50 backdrop-blur-sm border border-primary/20">
            <TabsTrigger value="all">All Markets</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="closing">Closing Soon</TabsTrigger>
            <TabsTrigger value="new">New</TabsTrigger>
          </TabsList>
        </Tabs>
        
        {/* Markets Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {markets.map((market) => (
            <Card key={market.id} className="group border border-primary/10 bg-card/80 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 cursor-pointer">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="outline" className="bg-primary/10 border-primary/30">
                    {market.category}
                  </Badge>
                  {market.trending === "up" ? (
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  ) : (
                    <TrendingDown className="w-5 h-5 text-red-500" />
                  )}
                </div>
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                  {market.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="border border-accent/30 rounded-lg p-3 bg-accent/5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">YES</span>
                      <TrendingUp className="w-4 h-4 text-accent" />
                    </div>
                    <div className="text-2xl text-accent">{market.yesPrice}%</div>
                    <div className="text-xs text-muted-foreground">${(market.yesPrice / 100).toFixed(2)}/share</div>
                  </div>
                  <div className="border border-border/50 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">NO</span>
                      <TrendingDown className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="text-2xl">{market.noPrice}%</div>
                    <div className="text-xs text-muted-foreground">${(market.noPrice / 100).toFixed(2)}/share</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm border-t border-border/50 pt-4">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <DollarSign className="w-4 h-4" />
                    <span>{market.volume}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{market.traders}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{market.closesIn}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30"
                  onClick={() => onNavigate('market-details')}
                >
                  Trade
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Load More */}
        {visibleMarkets < allMarkets.length && (
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/30 hover:bg-primary/10"
              onClick={handleLoadMore}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Load More Markets"}
            </Button>
          </div>
        )}
        
        {visibleMarkets >= allMarkets.length && (
          <div className="text-center mt-12">
            <p className="text-muted-foreground">You've reached the end of the markets list</p>
          </div>
        )}
      </div>
    </section>
  );
}
