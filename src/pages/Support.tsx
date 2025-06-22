
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Send, Plus, Search, Filter, Clock, CheckCircle, AlertCircle, XCircle, User, Bot, Headphones, Ticket, Mail, Phone, Settings, Trash2, Edit, Shield, UserCog } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ParticleNetwork from "@/components/ParticleNetwork";

interface TicketData {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  category: string;
  type: 'support' | 'software-request';
  createdAt: Date;
  updatedAt: Date;
  customerName: string;
  customerEmail: string;
  assignedTo?: string;
}

interface ChatMessage {
  id: number;
  text: string;
  sender: 'user' | 'admin';
  senderName: string;
  senderAvatar?: string;
  timestamp: Date;
  ticketId?: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'user' | 'admin';
}

const Support: React.FC = () => {
  const { toast } = useToast();
  const [currentUser] = useState<User>({
    id: 'user-1',
    name: 'John Doe',
    email: 'john.doe@email.com',
    avatar: '/placeholder.svg',
    role: 'user'
  });

  const [isAdmin, setIsAdmin] = useState(false);

  const [tickets, setTickets] = useState<TicketData[]>([
    {
      id: 'TK-001',
      title: 'Login Issues',
      description: 'Cannot login to my account after password reset',
      priority: 'high',
      status: 'open',
      category: 'Authentication',
      type: 'support',
      createdAt: new Date(2024, 0, 15),
      updatedAt: new Date(2024, 0, 15),
      customerName: 'John Doe',
      customerEmail: 'john.doe@email.com',
      assignedTo: 'Admin Sarah'
    },
    {
      id: 'TK-002',
      title: 'Billing Question',
      description: 'Need clarification on my monthly subscription charges',
      priority: 'medium',
      status: 'in-progress',
      category: 'Billing',
      type: 'support',
      createdAt: new Date(2024, 0, 14),
      updatedAt: new Date(2024, 0, 15),
      customerName: 'Jane Smith',
      customerEmail: 'jane.smith@email.com',
      assignedTo: 'Admin Mike'
    },
    {
      id: 'SR-001',
      title: 'Dark Mode Feature',
      description: 'Would like to see dark mode option in the app',
      priority: 'low',
      status: 'resolved',
      category: 'UI/UX',
      type: 'software-request',
      createdAt: new Date(2024, 0, 12),
      updatedAt: new Date(2024, 0, 14),
      customerName: 'Mike Johnson',
      customerEmail: 'mike.johnson@email.com',
      assignedTo: 'Dev Team'
    },
    {
      id: 'SR-002',
      title: 'Mobile App',
      description: 'Request for a dedicated mobile application',
      priority: 'high',
      status: 'open',
      category: 'Development',
      type: 'software-request',
      createdAt: new Date(2024, 0, 13),
      updatedAt: new Date(2024, 0, 13),
      customerName: 'Sarah Wilson',
      customerEmail: 'sarah.wilson@email.com'
    }
  ]);

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      text: "Hello! Welcome to CodeForge Academy Support. How can I help you today?",
      sender: 'admin',
      senderName: 'Support Admin',
      senderAvatar: '/placeholder.svg',
      timestamp: new Date()
    }
  ]);

  const [newTicket, setNewTicket] = useState({
    title: '',
    description: '',
    priority: 'medium' as 'low' | 'medium' | 'high' | 'urgent',
    category: '',
    type: 'support' as 'support' | 'software-request',
    customerName: '',
    customerEmail: ''
  });

  const [chatInput, setChatInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterType, setFilterType] = useState<string>('all');
  const [filterPriority, setFilterPriority] = useState<string>('all');
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

    const prefix = newTicket.type === 'support' ? 'TK' : 'SR';
    const existingCount = tickets.filter(t => t.type === newTicket.type).length;
    
    const ticket: TicketData = {
      id: `${prefix}-${String(existingCount + 1).padStart(3, '0')}`,
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
      type: 'support',
      customerName: '',
      customerEmail: ''
    });

    toast({
      title: "Success",
      description: `${newTicket.type === 'support' ? 'Support ticket' : 'Software request'} ${ticket.id} created successfully`,
    });
  };

  const sendChatMessage = () => {
    if (!chatInput.trim()) return;

    const userMessage: ChatMessage = {
      id: chatMessages.length + 1,
      text: chatInput,
      sender: 'user',
      senderName: currentUser.name,
      senderAvatar: currentUser.avatar,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    setChatInput('');

    // Simulate admin response
    setTimeout(() => {
      const adminResponse: ChatMessage = {
        id: chatMessages.length + 2,
        text: "Thank you for your message. I've received your inquiry and will help you resolve this issue. Let me check our knowledge base for the best solution.",
        sender: 'admin',
        senderName: 'Support Admin',
        senderAvatar: '/placeholder.svg',
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, adminResponse]);
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

  const assignTicket = (ticketId: string, assignee: string) => {
    setTickets(tickets.map(ticket => 
      ticket.id === ticketId 
        ? { ...ticket, assignedTo: assignee, updatedAt: new Date() }
        : ticket
    ));
    toast({
      title: "Assigned",
      description: `Ticket ${ticketId} assigned to ${assignee}`,
    });
  };

  const deleteTicket = (ticketId: string) => {
    setTickets(tickets.filter(ticket => ticket.id !== ticketId));
    toast({
      title: "Deleted",
      description: `Ticket ${ticketId} has been deleted`,
      variant: "destructive"
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
    const matchesStatus = filterStatus === 'all' || ticket.status === filterStatus;
    const matchesType = filterType === 'all' || ticket.type === filterType;
    const matchesPriority = filterPriority === 'all' || ticket.priority === filterPriority;
    return matchesSearch && matchesStatus && matchesType && matchesPriority;
  });

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      <ParticleNetwork />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Headphones className="h-12 w-12 text-blue-400 mr-4" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Support Center
            </h1>
          </div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Get help when you need it. Create tickets, request software features, and chat with our support team.
          </p>
          
          {/* Top Action Buttons */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button
              onClick={() => window.open('https://discord.gg/codeforge', '_blank')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Join Discord
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsAdmin(!isAdmin)}
              className="border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              {isAdmin ? <User className="h-4 w-4 mr-2" /> : <Shield className="h-4 w-4 mr-2" />}
              {isAdmin ? 'User View' : 'Admin View'}
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="tickets" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800 border-slate-700">
            <TabsTrigger value="tickets" className="data-[state=active]:bg-blue-600">
              <Ticket className="h-4 w-4 mr-2" />
              All Tickets
            </TabsTrigger>
            <TabsTrigger value="create" className="data-[state=active]:bg-blue-600">
              <Plus className="h-4 w-4 mr-2" />
              Create Request
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
                <CardTitle className="text-white flex items-center justify-between">
                  <span>Support Tickets & Software Requests</span>
                  <Badge variant="outline" className="border-blue-400 text-blue-400">
                    {filteredTickets.length} total
                  </Badge>
                </CardTitle>
                <CardDescription>Manage and track your support requests and feature requests</CardDescription>
                
                {/* Advanced Search and Filter */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
                  <div className="relative lg:col-span-2">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      placeholder="Search tickets..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  <Select value={filterType} onValueChange={setFilterType}>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-700 border-slate-600">
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="support">Support</SelectItem>
                      <SelectItem value="software-request">Software Request</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-700 border-slate-600">
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="open">Open</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="resolved">Resolved</SelectItem>
                      <SelectItem value="closed">Closed</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={filterPriority} onValueChange={setFilterPriority}>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue placeholder="Priority" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-700 border-slate-600">
                      <SelectItem value="all">All Priority</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-slate-700">
                      <TableHead className="text-slate-300">ID</TableHead>
                      <TableHead className="text-slate-300">Type</TableHead>
                      <TableHead className="text-slate-300">Title</TableHead>
                      <TableHead className="text-slate-300">Priority</TableHead>
                      <TableHead className="text-slate-300">Status</TableHead>
                      <TableHead className="text-slate-300">Assigned To</TableHead>
                      <TableHead className="text-slate-300">Created</TableHead>
                      <TableHead className="text-slate-300">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredTickets.map((ticket) => (
                      <TableRow key={ticket.id} className="border-slate-700">
                        <TableCell className="font-mono text-blue-400">{ticket.id}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={ticket.type === 'support' ? 'border-blue-400 text-blue-400' : 'border-purple-400 text-purple-400'}>
                            {ticket.type === 'support' ? 'Support' : 'Feature'}
                          </Badge>
                        </TableCell>
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
                        <TableCell className="text-slate-300">
                          {ticket.assignedTo || 'Unassigned'}
                        </TableCell>
                        <TableCell className="text-slate-400">
                          {ticket.createdAt.toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                                  <Edit className="h-3 w-3" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent className="bg-slate-800 border-slate-700">
                                <AlertDialogHeader>
                                  <AlertDialogTitle className="text-white">Update Ticket</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Manage ticket {ticket.id}
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <div className="space-y-4">
                                  <div>
                                    <label className="text-sm text-slate-300 mb-2 block">Status</label>
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
                                  </div>
                                  {isAdmin && (
                                    <div>
                                      <label className="text-sm text-slate-300 mb-2 block">Assign To</label>
                                      <div className="flex gap-2 flex-wrap">
                                        {['Admin Sarah', 'Admin Mike', 'Dev Team'].map((assignee) => (
                                          <Button
                                            key={assignee}
                                            variant="outline"
                                            size="sm"
                                            onClick={() => assignTicket(ticket.id, assignee)}
                                            className="border-slate-600 text-slate-300 hover:bg-slate-700"
                                          >
                                            {assignee}
                                          </Button>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                                <AlertDialogFooter>
                                  <AlertDialogCancel className="bg-slate-700 border-slate-600 text-white hover:bg-slate-600">
                                    Close
                                  </AlertDialogCancel>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                            {isAdmin && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => deleteTicket(ticket.id)}
                                className="border-red-600 text-red-400 hover:bg-red-900"
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            )}
                          </div>
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
                <CardTitle className="text-white">Create New Request</CardTitle>
                <CardDescription>Submit a support ticket or software feature request</CardDescription>
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
                    Request Type *
                  </label>
                  <Select value={newTicket.type} onValueChange={(value: 'support' | 'software-request') => setNewTicket({...newTicket, type: value})}>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue placeholder="Select request type" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-700 border-slate-600">
                      <SelectItem value="support">Support Ticket</SelectItem>
                      <SelectItem value="software-request">Software Feature Request</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Subject *
                  </label>
                  <Input
                    value={newTicket.title}
                    onChange={(e) => setNewTicket({...newTicket, title: e.target.value})}
                    className="bg-slate-700 border-slate-600 text-white"
                    placeholder={newTicket.type === 'support' ? 'Brief description of your issue' : 'Feature or improvement request'}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Category
                    </label>
                    <Select value={newTicket.category} onValueChange={(value) => setNewTicket({...newTicket, category: value})}>
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-slate-600">
                        {newTicket.type === 'support' ? (
                          <>
                            <SelectItem value="Technical Support">Technical Support</SelectItem>
                            <SelectItem value="Billing">Billing</SelectItem>
                            <SelectItem value="Account">Account</SelectItem>
                            <SelectItem value="Authentication">Authentication</SelectItem>
                            <SelectItem value="Bug Report">Bug Report</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </>
                        ) : (
                          <>
                            <SelectItem value="UI/UX">UI/UX</SelectItem>
                            <SelectItem value="Development">Development</SelectItem>
                            <SelectItem value="Integration">Integration</SelectItem>
                            <SelectItem value="Performance">Performance</SelectItem>
                            <SelectItem value="Mobile">Mobile</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </>
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Priority
                    </label>
                    <Select value={newTicket.priority} onValueChange={(value: 'low' | 'medium' | 'high' | 'urgent') => setNewTicket({...newTicket, priority: value})}>
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-slate-600">
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                      </SelectContent>
                    </Select>
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
                    placeholder={newTicket.type === 'support' ? 
                      'Please provide detailed information about your issue...' : 
                      'Describe the feature or improvement you would like to see...'}
                  />
                </div>

                <Button onClick={createTicket} className="w-full bg-blue-600 hover:bg-blue-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Create {newTicket.type === 'support' ? 'Support Ticket' : 'Feature Request'}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Live Chat Tab */}
          <TabsContent value="chat" className="space-y-6">
            <Card className="bg-slate-800 border-slate-700 h-[600px]">
              <CardHeader className="pb-2">
                <CardTitle className="text-white flex items-center justify-between">
                  <div className="flex items-center">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Live Chat Support
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-500">
                      <div className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></div>
                      Online
                    </Badge>
                    {isAdmin && (
                      <Badge variant="outline" className="border-purple-400 text-purple-400">
                        <UserCog className="h-3 w-3 mr-1" />
                        Admin Mode
                      </Badge>
                    )}
                  </div>
                </CardTitle>
                <CardDescription>Chat with our support team in real-time</CardDescription>
              </CardHeader>
              <CardContent className="h-full flex flex-col">
                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2">
                  {chatMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-md flex items-start gap-3 ${
                          message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                        }`}
                      >
                        <Avatar className="w-8 h-8 flex-shrink-0">
                          <AvatarImage src={message.senderAvatar} alt={message.senderName} />
                          <AvatarFallback className="bg-slate-600 text-slate-200">
                            {message.senderName.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div
                          className={`px-4 py-3 rounded-lg ${
                            message.sender === 'user'
                              ? 'bg-blue-600 text-white'
                              : 'bg-slate-700 text-slate-100'
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-medium opacity-80">
                              {message.senderName}
                            </span>
                            {message.sender === 'admin' && (
                              <Badge variant="outline" className="border-green-400 text-green-400 text-xs px-1 py-0">
                                Admin
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm">{message.text}</p>
                          <span className="text-xs opacity-60 mt-1 block">
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div ref={chatEndRef} />
                </div>

                {/* Chat Input */}
                <div className="border-t border-slate-700 pt-4">
                  <div className="flex space-x-2 items-end">
                    <Avatar className="w-8 h-8 mb-2">
                      <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                      <AvatarFallback className="bg-slate-600 text-slate-200">
                        {currentUser.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <Input
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                        placeholder="Type your message..."
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>
                    <Button
                      onClick={sendChatMessage}
                      size="icon"
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 ml-10">
                    Average response time: 2-3 minutes • {isAdmin ? 'Responding as admin' : 'Connected as user'}
                  </p>
                </div>
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
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-5 w-5 text-indigo-400" />
                    <div>
                      <p className="text-white font-medium">Discord Community</p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open('https://discord.gg/codeforge', '_blank')}
                        className="border-indigo-400 text-indigo-400 hover:bg-indigo-900 mt-1"
                      >
                        Join Discord Server
                      </Button>
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
                    <h4 className="font-medium text-white">Support Topics</h4>
                    <ul className="space-y-1 text-sm text-slate-400">
                      <li>• Account and login issues</li>
                      <li>• Billing and subscription questions</li>
                      <li>• Course access problems</li>
                      <li>• Technical troubleshooting</li>
                      <li>• Platform bugs and errors</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-white">Feature Requests</h4>
                    <ul className="space-y-1 text-sm text-slate-400">
                      <li>• UI/UX improvements</li>
                      <li>• New course topics</li>
                      <li>• Mobile app features</li>
                      <li>• Integration requests</li>
                      <li>• Performance enhancements</li>
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
