import { Link } from 'react-router'
import * as styled from './Header.style'
function Header(){
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    return(
        <styled.Header>
            <styled.Logo>logo</styled.Logo>
            <styled.Nav>
                <Link to={'/contacts'}>Контакты</Link>
                <button>{!user?.login ? 'Войти' : 'Выйти'}</button>
            </styled.Nav>
        </styled.Header>
    )
}
export default Header