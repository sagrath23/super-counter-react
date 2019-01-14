import React from 'react'
import { CounterContainer } from './components/counter'
import { HookedCounter } from './components/hooked-counter'

import logo from './logo.svg'
import './App.css'

const App = ({incrementAction, decrementAction, incrementAsyncAction, decrementAsyncAction, count}) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to Super Counter</h1>
    </header>
    <CounterContainer />
    <HookedCounter />
  </div>
)

export default App
