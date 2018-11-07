import React from 'react';

export default function Template (props) {
  const {data} = props
  return (
    <div>
      <h1>
      { data.markdownRemark.frontmatter.title }
      </h1>
      <h2>
        { data.markdownRemark.excerpt }
      </h2>
      <div
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />
    </div>
  )
}

export const postQuery = graphql `
  query BlogPostByQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } } ) {
      excerpt,
      html,
      frontmatter {
        path,
        title
      }
    }
  }
`