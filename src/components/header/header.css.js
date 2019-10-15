import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;
  position: absolute;
  width: 100%;
  box-sizing: border-box;

  ${MEDIA.PHONE`
    padding: 2rem;
  `};

  h4 {
    font-family: "Roboto";
    position: relative;
    font-weight: bold;

    @media screen and (max-width: 500px) {
      display: none;
    }
  }

  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: opacity 0.125s ease-out;

    &:hover {
      color: inherit;
      opacity: 0.76;
    }
  }

  .iconContainer {
    background: #234573;
    border-radius: 100px;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }

  svg {
    width: 20px;
  }
`;
