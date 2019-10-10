import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const FormContact = styled.section`
    background: white;
    border-radius: 8px;
    box-shadow: 0px 10px 15px -1px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.06);
    padding: 32px;
    transform: translateY(-20%);

    ${MEDIA.TABLET`
        transform: translateY(-20%);
    `};
    ${MEDIA.PHONE`
        transform: translateY(-18%);
        padding: 16px;
    `};


    h3 {
        font-weight: bold;
        margin-bottom: 16px;
    }

    form {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 16px;
        align-items: flex-end;

        ${MEDIA.TABLET`
            grid-template-columns: 1fr 1fr;
        `};
        
        ${MEDIA.PHONE`
            grid-template-columns: 1fr;
            grid-gap: 8px;
        `};
        
        div,
        label, 
        input[type="submit"] {
            grid-column: span 2;
        }

        div:nth-child(2),
        div:nth-child(3) {
            grid-column: span 1;
        }
    }

    textarea {
        min-height: 100px;
    }
`