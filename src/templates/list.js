import React from 'react'
import { Link, graphql } from 'gatsby'
import PostList from '../components/post-list'

class ListTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const childPosts = this.props.pageContext.children

    return (
        <section className="section page-content">
          <div class="container article-header has-text-centered">
            <h1 class="title is-1">{post.frontmatter.title}</h1>
            <hr />
          </div>
          <main className="container content-container">
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <hr />
            <PostList posts={childPosts} />
          </main>
        </section>
    )
  }
}

export default ListTemplate

export const pageQuery = graphql`
  query ListPageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`