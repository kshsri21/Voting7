
import { RouterProvider } from 'react-router-dom';
import Web3StateProvider from './context/Web3StateProvider'
import { routes } from './routes/routes';
import './App.css'
function App() {
  return (
    <div> 
      <Web3StateProvider>
        <RouterProvider router={routes}></RouterProvider>
      </Web3StateProvider> 
    </div>
  )
}

export default App;
