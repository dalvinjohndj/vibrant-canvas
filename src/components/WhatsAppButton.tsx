import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "+260XXXXXXXXX"; // Replace with actual WhatsApp number
  const message = "Hi! I'm interested in learning more about your properties.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <Button
        size="lg"
        className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-all bg-[#25D366] hover:bg-[#20BA5A] group-hover:scale-110"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-background border px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat on WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
