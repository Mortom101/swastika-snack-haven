
import { Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const CallButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "+9779841234567";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <button
      onClick={handleCall}
      className={cn(
        "call-button transform transition-all duration-500 ease-in-out",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      )}
    >
      <Phone className="h-5 w-5" />
      <span className="font-medium">Call to Order</span>
    </button>
  );
};
