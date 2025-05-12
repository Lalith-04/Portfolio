import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Github } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "lalithkishore@gmail.com",
      link: "mailto:lalithkishore@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 9876543210",
      link: "tel:+919876543210",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Bengaluru, Karnataka, India",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/lalithkishore",
      label: "LinkedIn",
      bgColor: "bg-[#0077B5]",
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/lalithkishore",
      label: "GitHub",
      bgColor: "bg-[#333]",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com/lalithkishore",
      label: "Twitter",
      bgColor: "bg-[#1DA1F2]",
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 bg-[#0B1121]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-[#0EA5E9] text-sm font-medium tracking-wider mb-1">GET IN TOUCH</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Me</h2>
          <div className="h-1 w-16 bg-[#0EA5E9] mx-auto"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-[#0F172A] p-6 rounded-xl flex items-start space-x-4 hover:shadow-[0_0_30px_rgba(14,165,233,0.1)] transition-all duration-300"
              >
                <div className="p-3 bg-[#1E293B] rounded-xl text-[#0EA5E9]">
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">{info.title}</h3>
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="text-gray-400 hover:text-[#0EA5E9] transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-400">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="bg-[#0F172A] p-6 rounded-xl">
              <h3 className="text-white font-semibold text-lg mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.bgColor} hover:opacity-90 text-white p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(14,165,233,0.2)]`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#0F172A] p-8 rounded-xl">
            <h3 className="text-white font-semibold text-xl mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2 text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#1E293B] text-white border border-gray-700 focus:outline-none focus:border-[#0EA5E9] transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2 text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#1E293B] text-white border border-gray-700 focus:outline-none focus:border-[#0EA5E9] transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-400 mb-2 text-sm">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#1E293B] text-white border border-gray-700 focus:outline-none focus:border-[#0EA5E9] transition-colors"
                  placeholder="How can I help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-[#1E293B] text-white border border-gray-700 focus:outline-none focus:border-[#0EA5E9] transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
