import ArticleForm from "@/components/ArticleComponents/ArticleForm";
import ArticleView from "@/components/ArticleComponents/ArticleView";

export default function ArticlePage() {
  return (
    <div className="flex flex-col justify-between gap-10 min-h-screen px-5 py-10 h-full">
      <div className="h-[calc(100%-(330px))]">
        <ArticleView />
      </div>
      <ArticleForm />
    </div>
  );
}
