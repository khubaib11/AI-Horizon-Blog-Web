import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import BlogCard from '@/components/ui/blog-card';
import { Button } from '@/components/ui/button';
import { articles } from '@/data/articles';

const Blog = () => {
  const [visibleArticles, setVisibleArticles] = useState(6);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags
  const allTags = Array.from(new Set(articles.flatMap(article => article.tags)));

  // Filter articles based on selected tag
  const filteredArticles = selectedTag 
    ? articles.filter(article => article.tags.includes(selectedTag))
    : articles;

  const displayedArticles = filteredArticles.slice(0, visibleArticles);
  const hasMoreArticles = visibleArticles < filteredArticles.length;

  const loadMoreArticles = () => {
    setVisibleArticles(prev => Math.min(prev + 6, filteredArticles.length));
  };

  const handleTagFilter = (tag: string | null) => {
    setSelectedTag(tag);
    setVisibleArticles(6);
  };

  return (
    <div className="page-enter pt-24">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            AI <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dive deep into the world of artificial intelligence with our comprehensive 
            coverage of breakthroughs, insights, and future trends.
          </p>
        </div>

        {/* Tag Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant={selectedTag === null ? "default" : "outline"}
              onClick={() => handleTagFilter(null)}
              className={`rounded-full ${
                selectedTag === null ? 'hover-glow-primary' : 'hover-glow-secondary'
              }`}
            >
              All Articles
            </Button>
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                onClick={() => handleTagFilter(tag)}
                className={`rounded-full ${
                  selectedTag === tag ? 'hover-glow-primary' : 'hover-glow-secondary'
                }`}
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedArticles.map((article) => (
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

        {/* Load More Button */}
        {hasMoreArticles && (
          <div className="text-center">
            <Button
              onClick={loadMoreArticles}
              variant="outline"
              size="lg"
              className="hover-glow-secondary"
            >
              Load More Articles
              <ChevronDown className="ml-2" size={18} />
            </Button>
          </div>
        )}

        {/* No Articles Message */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No articles found for the selected tag.
            </p>
          </div>
        )}

        {/* Stats Section */}
        <section className="mt-20 glass-card p-8 border-glow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-heading font-bold gradient-text mb-2">
                {articles.length}+
              </div>
              <p className="text-muted-foreground">Expert Articles</p>
            </div>
            <div>
              <div className="text-3xl font-heading font-bold gradient-text mb-2">
                50K+
              </div>
              <p className="text-muted-foreground">Monthly Readers</p>
            </div>
            <div>
              <div className="text-3xl font-heading font-bold gradient-text mb-2">
                24/7
              </div>
              <p className="text-muted-foreground">AI News Coverage</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;