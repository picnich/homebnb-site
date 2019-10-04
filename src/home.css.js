import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const MainTitle = styled.section`
    max-width: 650px;
    h5 {
        font-weight: bold;
        font-size: 12px;
        letter-spacing: 1px;
        opacity: 0.4;
        margin-bottom: 8px;
        color: white;
        
        ${MEDIA.PHONE`
            font-size: 10px;
        `};
    }
    h1 {
        text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
        line-height: 1.16;
        color: white;
    
        ${MEDIA.TABLET`
            font-size: 40px;
        `};
        ${MEDIA.PHONE`
            font-size: 30px;
        `};
    }

    p {
        color: rgba(255, 255, 255, 0.76);
        margin-top: 16px;
    }

`
export const IntroSection = styled.section`
    background: linear-gradient(289deg, #101c2d 0%, rgb(35, 69, 115) 100%);
    padding-top: 25vh;
    padding-bottom: 12vh;
    background-image: url(${props => props.bgImg});
    background-size: cover;
    background-position: center top;

    ${MEDIA.TABLET`
      min-height: 30vh;  

      display: flex;
      align-items: flex-end;
    `}
    

`

export const FormSection = styled.section`
    background: white;
    border-radius: 8px;
    box-shadow: 0px 10px 15px -1px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.06);
    padding: 32px;
    transform: translateY(-50%);

    ${MEDIA.TABLET`
        transform: translateY(-30%);
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
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 16px;
        align-items: flex-end;

        ${MEDIA.TABLET`
            grid-template-columns: 1fr 1fr;
        `};
        
        ${MEDIA.PHONE`
            grid-template-columns: 1fr;
            grid-gap: 8px;
        `};
    }
`


export const Benefits = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
    list-style: none;
    padding: 0;
    margin-top: -80px;

    ${MEDIA.PHONE`
        grid-template-columns: 1fr;
    `};


    .icon {
        background: #234573;
        height: 50px;
        width: 50px;
        border-radius: 8px;
        margin-bottom: 8px;
        padding: 12px;
        box-sizing: border-box;
    }

    h4 {
        font-size: 15px;
        font-weight: bold;
        color: #234573;
        margin-bottom: 4px;
    }
    p {
        font-size: 14px;
        color: #4A5568;
        opacity: 0.8;
    }
`;

export const Services = styled.section`
    padding-top: 80px;
    /* padding-bottom: 80px; */
    ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 16px;

        ${MEDIA.TABLET`
            grid-template-columns: 1fr;
        `};


        li {
            background: #F1F2F6;
            box-shadow: 0px 4px 6px -2px rgba(0, 0, 0, 0.1);
            padding: 24px;

            .icon {
                background: #E57A7A;
                height: 50px;
                width: 50px;
                border-radius: 8px;
                margin-bottom: 12px;
                padding: 12px;
                box-sizing: border-box;
            }
            
            h4 {
                font-weight: bold;
                margin-bottom: 12px;
            }
            p {
                text-align: left;
                margin-bottom: 0;
            }
        }
    }
    p {
        font-size: 14px;
        color: #4A5568;
        line-height: 1.7;
    }
    h2 + p {
        font-size: 18px;
    max-width: 700px;
    }
    h2 {
        margin-bottom: 8px;
    }
    h2, p {
        text-align: center;
        max-width: 900px;
        margin-left: auto;
        margin-right: auto;
    }
`

export const Keypoints = styled.section`
    padding-top: 80px;
    padding-bottom: 80px;

    h2 {
        text-align: center;
    }
    ul {
        column-count: 2;
        box-shadow: 0px 4px 6px -2px rgba(0, 0, 0, 0.1);
        border-radius: 16px;
        padding: 32px;

        ${MEDIA.PHONE`
            column-count: 1;
        `};

    }
    li {
        /* margin-left: 12px; */
        padding-left: 40px;
        position: relative;
        font-size: 16px;
        color: #4A5568;
        margin-bottom: 24px;
    }

    li:before {
        width: 32px;
        height: 32px;
        background: #2B5A89;
        content: '✓';
        color: white;
        position: absolute;
        left: 0;
        border-radius: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`

export const Offering = styled.section`
    padding-top: 60px;
    padding-bottom: 60px;

    background: #F1F2F6;
    h2 {
        text-align: center;
    }
    section {
        background: white;
        border-radius: 16px;
        box-shadow: 0px 4px 6px -2px rgba(0, 0, 0, 0.1);
        padding: 32px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 24px;

        ${MEDIA.TABLET`
            grid-template-columns: 1fr;
        `};


        .price {
            background: #0b2a66;
            border-radius: 16px;
            padding: 24px;
            display: flex;
            flex-direction: column;
            justify-content:center;
            /* align-items: center; */
            box-shadow: 0px 10px 15px -1px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.1);

            p {
                color: white;
                font-weight: lighter;
            }
            p:first-child {
                font-size: 50px;
                font-weight: bold;
                margin-bottom: 0;
            }
            span {
                color: #FF6666;
                font-weight: bold;
            }


        }
    }
    ul {
        column-count: 2;
        /* box-shadow: 0px 4px 6px -2px rgba(0, 0, 0, 0.1);
        border-radius: 16px;
        padding: 32px; */
        ${MEDIA.TABLET`
            column-count: 1;
        `}

    }
    li {
        /* margin-left: 12px; */
        padding-left: 40px;
        position: relative;
        font-size: 16px;
        color: #4A5568;
        margin-bottom: 24px;
    }
    li:before {
        width: 32px;
        height: 32px;
        background: #2B5A89;
        content: '✓';
        color: white;
        position: absolute;
        left: 0;
        border-radius: 100px;
        display: flex;
        justify-content: center;
        align-items: center;

    }
`

export const CtaContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    margin-top: 32px;
    margin-bottom: 32px;

    ${MEDIA.TABLET`
        grid-template-columns: 1fr;
    `};


    div {
        background-color: white;
        padding: 24px;
        border-radius: 16px;
        box-shadow: 0px 4px 6px -2px rgba(0, 0, 0, 0.1); 
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h5 {
            text-transform: uppercase;
            font-weight: bold;
            letter-spacing: 0.5px;
            font-size: 13px;
            color: #FF6666;
            margin-bottom: 16px;
        }
    }
    h2 {
        margin-bottom: 16px;
    }
    input[type="submit"] {
        margin-top: 24px;
    }
    div:last-child {
        background: #0B2A66;

        h2 {
            color: white;
        }
        p {
            color: white;
            font-weight: lighter;
            opacity: 0.8;
        }
    }
    form {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 16px;
        align-items: flex-end;

        input[type="submit"] {
            grid-column: span 3;
        }

        ${MEDIA.PHONE`
            grid-template-columns: 1fr;

            * {
                grid-column: span 3;
            }
        `};
        
    }


   
`