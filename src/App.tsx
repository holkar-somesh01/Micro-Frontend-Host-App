import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.scss'
import AdminApp from 'admin/App'
import OrderApp from 'order/App'
import AuthApp from 'auth/App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import reduxStore from './redux/store'
import Layout from './pages/Layout'


const App = () => (
  <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='admin/*' element={<AdminApp />} />
        <Route path='/order/*' element={<OrderApp />} />
        <Route path='/auth/*' element={<AuthApp />} />
      </Route>
    </Routes>
  </>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<React.StrictMode>
  <BrowserRouter>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </BrowserRouter>
</React.StrictMode >)