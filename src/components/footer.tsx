import { Separator } from "./ui/separator";

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const links = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "How it works", href: "#how-it-works" },
      { name: "Pricing", href: "#pricing" },
      { name: "API", href: "#api" }
    ],
    Company: [
      { name: "About", href: "#about" },
      { name: "Blog", href: "#blog" },
      { name: "Careers", href: "#careers" },
      { name: "Contact", href: "#contact" }
    ],
    Support: [
      { name: "Help Center", href: "#help" },
      { name: "Community", href: "#community" },
      { name: "Status", href: "#status" },
      { name: "Contact Support", href: "mailto:support@foresight.com" }
    ],
    Legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Use", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Compliance", href: "#compliance" }
    ]
  };

  return (
    <footer className="bg-secondary/10 border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground text-sm">F</span>
              </div>
              <span className="text-xl">Foresight</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Real-world outcome predictions for founders & local businesses. Make confident bets, discover market signals.
            </p>
          </div>
          
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm mb-4">{category}</h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href} 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>© 2025 Foresight. All rights reserved.</span>
            <span>•</span>
            <span>We collect minimal data to run markets and process payouts. We never sell your personal data.</span>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Responsible markets only</span>
            <span>•</span>
            <span>Secure payouts</span>
            <span>•</span>
            <span>Dispute-free results</span>
          </div>
        </div>
      </div>
    </footer>
  );
}