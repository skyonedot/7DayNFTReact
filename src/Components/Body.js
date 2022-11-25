import girl from '../Images/girlAndFlower.png';

import styled from 'styled-components';

const ImageGirl = styled.img`
    width: 300px;
    height: 506px;
    border-radius: 22px;
    margin: 40px 106px 20px;
`


const Font = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 60px;
    /* or 117% */
    text-align: center;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    margin: 0 0 0 0;
`

const Div = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`

export default function Introduction() {
    return (
        <Div>
            <ImageGirl src={girl} alt="Girl And Flower"></ImageGirl>
            <Font>
                HELLO, WHO WE ARE
                <br />
                Crypto Beliver. Came From China
                <br />
                We started on xx, xx and finished selling on xx, xx
                <br />
                A total of 1024 units were sold at a price of 0.01 ETH
            </Font>
        </Div>
    )
}