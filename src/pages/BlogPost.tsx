import { useParams, Link } from 'react-router-dom';
import { CalendarDays, User, Clock, ArrowLeft, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlogCard from '@/components/ui/blog-card';
import { articles } from '@/data/articles';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="page-enter pt-24">
        <div className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="mr-2" size={18} />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Get related articles (same tags, excluding current article)
  const relatedArticles = articles
    .filter(a => a.id !== id && a.tags.some(tag => article.tags.includes(tag)))
    .slice(0, 3);

  return (
    <div className="page-enter pt-24">
      {/* Article Header */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="mr-2" size={18} />
            Back to Blog
          </Link>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays size={16} />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-primary/10 text-primary border border-primary/20"
              >
                <Tag size={12} />
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            {article.title}
          </h1>

          {/* Featured Image */}
          <div className="relative mb-12 rounded-2xl overflow-hidden glass-card border-glow">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div 
              className="text-foreground leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ 
                __html: article.content.replace(/\n\n/g, '</p><p class="mb-6">').replace(/\n/g, '<br>').replace(/^/, '<p class="mb-6">') + '</p>'
              }}
            />
          </div>

          {/* Author Bio */}
          <div className="mt-16 p-8 glass-card border-glow">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-background font-bold text-xl">
                {article.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold mb-2">{article.author}</h3>
                <p className="text-muted-foreground">
                  Expert AI researcher and technology journalist covering the latest developments 
                  in artificial intelligence and machine learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-center mb-12">
              Related <span className="gradient-text">Articles</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <BlogCard
                  key={relatedArticle.id}
                  id={relatedArticle.id}
                  title={relatedArticle.title}
                  excerpt={relatedArticle.excerpt}
                  image={relatedArticle.image}
                  author={relatedArticle.author}
                  date={relatedArticle.date}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;