import { useState,useEffect } from "react";
import { useWeb3Context } from "../../context/useWeb3Context";
const DispalyVoter = () => {
    const {contractInstance}=useWeb3Context()
    const [voterList,setVoterList]=useState("")
    useEffect(()=>{
      const displayVoterList = async()=>{
        const voterArray = await contractInstance.voterList();
        const voterString = voterArray.toString()
        setVoterList(voterString)
      }
      contractInstance && displayVoterList()
    },[contractInstance])
    return ( <div>
        {voterList}
    </div>);
}
 
export default DispalyVoter;