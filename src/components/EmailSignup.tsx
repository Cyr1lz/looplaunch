import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Mail, CheckCircle } from 'lucide-react';

export const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast({
        title: "You're on the list! 🎉",
        description: "We'll notify you as soon as we launch.",
      });
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 text-accent mb-4">
          <CheckCircle className="h-6 w-6" />
          <span className="text-lg font-medium">You're all set!</span>
        </div>
        <p className="text-muted-foreground">
          We'll send you an exclusive early access invite.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 h-12 border-border bg-card/50 backdrop-blur-sm focus:ring-primary focus:border-primary transition-smooth"
            required
          />
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          className="h-12 px-8 gradient-primary hover:shadow-glow transition-smooth disabled:opacity-50"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-foreground/20 border-t-foreground rounded-full animate-spin"></div>
              Joining...
            </div>
          ) : (
            'Get Early Access'
          )}
        </Button>
      </div>
      <p className="text-xs text-muted-foreground mt-3 text-center">
        No spam, unsubscribe at any time.
      </p>
    </form>
  );
};