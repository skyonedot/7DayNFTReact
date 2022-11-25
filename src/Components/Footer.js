import styled from 'styled-components'
import thanks from '../Images/thanks.png';

const Image = styled.img`
  width: 94px;
  height: 92px;
  margin: 0 40px 20px;
`

const Div = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`

export default function Footer() {
    return (
        <Div>
            <Image src={thanks} alt="Thanks"></Image>
        </Div>

    )

}