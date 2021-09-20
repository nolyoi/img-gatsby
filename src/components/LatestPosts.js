import React from "react"
import { Link, graphql } from "gatsby"
import { useStaticQuery } from "gatsby";


const LatestPosts = () => {
  const query = useStaticQuery(graphql`
    query latestPosts { allMarkdownRemark(filter: {frontmatter: {category: {eq: "blog"}}}
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

  return (
    <li>
      {latestPosts.map(post => {
        return <Link to={post.node.frontmatter.slug}>
          {post.node.frontmatter.title}
        </Link>;
      })}
    </li>
  );
}

export default LatestPosts;