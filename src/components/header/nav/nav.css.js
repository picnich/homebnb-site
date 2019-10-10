import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    align-items: center;

    li {
      text-transform: uppercase;
      font-size: 1.3rem;

      & + li {
        margin-left: 2rem;
      }
    }
    a {
      color: #F1F2F6;
    }
    .main {
      background: #F1F2F6;
      padding: 8px 16px;
      border-radius: 4px;
      a {
        color: #0B2A66;
      }
    }
  }
`;
