import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'
import { store } from './reduxSlice/store'
import { Provider } from 'react-redux'

import { Header } from "./components/header/Header"
import { Content } from "./components/content/Content"


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <div className='text-green-400' >google </div> */}
    <Header />
    <Content />
  </Provider>
)
