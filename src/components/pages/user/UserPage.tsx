import * as styled from './UserPage.style'
import { Link, useNavigate } from 'react-router'

const UserPage = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (!user?.login) {
        navigate('/');
    }

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
        
        window.location.reload();
    };
    
    return ( 
        <styled.Container>
            <styled.Heading>Привет, {user.name}</styled.Heading>
            <styled.Buttons>
                <button onClick={handleLogout} className='primary-button'>Выйти из аккаунта</button>
                <Link to={'/contacts'}>
                    <button className='outline-button'>Перейти в контакты</button>
                </Link>
            </styled.Buttons>
        </styled.Container>
     );
}
 
export default UserPage;