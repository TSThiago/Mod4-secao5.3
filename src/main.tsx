import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Pages/RegisterPage'
import FilterPage from './Pages/FilterPage'
import './index.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/filter' element={<FilterPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
