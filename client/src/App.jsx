
import Web3StateProvider from './context/Web3StateProvider'
import './App.css'
import CandidateRegistration from './pages/CandidateRegistration/CandidateRegistration';
import VoterRegistration from './pages/VoterRegistration/VoterRegistration';
import DispalyCandidate from './components/displayCandidate/DisplayCandidate';
import DispalyVoter from './components/displayVoter/DisplayVoter';
function App() {
  return (
    <div> 
      <Web3StateProvider>
       {/* <CandidateRegistration/> */}
       {/* <VoterRegistration/> */}
       {/* <DispalyCandidate/> */}
       <DispalyVoter/>
      </Web3StateProvider> 
    </div>
  )
}

export default App;
