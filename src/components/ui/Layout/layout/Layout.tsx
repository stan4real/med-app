import Header from "../header/Header"
import { Outlet } from 'react-router'
import * as styled from './Layout.style'


const Layout = () => {
  return (
    <>
      <Header/>
      <styled.Page>
        <Outlet/>
      </styled.Page>
    </>
  )
}

export default Layout