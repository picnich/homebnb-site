import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  box-shadow: inset 0px 1px 0px 0px rgba(113, 128, 150, 0.2);

  ${MEDIA.PHONE`
    padding: 2rem;
  `};

  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }

  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      text-transform: uppercase;
      font-size: 1.3rem;

      & + li {
        margin-left: 2rem;
      }
    }
  }
  p {
    margin: 0;
  }
`;
