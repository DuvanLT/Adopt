import './App.css'
import AppRoutes from './routes/routes'
//import PetProvider from './context/petContext'
import { BrowserRouter } from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>
      {/*<PetProvider>*/}
        <AppRoutes />
      {/*</PetProvider>*/}
    </BrowserRouter>
  )
}

export default App
