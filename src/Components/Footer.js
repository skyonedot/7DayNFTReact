import styled from 'styled-components'
import thanks from '../Images/thanks.png';
import twitterSVG from '../Images/twitter.svg';
import openseaSVG from '../Images/opensea.svg';

const Image = styled.img`
  width: 94px;
  height: 92px;
//   margin: 0 40px 20px;
//   margin-right: 10px;
  // make it close the right
    margin-left: auto;
`

const Div = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`

const ImageLogo = styled.img`
width: 32px;
height: 30px;
margin: 0 60px;
`

export default function Footer() {
    return (
        <Div>
            <ImageLogo src={twitterSVG} alt="twitter" />
            <ImageLogo src={openseaSVG} alt="opensea" />
            <Image src={thanks} alt="Thanks"/>
        </Div>

    )

}