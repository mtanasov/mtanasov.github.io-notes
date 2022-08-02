import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'

import { Header } from "./components/header/Header"
import { Content } from "./components/content/Content"

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <Content />

  </>
)
