import React from "react";

export default ({ data }) => {
  const post = data.contentfulBlogPost;
  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content.childMarkdownRemark.html }} />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
  		content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
