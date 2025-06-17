import './App.css'
import AppRoutes from './routes/routes'
import PetProvider from './context/petContext'
function App() {

  return (
    <PetProvider>
      <AppRoutes />
    </PetProvider>
  )
}

export default App
