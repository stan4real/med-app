import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router"
import Layout from './components/ui/Layout/layout/Layout.tsx'
import MainPage from './components/pages/main/MainPage.tsx'
import ContactsPage from './components/pages/contacts/ContactsPage.tsx'
import UserPage from './components/pages/user/UserPage.tsx'
import ProtectedRoute from './components/ProtectedRoute.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<MainPage/>}/>
          <Route path='/contacts' element={<ContactsPage/>}/>
          <Route path='/user' element={
            <ProtectedRoute>
              <UserPage/>
            </ProtectedRoute>
            }/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
