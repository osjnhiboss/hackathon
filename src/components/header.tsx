import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Wallet } from "lucide-react";

interface HeaderProps {
  onNavigate?: (page: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  return (
    <header className="border-b border-primary/10 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      {/* Premium header glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate?.('home')}>
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
              <span className="text-white text-sm">F</span>
            </div>
            <span className="text-xl bg-gradient-to-r from-white via-primary/90 to-accent/80 bg-clip-text text-transparent font-semibold">
              Foresight
            </span>
            <Badge className="ml-2 text-xs bg-gradient-to-r from-accent/20 to-primary/20 text-accent border border-accent/30">
              Beta
            </Badge>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-slate-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm text-slate-300 hover:text-white transition-colors">
              How it works
            </a>
            <a href="#pricing" className="text-sm text-slate-300 hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-sm text-slate-300 hover:text-white transition-colors">
              FAQ
            </a>
          </nav>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10" onClick={() => onNavigate?.('sign-in')}>
              Sign In
            </Button>
            <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all">
              <Wallet className="w-4 h-4 mr-2" />
              Connect Wallet
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30 transition-all" onClick={() => onNavigate?.('create-market')}>
              Start Free
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
