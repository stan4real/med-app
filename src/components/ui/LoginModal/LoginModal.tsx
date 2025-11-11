import { useState } from "react"
import * as styled from './LoginModal.style'
import usersData from '../../../data/users.json';
import { useNavigate } from 'react-router';

type LoginModal = {
    onClose:()=>void
}

const LoginModal = ({onClose}:LoginModal) => {
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

    const handleLogin = () => {
        setError('')

        if(password.length < 8 ){
             setError('Пароль должен содержать минимум 8 символов');
             return
        };

        const foundUser = usersData.find(
            (user) => user.login === login && user.password === password
        );

        if(!foundUser){
            setError('Неверный логин или пароль')
            return
        };

        localStorage.setItem('user', JSON.stringify(foundUser))
        onClose()
        navigate('/user');
    }
    return(
        <styled.ModalContainer onClick={onClose}>
            <styled.ModalContent onClick={(e)=>e.stopPropagation()}>
                <h2>Авторизация</h2>
                <styled.Input
                type="text"
                placeholder="Логин"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                />
                <styled.Input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                {error && <styled.Error>{error}</styled.Error>}
                <styled.ButtonsContainer>
                    <button className="outline-button" onClick={handleLogin}>Войти</button>
                    <button className="primary-button" onClick={onClose}>Закрыть</button>
                </styled.ButtonsContainer>
            </styled.ModalContent>
        </styled.ModalContainer>
    )
}

export default LoginModal