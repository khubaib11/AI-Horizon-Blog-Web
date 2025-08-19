import { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import BlogCard from '@/components/ui/blog-card';
import { articles } from '@/data/articles';
import heroImage from '@/assets/hero-ai-brain.jpg';

const Home = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const featuredArticle = articles.find(article => article.featured);
  const recentArticles = articles.filter(article => !article.featured).slice(0, 6);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="page-enter">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">AI Horizons</span>
            <br />
            <span className="text-foreground">Exploring the Future of</span>
            <br />
            <span className="text-primary glow-pulse">Intelligence</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Stay ahead of the curve with cutting-edge insights into artificial intelligence, 
            machine learning breakthroughs, and the technologies shaping tomorrow.
          </p>
          
          <Link to="/blog">
            <Button 
              size="lg" 
              className="font-semibold text-lg px-8 py-4 hover-glow-primary border-glow"
            >
              Read Articles
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Featured Story</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the latest breakthroughs shaping the future of artificial intelligence
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <BlogCard
              id={featuredArticle.id}
              title={featuredArticle.title}
              excerpt={featuredArticle.excerpt}
              image={featuredArticle.image}
              author={featuredArticle.author}
              date={featuredArticle.date}
              featured={true}
            />
          </div>
        </section>
      )}

      {/* Recent Posts Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Latest <span className="gradient-text">AI Insights</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From breakthrough research to real-world applications, explore the stories 
            defining the AI revolution
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentArticles.map((article) => (
            <BlogCard
              key={article.id}
              id={article.id}
              title={article.title}
              excerpt={article.excerpt}
              image={article.image}
              author={article.author}
              date={article.date}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/blog">
            <Button variant="outline" size="lg" className="hover-glow-secondary">
              View All Articles
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="glass-card p-8 md:p-12 border-glow">
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center glow-primary">
                <Mail size={28} className="text-background" />
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Stay <span className="gradient-text">Informed</span>
              </h3>
              <p className="text-muted-foreground">
                Get the latest AI insights delivered to your inbox. No spam, just cutting-edge content.
              </p>
            </div>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 glass-card border-card-border focus:border-primary glow-pulse"
                required
              />
              <Button 
                type="submit" 
                size="lg"
                className="hover-glow-primary border-glow whitespace-nowrap"
                disabled={isSubscribed}
              >
                {isSubscribed ? 'Subscribed!' : 'Subscribe'}
              </Button>
            </form>
            
            {isSubscribed && (
              <p className="text-primary mt-4 animate-fade-in">
                Thanks for subscribing! Welcome to the future of AI.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;