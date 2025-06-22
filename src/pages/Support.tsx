
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { MessageCircle, Send, Plus, Search, Filter, Clock, CheckCircle, AlertCircle, XCircle, User, Bot, Headphones, Ticket, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ParticleNetwork from "@/components/ParticleNetwork";

interface TicketData {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  category: string;
  createdAt: Date;
  updatedAt: Date;
  customerName: string;
  customerEmail: string;
}

interface ChatMessage {
  id: number;
  text: string;
  sender: 'user' | 'support';
  timestamp: Date;
  ticketId?: string;
}

const Support: React.FC = () => {
  const { toast } = useToast();
  const [tickets, setTickets] = useState<TicketData[]>([
    {
      id: 'TK-001',
      title: 'Login Issues',
      description: 'Cannot login to my account after password reset',
      priority: 'high',
      status: 'open',
      category: 'Authentication',
      createdAt: new Date(2024, 0, 15),
      updatedAt: new Date(2024, 0, 15),
      customerName: 'John Doe',
      customerEmail: 'john.doe@email.com'
    },
    {
      id: 'TK-002',
      title: 'Billing Question',
      description: 'Need clarification on my monthly subscription charges',
      priority: 'medium',
      status: 'in-progress',
      category: 'Billing',
      createdAt: new Date(2024, 0, 14),
      updatedAt: new Date(2024, 0, 15),
      customerName: 'Jane Smith',
      customerEmail: 'jane.smith@email.com'
    },
    {
      id: 'TK-003',
      title: 'Feature Request',
      description: 'Would like to see dark mode option in the app',
      priority: 'low',
      status: 'resolved',
      category: 'Feature Request',
      createdAt: new Date(2024, 0, 12),
      updatedAt: new Date(2024, 0, 14),
      customerName: 'Mike Johnson',
      customerEmail: 'mike.johnson@email.com'
    }
  ]);

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      text: "Hello! Welcome to CodeForge Academy Support. How can I help you today?",
      sender: 'support',
      timestamp: new Date()
    }
  ]);

  const [newTicket, setNewTicket] = useState({
    title: '',
    description: '',
    priority: 'medium' as const,
    category: '',
    customerName: '',
    customerEmail: ''
  });

  const [chatInput, setChatInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const createTicket = () => {
    if (!newTicket.title || !newTicket.description || !newTicket.customerName || !newTicket.customerEmail) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const ticket: TicketData = {
      id: `TK-${String(tickets.length + 1).padStart(3, '0')}`,
      ...newTicket,
      status: 'open',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    setTickets([...tickets, ticket]);
    setNewTicket({
      title: '',
      description: '',
      priority: 'medium',
      category: '',
      customerName: '',
      customerEmail: ''
    });

    toast({
      title: "Success",
      description: `Ticket ${ticket.id} created successfully`,
    });
  };

  const sendChatMessage = () => {
    if (!chatInput.trim()) return;

    const userMessage: ChatMessage = {
      id: chatMessages.length + 1,
      text: chatInput,
      sender: 'user',
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    setChatInput('');

    // Simulate support response
    setTimeout(() => {
      const supportResponse: ChatMessage = {
        id: chatMessages.length + 2,
        text: "Thank you for your message. I've received your inquiry and will help you resolve this issue. Let me check our knowledge base for the best solution.",
        sender: 'support',
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, supportResponse]);
    }, 1000);
  };

  const updateTicketStatus = (ticketId: string, newStatus: TicketData['status']) => {
    setTickets(tickets.map(ticket => 
      ticket.id === ticketId 
        ? { ...ticket, status: newStatus, updatedAt: new Date() }
        : ticket
    ));
    toast({
      title: "Updated",
      description: `Ticket ${ticketId} status changed to ${newStatus}`,
    });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-blue-500';
      case 'in-progress': return 'bg-purple-500';
      case 'resolved': return 'bg-green-500';
      case 'closed': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'open': return <Clock className="h-3 w-3" />;
      case 'in-progress': return <AlertCircle className="h-3 w-3" />;
      case 'resolved': return <CheckCircle className="h-3 w-3" />;
      case 'closed': return <XCircle className="h-3 w-3" />;
      default: return <Clock className="h-3 w-3" />;
    }
  };

  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.customerName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || ticket.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      <ParticleNetwork />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Headphones className="h-12 w-12 text-blue-400 mr-4" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Support Center
            </h1>
          </div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Get help when you need it. Create tickets, chat with support, and track your issues.
          </p>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="tickets" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800 border-slate-700">
            <TabsTrigger value="tickets" className="data-[state=active]:bg-blue-600">
              <Ticket className="h-4 w-4 mr-2" />
              Tickets
            </TabsTrigger>
            <TabsTrigger value="create" className="data-[state=active]:bg-blue-600">
              <Plus className="h-4 w-4 mr-2" />
              Create Ticket
            </TabsTrigger>
            <TabsTrigger value="chat" className="data-[state=active]:bg-blue-600">
              <MessageCircle className="h-4 w-4 mr-2" />
              Live Chat
            </TabsTrigger>
            <TabsTrigger value="contact" className="data-[state=active]:bg-blue-600">
              <Mail className="h-4 w-4 mr-2" />
              Contact
            </TabsTrigger>
          </TabsList>

          {/* Tickets Tab */}
          <TabsContent value="tickets" className="space-y-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Support Tickets</CardTitle>
                <CardDescription>Manage and track your support requests</CardDescription>
                
                {/* Search and Filter */}
                <div className="flex gap-4 mt-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      placeholder="Search tickets..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-white"
                  >
                    <option value="all">All Status</option>
                    <option value="open">Open</option>
                    <option value="in-progress">In Progress</option>
                    <option value="resolved">Resolved</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-slate-700">
                      <TableHead className="text-slate-300">ID</TableHead>
                      <TableHead className="text-slate-300">Title</TableHead>
                      <TableHead className="text-slate-300">Priority</TableHead>
                      <TableHead className="text-slate-300">Status</TableHead>
                      <TableHead className="text-slate-300">Category</TableHead>
                      <TableHead className="text-slate-300">Created</TableHead>
                      <TableHead className="text-slate-300">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredTickets.map((ticket) => (
                      <TableRow key={ticket.id} className="border-slate-700">
                        <TableCell className="font-mono text-blue-400">{ticket.id}</TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium text-white">{ticket.title}</div>
                            <div className="text-sm text-slate-400 truncate max-w-xs">
                              {ticket.description}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={`${getPriorityColor(ticket.priority)} text-white`}>
                            {ticket.priority}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={`${getStatusColor(ticket.status)} text-white flex items-center gap-1 w-fit`}>
                            {getStatusIcon(ticket.status)}
                            {ticket.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-slate-300">{ticket.category}</TableCell>
                        <TableCell className="text-slate-400">
                          {ticket.createdAt.toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                                Update
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="bg-slate-800 border-slate-700">
                              <AlertDialogHeader>
                                <AlertDialogTitle className="text-white">Update Ticket Status</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Change the status of ticket {ticket.id}
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <div className="flex gap-2 flex-wrap">
                                {['open', 'in-progress', 'resolved', 'closed'].map((status) => (
                                  <Button
                                    key={status}
                                    variant="outline"
                                    size="sm"
                                    onClick={() => updateTicketStatus(ticket.id, status as TicketData['status'])}
                                    className="border-slate-600 text-slate-300 hover:bg-slate-700"
                                  >
                                    {status}
                                  </Button>
                                ))}
                              </div>
                              <AlertDialogFooter>
                                <AlertDialogCancel className="bg-slate-700 border-slate-600 text-white hover:bg-slate-600">
                                  Cancel
                                </AlertDialogCancel>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Create Ticket Tab */}
          <TabsContent value="create" className="space-y-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Create New Ticket</CardTitle>
                <CardDescription>Submit a new support request</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Your Name *
                    </label>
                    <Input
                      value={newTicket.customerName}
                      onChange={(e) => setNewTicket({...newTicket, customerName: e.target.value})}
                      className="bg-slate-700 border-slate-600 text-white"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      value={newTicket.customerEmail}
                      onChange={(e) => setNewTicket({...newTicket, customerEmail: e.target.value})}
                      className="bg-slate-700 border-slate-600 text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Subject *
                  </label>
                  <Input
                    value={newTicket.title}
                    onChange={(e) => setNewTicket({...newTicket, title: e.target.value})}
                    className="bg-slate-700 border-slate-600 text-white"
                    placeholder="Brief description of your issue"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Category
                    </label>
                    <select
                      value={newTicket.category}
                      onChange={(e) => setNewTicket({...newTicket, category: e.target.value})}
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white"
                    >
                      <option value="">Select a category</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Billing">Billing</option>
                      <option value="Account">Account</option>
                      <option value="Feature Request">Feature Request</option>
                      <option value="Bug Report">Bug Report</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Priority
                    </label>
                    <select
                      value={newTicket.priority}
                      onChange={(e) => setNewTicket({...newTicket, priority: e.target.value as TicketData['priority']})}
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Description *
                  </label>
                  <Textarea
                    value={newTicket.description}
                    onChange={(e) => setNewTicket({...newTicket, description: e.target.value})}
                    className="bg-slate-700 border-slate-600 text-white h-32"
                    placeholder="Please provide detailed information about your issue..."
                  />
                </div>

                <Button onClick={createTicket} className="w-full bg-blue-600 hover:bg-blue-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Ticket
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Live Chat Tab */}
          <TabsContent value="chat" className="space-y-6">
            <Card className="bg-slate-800 border-slate-700 h-96">
              <CardHeader className="pb-2">
                <CardTitle className="text-white flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Live Chat Support
                  <Badge className="ml-auto bg-green-500">Online</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="h-full flex flex-col">
                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto space-y-3 mb-4 pr-2">
                  {chatMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs px-4 py-2 rounded-lg ${
                          message.sender === 'user'
                            ? 'bg-blue-600 text-white ml-4'
                            : 'bg-slate-700 text-slate-100 mr-4'
                        }`}
                      >
                        <div className="flex items-center space-x-2 mb-1">
                          {message.sender === 'support' ? (
                            <Bot className="h-3 w-3" />
                          ) : (
                            <User className="h-3 w-3" />
                          )}
                          <span className="text-xs opacity-70">
                            {message.sender === 'support' ? 'Support Agent' : 'You'}
                          </span>
                        </div>
                        <p className="text-sm">{message.text}</p>
                        <span className="text-xs opacity-50">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </div>
                  ))}
                  <div ref={chatEndRef} />
                </div>

                {/* Chat Input */}
                <div className="flex space-x-2">
                  <Input
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                    placeholder="Type your message..."
                    className="flex-1 bg-slate-700 border-slate-600 text-white"
                  />
                  <Button
                    onClick={sendChatMessage}
                    size="icon"
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Average response time: 2-3 minutes
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Contact Information</CardTitle>
                  <CardDescription>Get in touch with our support team</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-400" />
                    <div>
                      <p className="text-white font-medium">Email Support</p>
                      <p className="text-slate-400">support@codeforge.academy</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-400" />
                    <div>
                      <p className="text-white font-medium">Phone Support</p>
                      <p className="text-slate-400">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-400" />
                    <div>
                      <p className="text-white font-medium">Business Hours</p>
                      <p className="text-slate-400">Mon-Fri: 9:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Quick Help</CardTitle>
                  <CardDescription>Common questions and resources</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <h4 className="font-medium text-white">Frequently Asked Questions</h4>
                    <ul className="space-y-1 text-sm text-slate-400">
                      <li>• How to reset my password?</li>
                      <li>• Billing and subscription questions</li>
                      <li>• Course access issues</li>
                      <li>• Technical requirements</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-white">Documentation</h4>
                    <ul className="space-y-1 text-sm text-slate-400">
                      <li>• Getting Started Guide</li>
                      <li>• Platform Tutorial</li>
                      <li>• API Documentation</li>
                      <li>• Video Tutorials</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Support;
