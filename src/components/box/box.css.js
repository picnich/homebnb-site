import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  padding: 2rem 4rem;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

  ${MEDIA.PHONE`
    padding: 1rem 2rem;
  `};
`;
