import React from "react";
import PageHeading from "../components/page-heading";
import ArticleTeaser from "../components/article-teaser";

const BlogPage = props => {
  // console.log(props);
  const CreateBlogArticlesList = props => {
    const text = props.data.data.text;
    const articles = text.map((element, i) => (
      <ArticleTeaser
        id={element.id}
        key={i}
        heading={element.heading}
        subheading={element.subheading}
        image={element.image}
      />
    ));
    return <div className="article-wrapper">{articles}</div>;
  };
  const blogHead = {
    heading: props.data.heading,
    subheading: props.data.subheading,
    image: props.data.image
  };

  return (
    <div className="blog-page-wrapper">
      <PageHeading
        heading={blogHead.heading}
        subheading={blogHead.subheading}
      />
      <CreateBlogArticlesList data={props} />;
    </div>
  );
};
export default BlogPage;
