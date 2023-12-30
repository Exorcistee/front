import './App.css'
import { Editor } from './components/editor/Editor'
import { FC } from 'react'

interface AppProps {}

export const App: FC<AppProps> = (_: AppProps): JSX.Element => {
  return (
    <Editor />
  )
}