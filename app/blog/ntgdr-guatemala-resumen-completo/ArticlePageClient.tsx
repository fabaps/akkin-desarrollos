import type React from "react"
import { User } from "lucide-react"

interface ArticlePageClientProps {
  title: string
  date: string
  content: string
}

const ArticlePageClient: React.FC<ArticlePageClientProps> = ({ title, date, content }) => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-3">
          <User className="h-5 w-5 text-oxford-300" />
          <span className="text-oxford-300">Por Equipo AKKIN</span>
        </div>
        <span className="text-oxford-300">{date}</span>
      </div>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export default ArticlePageClient
