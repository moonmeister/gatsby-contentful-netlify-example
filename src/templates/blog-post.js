import React from "react";
import Layout from "../components/layout"
import { graphql } from 'gatsby'

export default ({ data }) => {
  const post = data.contentfulBlogPost;
  return (
    <Layout>
      <div>
       <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content.childMarkdownRemark.html }} />
      </div>
    </Layout>
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
