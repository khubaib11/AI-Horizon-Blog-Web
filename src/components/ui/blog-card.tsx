import { Link } from 'react-router-dom';
import { CalendarDays, User } from 'lucide-react';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  featured?: boolean;
}

const BlogCard = ({ id, title, excerpt, image, author, date, featured = false }: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <article className={`blog-card glass-card overflow-hidden group ${
        featured ? 'md:col-span-2 lg:col-span-3' : ''
      }`}>
        <div className={`relative ${featured ? 'h-80' : 'h-48'} overflow-hidden`}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <User size={14} />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarDays size={14} />
              <span>{date}</span>
            </div>
          </div>
          
          <h3 className={`font-heading font-semibold mb-3 group-hover:gradient-text transition-all duration-300 ${
            featured ? 'text-2xl lg:text-3xl' : 'text-lg'
          }`}>
            {title}
          </h3>
          
          <p className={`text-muted-foreground leading-relaxed ${
            featured ? 'text-base' : 'text-sm'
          }`}>
            {excerpt}
          </p>
          
          <div className="mt-4 text-primary font-medium group-hover:text-primary-glow transition-colors">
            Read More →
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;