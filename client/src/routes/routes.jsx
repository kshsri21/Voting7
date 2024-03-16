import {createBrowserRouter} from "react-router-dom";
import Wallet from "../pages/Wallet/Wallet";
import CandidateRegistration from "../pages/Candidate/CandidateRegistration";
import VoterRegistration from "../pages/Voter/VoterRegistration";
import DispalyCandidate from "../pages/Candidate/DisplayCandidate";
import DispalyVoter from "../pages/Voter/DisplayVoter";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import ElectionCommision from "../pages/ElectionCommision/ElectionCommision";

export const routes = createBrowserRouter([
    {path:"/",element:<Wallet/>},
    {path:"/candidate-registration",element:(
        <div>
             <NavigationBar/>
            <CandidateRegistration/>
        </div>
    
    )},
    {path:"/voter-registration",element:(
            <div>
                <NavigationBar/>
                <VoterRegistration/>
            </div>
   
    )},
    // {path:"/election-commision",element:<ElectionCommision/>},
    {path:"/candidate-list",element:(
            <div>
                <NavigationBar/>
                <DispalyCandidate/>
            </div>
    
    )},
    {path:"/voter-list",element:(
            <div>
                <NavigationBar/>
                <DispalyVoter/>
            </div>
    )},
    {path:"/election-commision",element:(
        <div>
            <NavigationBar/>
            <ElectionCommision/>
        </div>
)}
])