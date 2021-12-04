import * as React from 'react'
import { render } from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import { Editor } from './pages/editor'
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
    body * {
      box-sizing: border-box;
    }
  `
  
  const Main = (
    <>
      <GlobalStyle />
      <Router>
        <Route exact path="/editor">
          <Editor />
        </Route>
        <Route exact path="/history">
          <h1>History</h1>
        </Route>
        <Redirect to="/editor" path="*" />
      </Router>
    </>
  )

//Main変数の値をId appに適用する render = 追加
render(Main, document.getElementById('app'))
