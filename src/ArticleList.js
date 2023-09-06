import Article from "./Article";
import blogData from "./data/blog";

function ArticleList() {

  return (
    <main>
      {blogData.map((blogData) => (
        <Article
           key={blogData.id}
           title={blogData.title}
           date={blogData.date}
          preview={blogData.preview}
          minutes={blogData.minutes}
        />
      ))};
    </main>
  );
};

export default ArticleList;
