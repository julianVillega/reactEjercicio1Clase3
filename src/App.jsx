import { useState } from 'react'
import './App.css'

import ProvidersTable from "./components/providersTable";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <ProvidersTable></ProvidersTable>
    </>
  )
}

export default App
