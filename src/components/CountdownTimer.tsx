import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string;
}

export const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-4 md:gap-8 justify-center items-center">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
          <div className="relative">
            <div className="bg-card border border-border rounded-2xl p-4 md:p-6 shadow-primary transition-smooth hover:shadow-glow">
              <div className="text-3xl md:text-5xl font-bold gradient-text mb-2">
                {unit.value.toString().padStart(2, '0')}
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-glow rounded-2xl -z-10 animate-pulse-glow"></div>
          </div>
          <div className="text-sm md:text-base text-muted-foreground mt-2 font-medium">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
};