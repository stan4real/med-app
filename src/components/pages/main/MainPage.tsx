import { useState } from "react";
import Cards from "../../ui/Cards/Cards"
import Hero from "../../ui/Hero/Hero"
import { useNavigate } from "react-router";

import LoginModal from "../../ui/LoginModal/LoginModal";

const MainPage = () => {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    const user = localStorage.getItem('user');
    
    if (user) {
      // Если пользователь уже авторизован, перенаправляем его на страницу /user
      navigate('/user');
    } else {
      setIsModalOpen(true);
    }
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Hero openModal={openModal}/>
      <Cards/>
      {isModalOpen && <LoginModal onClose={closeModal} />}
    </>
  )
}

export default MainPage