import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Text = styled.span`
  display: block;
  
  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return 'bold';
      default:
        return '500';
    }
  }};
  
  color: #0B2A66;

  font-size: ${({ as, size }) => () => {
    switch (as) {
      case 'h1':
        return '4.2rem';
      case 'h2':
        return '3.2rem';
      case 'h3':
        return '2.4rem';
      case 'h4':
        return '1.8rem';
      case 'h5':
        return '1rem';
      case 'h6':
        return '0.875rem';
      default:
        return '2rem';
    }
  }};
  line-height: 1.2;

  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '2.6rem';
        default:
          return '2rem';
      }
    }};
  `};
`;
