import * as React from 'react'
import { render } from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import { Editor } from './pages/editor'

const GlobalStyle = createGlobalStyle`
    body * {
      box-sizing: border-box;
    }
  `
  
  const Main = (
    <>
      <GlobalStyle />
      <Editor />
    </>
  )

//Main変数の値をId appに適用する render = 追加
render(Main, document.getElementById('app'))
