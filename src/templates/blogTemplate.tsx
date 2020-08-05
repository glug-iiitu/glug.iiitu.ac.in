import {graphql} from 'gatsby';
import Img, {FluidObject} from 'gatsby-image';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import React, {ReactElement} from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

interface Props {
  data: {
    mdx: {
      body: string;
      timeToRead: string;
      frontmatter: {
        title: string;
        date: string;
        author: string;
        tags: [string];
        banner: {
          childImageSharp: {
            fluid: FluidObject | FluidObject[];
          };
        };
      };
    };
  };
}

const BlogPost = styled.main`
  .blog-post {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    margin-top: 0;
    margin-left: 15%;
  }
  h1,
  h2 {
    color: #f38e18;
  }

  .info {
    text-transform: capitalize;
    text-align: left;
    margin: 12px 0;
    padding: 12px;
  }

  .featured-image {
    height: 35vh;
  }

  @media (max-width: 550px) {
    .blog-post {
      width: 85vw;
      margin: auto;
    }

    .featured-image {
      display: none;
    }
  }
`;

export default function Template(props: Props): ReactElement {
  const data = props.data;
  const {frontmatter, body, timeToRead} = data.mdx;
  console.log(frontmatter.tags);
  return (
    <Layout>
      <BlogPost>
        <div className="blog-post">
          <div className="info">
            {/* eslint-disable */}
            <Img
              fluid={frontmatter.banner.childImageSharp.fluid}
              alt="feautured-image"
              className="featured-image"
            />
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
            <span>
              <small> by - {frontmatter.author || 'Anonymous'}, </small>
            </span>
            <span>
              <small>{timeToRead} min read</small>
            </span>
            <br />
            <small>
              Tags -{' '}
              {frontmatter.tags.map((t, i) => (
                <span key={i}>&nbsp;{t}, &nbsp;</span>
              ))}
            </small>
          </div>
          <MDXRenderer>{body}</MDXRenderer>
          {/* <div className="blog-post-content" dangerouslySetInnerHTML={{__html: html}} /> */}
        </div>
      </BlogPost>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
      body
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        author
        tags
        banner {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
