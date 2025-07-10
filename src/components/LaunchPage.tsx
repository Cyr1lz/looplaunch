import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CountdownTimer } from './CountdownTimer';
import { EmailSignup } from './EmailSignup';
import { ArrowDown, Rocket, Zap, Shield, Star, Users, TrendingUp } from 'lucide-react';

export const LaunchPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Set launch date (30 days from now for demo)
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience unprecedented speed and performance"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security you can trust"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Built for teams that want to achieve more together"
    }
  ];

  const stats = [
    { number: "10K+", label: "Early Adopters" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className={`relative z-10 text-center max-w-4xl mx-auto transition-smooth duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-card/10 backdrop-blur-sm border border-border/20 rounded-full px-4 py-2 mb-8 animate-slide-up">
            <Star className="h-4 w-4 text-accent" />
            <span className="text-sm text-accent">Something Amazing is Coming</span>
            <Star className="h-4 w-4 text-accent" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            The Future is
            <span className="block gradient-text">Almost Here</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Revolutionary technology that will transform how you work, create, and connect. 
            Be among the first to experience the next generation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="gradient-primary shadow-primary hover:shadow-glow transition-smooth px-8 py-4 text-lg"
              onClick={() => scrollToSection('signup')}
            >
              <Rocket className="mr-2 h-5 w-5" />
              Reserve Your Spot
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border/50 bg-card/20 backdrop-blur-sm hover:bg-card/40 transition-smooth px-8 py-4 text-lg"
              onClick={() => scrollToSection('about')}
            >
              Learn More
            </Button>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <p className="text-sm text-muted-foreground mb-4">Launching in:</p>
            <CountdownTimer targetDate={launchDate.toISOString()} />
          </div>
        </div>
        
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground hover:text-foreground transition-smooth" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Built for the <span className="gradient-text">Next Generation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're creating something that doesn't just meet today's needs—it anticipates tomorrow's possibilities. 
              Join us as we redefine what's possible.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center hover:bg-card/50 transition-smooth animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-primary">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Section */}
      <section id="signup" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-glow opacity-20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="bg-card/20 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12 shadow-accent">
            <TrendingUp className="h-12 w-12 gradient-primary rounded-xl p-2 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don't Miss the <span className="gradient-text">Launch</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be the first to experience the future. Join thousands of others who are already on the waitlist.
            </p>
            
            <EmailSignup />
            
            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>10,000+ Waiting</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Launch Campaign. Something amazing is coming.
          </p>
        </div>
      </footer>
    </div>
  );
};