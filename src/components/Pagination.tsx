import {Link} from 'gatsby';
import React, {ReactElement} from 'react';
import styled from 'styled-components';

interface Props {
  isFirst: boolean;
  isLast: boolean;
  prevPage: string;
  nextPage: string;
  numPages: number;
  currentPage: number;
}

const PaginatinWrapper = styled.div`
  color: black;
  width: 500px;
  margin: 0 auto;

  & a {
    color: grey;
  }

  & ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding: 0;
  }
`;

export default function Pagination({
  isFirst,
  isLast,
  prevPage,
  nextPage,
  numPages,
  currentPage,
}: Props): ReactElement {
  return (
    <PaginatinWrapper>
      <ul>
        {!isFirst && (
          <Link to={prevPage} rel="prev">
            ← Previous Page
          </Link>
        )}
        {Array.from({length: numPages}, (_, i) => (
          <li
            key={`pagination-number${i + 1}`}
            style={{
              margin: 0,
            }}
          >
            <Link
              to={`/wiki/${i === 0 ? '' : i + 1}`}
              style={{
                padding: 8,
                textDecoration: 'none',
                color: i + 1 === currentPage ? '#ffffff' : '',
                background: i + 1 === currentPage ? '#f38e18' : '',
              }}
            >
              {i + 1}
            </Link>
          </li>
        ))}
        {!isLast && (
          <Link to={nextPage} rel="next">
            Next Page →
          </Link>
        )}
      </ul>
    </PaginatinWrapper>
  );
}
