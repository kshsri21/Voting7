
import Web3StateProvider from './context/Web3StateProvider'
import Child from "./Child"
import './App.css'
function App() {
  return (
    <div> 
      <Web3StateProvider>
        <Child/>
      </Web3StateProvider> 
    </div>
  )
}

export default App;
