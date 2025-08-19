import { useState } from 'react';
import { Mail, MessageSquare, User, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<null | boolean>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        {
          from_name: formData.name,
          from_email: formData.email,
          from_message: formData.message,
          to_name: "Khubaib Khan",
          to_email: "khankhubaib089@gmail.com",
        },
        import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
      );

      setLoading(false);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSuccess(null), 5000);
    } catch (error) {
      setLoading(false);
      setSuccess(false);
      console.log("❌ Error in sending email:", error);

      setTimeout(() => setSuccess(null), 5000);
    }
  };

  return (
    <div className="page-enter pt-24">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about AI developments? Want to contribute insights? 
            Or just want to discuss the future of artificial intelligence? We'd love to hear from you.
          </p>
        </section>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card p-8 border-glow">
            <div className="mb-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center glow-primary">
                <Mail size={28} className="text-background" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-center mb-2">
                Send us a Message
              </h2>
              <p className="text-muted-foreground text-center">
                We'll get back to you within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <User className="absolute left-3 top-3 text-muted-foreground" size={20} />
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="pl-10 glass-card border-card-border focus:border-primary glow-pulse"
                  required
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-3 text-muted-foreground" size={20} />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="pl-10 glass-card border-card-border focus:border-primary glow-pulse"
                  required
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-muted-foreground" size={20} />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="pl-10 resize-none glass-card border-card-border focus:border-primary glow-pulse"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full hover-glow-primary border-glow"
                disabled={loading}
              >
                {loading ? "Sending..." : (
                  <>
                    Send Message
                    <Send className="ml-2" size={18} />
                  </>
                )}
              </Button>

              {success === true && (
                <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20 animate-fade-in">
                  <p className="text-primary font-medium">
                    ✅ Thank you for your message! We'll be in touch soon.
                  </p>
                </div>
              )}
              {success === false && (
                <div className="text-center p-4 rounded-lg bg-red-100 border border-red-300 animate-fade-in">
                  <p className="text-red-600 font-medium">
                    ❌ Something went wrong. Please try again later.
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Right side (unchanged) */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="glass-card p-6">
              <h3 className="font-heading text-xl font-semibold mb-4">
                Other Ways to <span className="gradient-text">Connect</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">khankhubaib089@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <MessageSquare size={18} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">Response Time</p>
                    <p className="text-sm text-muted-foreground">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="glass-card p-6">
              <h3 className="font-heading text-xl font-semibold mb-4">
                Frequently <span className="gradient-text">Asked</span>
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Can I contribute articles?</h4>
                  <p className="text-sm text-muted-foreground">
                    Yes! We welcome expert contributions. Send us your pitch and credentials.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Do you cover specific AI topics?</h4>
                  <p className="text-sm text-muted-foreground">
                    We cover all aspects of AI including research, applications, ethics, and policy.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">How often do you publish?</h4>
                  <p className="text-sm text-muted-foreground">
                    We publish new content daily and feature in-depth analysis weekly.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Reminder */}
            <div className="glass-card p-6 text-center border-glow">
              <h3 className="font-heading text-xl font-semibold mb-3">
                Join the <span className="gradient-text">Revolution</span>
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Be part of the conversation shaping AI's future. Every question, 
                insight, and perspective matters.
              </p>
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center glow-accent">
                <MessageSquare size={24} className="text-background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
