import { useState,useEffect } from "react";
import { useWeb3Context } from "../../context/useWeb3Context";
const DispalyCandidate = () => {
    console.log("DispalyCandidate")
    const {contractInstance}=useWeb3Context()
    const [candidateList,setCandidateList]=useState("")
    useEffect(()=>{
      const displayCandidatesList = async()=>{
        const candidateArray = await contractInstance.candidateList();
        const candidateString = candidateArray.toString()
        setCandidateList(candidateString)
      }
      contractInstance && displayCandidatesList()
    },[contractInstance])
    return ( <div>
        {candidateList}
    </div>);
}
 
export default DispalyCandidate;