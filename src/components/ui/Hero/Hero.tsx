import { Link } from 'react-router';
import * as styled from './Hero.style'

type HeroProps = {
    openModal:() => void;
}
const Hero = ({openModal}:HeroProps) => {
    return(
        <styled.Container>
        <h1>Место для получения медицинской помощи</h1>
            <styled.Buttons>
                <button className='primary-button' onClick={openModal}>Войти</button>
                <Link to={'/contacts'}>
                    <button className='outline-button'>Контакты</button>
                </Link>
            </styled.Buttons>
        </styled.Container>
    )
}
export default Hero;