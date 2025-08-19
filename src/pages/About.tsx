import { Brain, Target, Users, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Brain,
      title: "Innovation Focus",
      description: "We track the most cutting-edge developments in AI research and technology, bringing you insights from the forefront of innovation."
    },
    {
      icon: Target,
      title: "Expert Analysis",
      description: "Our team of AI researchers and industry experts provide deep analysis and context to help you understand complex developments."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "We foster a community of AI enthusiasts, researchers, and practitioners who share knowledge and drive progress together."
    },
    {
      icon: Zap,
      title: "Future Ready",
      description: "Stay ahead of the curve with forward-looking insights that prepare you for the AI-driven future of work and society."
    }
  ];


  return (
    <div className="page-enter pt-24">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">AI Horizons</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We are dedicated to tracking AI's evolution and exploring its transformative impact 
            on society, industry, and human potential. Our mission is to make the complex world 
            of artificial intelligence accessible, understandable, and actionable.
          </p>
        </section>

        {/* Mission Statement */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 border-glow text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center glow-primary">
              <Brain size={40} className="text-background" />
            </div>
            <h2 className="font-heading text-3xl font-bold mb-6">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To demystify artificial intelligence and provide authoritative insights that empower 
              individuals, organizations, and society to navigate the AI revolution with confidence 
              and purpose. We believe that understanding AI is crucial for shaping a future where 
              technology serves humanity's greatest aspirations.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            What Drives <span className="gradient-text">Us</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="glass-card p-6 text-center hover-glow-primary transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center glow-accent">
                  <value.icon size={28} className="text-background" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        

        {/* Vision */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
              Looking <span className="gradient-text">Forward</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="glass-card p-6">
                <div className="text-3xl font-heading font-bold gradient-text mb-2">2024</div>
                <p className="text-muted-foreground">AI breakthrough coverage and analysis</p>
              </div>
              <div className="glass-card p-6">
                <div className="text-3xl font-heading font-bold gradient-text mb-2">50K+</div>
                <p className="text-muted-foreground">Readers staying informed monthly</p>
              </div>
              <div className="glass-card p-6">
                <div className="text-3xl font-heading font-bold gradient-text mb-2">24/7</div>
                <p className="text-muted-foreground">Continuous AI development monitoring</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="glass-card p-8 md:p-12 border-glow max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Join Our <span className="gradient-text">Journey</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Have insights to share or questions about AI? We would love to hear from you.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-primary to-secondary text-background px-8 py-3 rounded-lg font-semibold hover-glow-primary transition-all"
            >
              Get In Touch
            </a>
          </div>
        </section>

        {/* Developer Credit */}
        <section className="text-center mt-12">
          <div className="glass-card p-6 max-w-lg mx-auto">
            <h4 className="font-heading text-lg font-semibold mb-2">
              Website <span className="gradient-text">Developer</span>
            </h4>
            <p className="text-muted-foreground mb-3">
              This cutting-edge platform was crafted by
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-background font-bold">
                KK
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Khubaib Khan</p>
                <a 
                  href="mailto:khankhubaib089@gmail.com"
                  className="text-sm text-primary hover:text-primary-glow transition-colors"
                >
                  khankhubaib089@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;