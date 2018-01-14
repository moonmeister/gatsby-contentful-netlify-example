import React from "react"
import g from "glamorous"
import Link from "gatsby-link"

import { rhythm } from "../utils/typography"

export default ({ data }) => {
  return (
    <div>
      <g.H1 display={"inline-block"} borderBottom={"1px solid"}>
        Amazing Pandas Eating Things
      </g.H1>
      <h4>
        {data.allContentfulBlogPost.totalCount} Posts
      </h4>
      {data.allContentfulBlogPost.edges.map(({ node }) =>
        <div key={node.id}>
          <Link
            to={node.slug}
            css={{ textDecoration: `none`, color: `inherit` }}
          >
            <g.H3 marginBottom={rhythm(1 / 4)}>
              {node.title}{" "}
              <g.Span color="#BBB">— {node.date}</g.Span>
            </g.H3>
            <p>
              {node.content.childMarkdownRemark.excerpt}
            </p>
          </Link>
        </div>
      )}
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allContentfulBlogPost(sort: { fields: [date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          title
          date(formatString: "DD MMMM, YYYY")
          slug
          content {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`
