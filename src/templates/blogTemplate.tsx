import {graphql} from 'gatsby';
import Img from 'gatsby-image';
import React, {ReactElement} from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

interface Props {
  data: {
    markdownRemark: {
      html: string;
      timeToRead: string;
      frontmatter: {
        title: string;
        date: string;
        author: string;
        tags: [string];
        banner: {
          childImageSharp: {
            fluid: {
              base64: string;
              traced: string;
              srcWebp: string;
              srcSetWebp: string;
              originalImg: string;
              originalName: string;
            };
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
    align-items: flex-start;
    max-width: 70vw;
    margin-left: 15vw;
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

  @media (max-width: 450px) {
    .blog-post {
      margin-left: 10vw;
    }
  }
`;

export default function Template(props: Props): ReactElement {
  const data = props.data;
  const {frontmatter, html, timeToRead} = data.markdownRemark;
  console.log(frontmatter.tags);
  return (
    <Layout>
      <BlogPost>
        <div className="blog-post">
          <div className="info">
            <Img
              fluid={frontmatter.banner.childImageSharp.fluid}
              alt="feautured-image"
              style={{
                height: '40vh',
              }}
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
          <div className="blog-post-content" dangerouslySetInnerHTML={{__html: html}} />
        </div>
      </BlogPost>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
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
