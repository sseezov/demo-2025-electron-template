import { useEffect } from 'react'
import electronLogo from './assets/electron.svg'

const ipcr = window.electron.ipcRenderer

function App() {
  useEffect(() => {
    (async (data="test") => await ipcr.invoke('sendSignal', data))()
  }, [])


  return (
    <>
      <img alt="logo" className="logo" src={electronLogo} />
      <h1>Hello, world!</h1>
    </>
  )
}

export default App

