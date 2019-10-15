import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    align-items: center;

    li {
      /* text-transform: uppercase; */
      font-size: 1.3rem;

      & + li {
        margin-left: 3rem;
      }
    }
    a {
      color: #234573;

      :hover {
        color: inherit;
        opacity: 0.6;
      }
    }
    .main {
      background: #F1F2F6;
      padding: 8px 16px;
      border-radius: 4px;
      /* a {
        color: #9395d1;
      } */
    }
  }
`;
