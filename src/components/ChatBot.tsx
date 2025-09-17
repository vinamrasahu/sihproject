import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, X, Bot, User } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChatBot({ isOpen, onClose }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Namaste! I'm your AI tourism assistant for Jharkhand. I can help you plan your trip, find attractions, book homestays, and answer questions about local culture. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(input),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);

    setInput("");
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes("plan") || input.includes("itinerary")) {
      return "I'd love to help you plan your Jharkhand trip! Use our AI Planner feature for detailed itineraries. For quick suggestions: Netarhat for sunsets, Betla for wildlife, Hundru Falls for adventure, and Deoghar for spirituality. What interests you most?";
    }
    
    if (input.includes("weather") || input.includes("climate")) {
      return "Jharkhand has a tropical climate. Best time to visit: October to March (pleasant weather). Avoid monsoons (July-September) for outdoor activities. Summer (April-June) can be hot but great for waterfalls!";
    }
    
    if (input.includes("food") || input.includes("cuisine")) {
      return "Try authentic Jharkhandi cuisine! Must-try: Dhuska (rice pancakes), Rugra (mushroom curry), Bamboo shoot curry, Handia (rice beer), and tribal delicacies. Check our Marketplace for food experiences!";
    }
    
    if (input.includes("transport") || input.includes("travel")) {
      return "Getting around Jharkhand: Ranchi airport connects major cities, extensive rail network, and good road connectivity. For local travel, book verified guides through our platform or use local buses and taxis.";
    }
    
    if (input.includes("culture") || input.includes("festival")) {
      return "Jharkhand's rich tribal culture includes Sarhul (spring festival), Karma (harvest festival), and Sohrai (post-harvest). Experience tribal art, music, and dance. Check our Events section for upcoming cultural programs!";
    }

    return "That's a great question! I can help with trip planning, weather info, local attractions, cultural insights, transport options, and more. Try using our AI Planner for detailed itineraries, or ask me anything specific about Jharkhand tourism!";
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md h-[600px] p-0">
        <DialogHeader className="p-4 pb-2 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="h-6 w-6 text-primary" />
              <DialogTitle>Tourism Assistant</DialogTitle>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="flex flex-col h-full">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start space-x-2 ${
                    message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
                  }`}
                >
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === "user" ? "bg-primary" : "bg-accent"
                  }`}>
                    {message.sender === "user" ? 
                      <User className="h-4 w-4 text-white" /> : 
                      <Bot className="h-4 w-4 text-white" />
                    }
                  </div>
                  <div className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === "user" 
                      ? "bg-primary text-primary-foreground ml-auto" 
                      : "bg-muted"
                  }`}>
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Jharkhand tourism..."
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="flex-1"
              />
              <Button onClick={handleSend} size="sm" className="px-3">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}