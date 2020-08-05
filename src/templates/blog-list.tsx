import {graphql, Link} from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import Pagination from '../components/Pagination';
import Button from '../components/shared/Button';
import {PostBox} from '../pages/wiki-test';

interface Props {
  data: {
    allMdx: {
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

function BlogIndex(props: any) {
  const {data}: Props = props;
  const {currentPage, numPages} = props.pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/wiki' : `/wiki/${currentPage - 1}`;
  const nextPage = `/wiki/${currentPage + 1}`;
  const posts = data.allMdx.edges.map((edge, i) => {
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
      <>
        {posts}
        <Pagination
          nextPage={nextPage}
          prevPage={prevPage}
          isFirst={isFirst}
          isLast={isLast}
          currentPage={currentPage}
          numPages={numPages}
        />
      </>
    </Layout>
  );
}

export default BlogIndex;

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    allMdx(sort: {fields: [frontmatter___date], order: DESC}, limit: $limit, skip: $skip) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            slug
          }
        }
      }
    }
  }
`;
