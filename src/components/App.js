import React from "react";
import blogData from "../data/blog";
import Header from "../Header";
import About from "../About";
import ArticleList from "../ArticleList";
import Article from "../Article";


console.log(blogData);

function App() {

  // let samplePosts = [
  //   {
  //     title: 'The WET Codebase',
  //     date: 'July 13, 2020',
  //     preview: 'Come waste your time with me.'
  //   },
  //   {
  //     title: 'Goodbye,clean code',
  //     date: 'January 11, 2020',
  //     preview: 'Let clean code guide you.Then let it go.'
  //   },
  //   {
  //     title: 'My Decade in Review.',
  //     date: 'January 1,2020',
  //     preview: 'A personal reflection.'
  //   }
  // ];

  return (
    <div className="App">
    <Header name={blogData.name} />
    <About image={blogData.image} about={blogData.about}/>
    <ArticleList data={blogData} />
    <Article title={blogData.title} date={blogData.date} preview={blogData.preview} minutes={blogData.minutes}/>
     
    </div>
  );
};

export default App;
