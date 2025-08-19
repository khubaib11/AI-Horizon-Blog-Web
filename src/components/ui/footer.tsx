import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    { path: '/blog', label: 'Blog' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: Twitter, href: 'https://x.com/Khankhubaib089', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/khubaib-munawar-khan/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/khubaib11', label: 'GitHub' },
    
  ];

  return (
    <footer className="glass-card border-t border-card-border mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="font-heading text-2xl font-bold gradient-text inline-block mb-4">
              AI Horizons
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Exploring the future of artificial intelligence and its impact on our world. 
              Stay informed with the latest developments and insights.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Navigation</h3>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                   target="_blank"
                    rel="noopener noreferrer"
                  className="p-2 rounded-lg glass-card border border-card-border hover-glow-primary transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-card-border mt-8 pt-8 text-center text-muted-foreground space-y-2">
          <p>&copy; 2024 AI Horizons. All rights reserved.</p>
          <p className="text-sm">
            Developed by{" "}
            <a 
              href="mailto:khankhubaib089@gmail.com" 
              className="text-primary hover:text-primary-glow transition-colors"
            >
              Khubaib Khan
            </a>
            {" "}• Software Developer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;