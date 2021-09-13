import React from "react"
import { Link, graphql } from "gatsby"
import { useStaticQuery } from "gatsby";


const LatestPosts = () => {
  const query = useStaticQuery(graphql`
    query latestPosts { allMarkdownRemark(
    filter: {frontmatter: {author: {eq: null}}}
    sort: {order: ASC, fields: frontmatter___published}
  ) {
    edges {
      node {
        id
        frontmatter {
          title
          slug
        }
      }
    }
  }}`);

  let latestPosts = [];
  query.allMarkdownRemark.edges.forEach(post => {
    latestPosts.push(post);
  });

  console.log(latestPosts);

  return (
    <li>
      {latestPosts.map(post => {
        console.log(post.node.frontmatter.title);
        return <Link to={post.node.frontmatter.slug}>
          {post.node.frontmatter.title}
        </Link>;
      })}
    </li>
  );
}

export default LatestPosts;