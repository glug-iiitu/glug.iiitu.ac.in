import {graphql, Link} from 'gatsby';
import React, {ReactElement} from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Button from '../components/shared/Button';

interface Props {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            frontmatter: {
              title: string;
              slug: string;
            };
            excerpt: string;
          };
        },
      ];
    };
  };
}

const PostBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 70vw;
  margin: 24px auto;

  a {
    text-decoration: none;
    color: #f38e18;
  }

  button {
    background: #f38e18;
    padding: 6px 12px;
    color: white;
    border: none;
    outline: none;
  }

  button:hover {
    background: #f88807;
  }

  @media (min-width: 750px) {
    width: 750px;
  }
`;

export default function wiki({data}: Props): ReactElement {
  const {edges} = data.allMarkdownRemark;
  const posts = edges.map((edge, i) => {
    const {slug, title} = edge.node.frontmatter;
    const {excerpt} = edge.node;
    return (
      <PostBox key={i}>
        <Link to={`/wiki/${slug}/`}>
          <h2>{title}</h2>
        </Link>
        <p>{excerpt}</p>
        <Link to={`/wiki/${slug}/`}>
          <Button>Read More ...</Button>
        </Link>
        <p>
          <span>
            <small> by - Anonymous, </small>
          </span>
          <span>
            <small>2 min read</small>
          </span>
          <br />
          <small>Tags - we, rd</small>
        </p>
      </PostBox>
    );
  });
  return (
    <Layout>
      <>{posts}</>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`;
