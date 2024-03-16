import { useEffect,useState } from "react";
import { useWeb3Context } from "../../context/useWeb3Context";

const VotingStatus = () => {
    const {web3State}=useWeb3Context();
    const {contractInstance}=web3State;
    const [status,setStatus]=useState("Not Started")

    useEffect(()=>{
        const showVotingStatus = async()=>{
            const status = await contractInstance.votingStatus();   
            setStatus(status)
        }
        contractInstance && showVotingStatus();
    },[contractInstance])

    return ( 
    <>
      <p>Voting Status:{status}</p>
    </> );
}
 
export default VotingStatus;