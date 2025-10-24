import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Avatar } from './ui/avatar';
import { 
  Send, 
  Paperclip, 
  Mic,
  Bot,
  User,
  CheckCheck,
  Phone,
  Video,
  MoreVertical
} from 'lucide-react';

interface Message {
  id: number;
  sender: 'user' | 'doctor';
  message: string;
  timestamp: string;
  read: boolean;
}

export function DoctorChat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'doctor',
      message: 'Hello Sarah! I\'m Dr. AI Assistant. How can I help you today?',
      timestamp: '10:30 AM',
      read: true
    },
    {
      id: 2,
      sender: 'user',
      message: 'Hi Doctor, I\'ve been experiencing some headaches and fatigue for the past few days.',
      timestamp: '10:32 AM',
      read: true
    },
    {
      id: 3,
      sender: 'doctor',
      message: 'I understand. Can you tell me more about the headaches? When do they typically occur and how would you rate the severity on a scale of 1-10?',
      timestamp: '10:33 AM',
      read: true
    },
    {
      id: 4,
      sender: 'user',
      message: 'They usually happen in the afternoon, around 3-4 PM. I\'d say they\'re about a 6 or 7 out of 10.',
      timestamp: '10:35 AM',
      read: true
    },
    {
      id: 5,
      sender: 'doctor',
      message: 'Thank you for that information. Based on what you\'ve shared, along with your recent health data, here are my recommendations:\n\n1. Ensure you\'re drinking at least 8 glasses of water daily\n2. Take regular breaks from screen time\n3. Try to maintain a consistent sleep schedule\n4. Monitor your symptoms for the next 3 days\n\nIf the headaches persist or worsen, we should schedule an in-person consultation.',
      timestamp: '10:36 AM',
      read: true
    },
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      sender: 'user',
      message: message,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      read: false
    };

    setMessages([...messages, newMessage]);
    setMessage('');

    // Simulate doctor response
    setTimeout(() => {
      const doctorResponse: Message = {
        id: messages.length + 2,
        sender: 'doctor',
        message: 'I\'ve received your message. Let me review your information and get back to you shortly.',
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        read: false
      };
      setMessages(prev => [...prev, doctorResponse]);
    }, 2000);
  };

  return (
    <div className="flex-1 bg-gray-50 overflow-hidden flex flex-col">
      {/* Chat Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkb2N0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjEwODMyMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Doctor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <h2 className="text-gray-900">Dr. AI Assistant</h2>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <p className="text-sm text-gray-500">Online • Available 24/7</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Phone className="w-4 h-4 mr-2" />
              Voice Call
            </Button>
            <Button variant="outline" size="sm">
              <Video className="w-4 h-4 mr-2" />
              Video Call
            </Button>
            <Button variant="ghost" size="sm">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-auto p-4 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-4">
          {/* Date Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-xs text-gray-500">Today, October 22, 2025</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'doctor' && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5 text-white" />
                </div>
              )}
              
              <div className={`max-w-[70%] ${msg.sender === 'user' ? 'order-1' : ''}`}>
                <div
                  className={`rounded-2xl px-4 py-3 ${
                    msg.sender === 'user'
                      ? 'bg-blue-500 text-white rounded-br-sm'
                      : 'bg-white text-gray-900 border border-gray-200 rounded-bl-sm'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.message}</p>
                </div>
                <div className={`flex items-center gap-1 mt-1 px-1 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                  <span className="text-xs text-gray-500">{msg.timestamp}</span>
                  {msg.sender === 'user' && (
                    <CheckCheck className={`w-3 h-3 ${msg.read ? 'text-blue-500' : 'text-gray-400'}`} />
                  )}
                </div>
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-white" />
                </div>
              )}
            </div>
          ))}

          {/* AI Suggestions */}
          <Card className="bg-blue-50 border-blue-200 p-4">
            <div className="flex items-start gap-3">
              <Bot className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-blue-900 mb-2">Quick Suggestions</h4>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white hover:bg-blue-100 border-blue-200 text-blue-700"
                    onClick={() => setMessage('Can you check my recent health reports?')}
                  >
                    Check my reports
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white hover:bg-blue-100 border-blue-200 text-blue-700"
                    onClick={() => setMessage('What are my medication reminders?')}
                  >
                    Medication reminders
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white hover:bg-blue-100 border-blue-200 text-blue-700"
                    onClick={() => setMessage('Schedule an appointment')}
                  >
                    Book appointment
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Message Input */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="max-w-6xl mx-auto">
          <form onSubmit={handleSendMessage} className="flex items-end gap-3">
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="flex-shrink-0"
            >
              <Paperclip className="w-5 h-5 text-gray-500" />
            </Button>
            
            <div className="flex-1 relative">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                className="pr-12 min-h-[44px]"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2"
              >
                <Mic className="w-5 h-5 text-gray-500" />
              </Button>
            </div>

            <Button
              type="submit"
              disabled={!message.trim()}
              className="bg-blue-500 hover:bg-blue-600 flex-shrink-0"
              size="icon"
            >
              <Send className="w-5 h-5" />
            </Button>
          </form>
          <p className="text-xs text-gray-500 mt-2 text-center">
            This AI assistant provides general health information. For emergencies, please call your local emergency services.
          </p>
        </div>
      </div>
    </div>
  );
}
