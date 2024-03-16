import { useWeb3Context } from "../../context/useWeb3Context";
import { useRef } from "react";
const VotingStartForm = () => {
    const {web3State}=useWeb3Context();
    const {contractInstance}=web3State;
    const startRef = useRef();
    const endRef=useRef()
    const handleVotingTime = async(e)=>{
      e.preventDefault();
      const startTime = startRef.current.value;
      const endTime = endRef.current.value;
      await contractInstance.voteTime(startTime,endTime)
      alert("Voting Started")
    }
    return (
    <>
      <form onSubmit={handleVotingTime}>
        <label htmlFor="start" >Start Time</label>
        <input type="text" ref={startRef}></input>
        <label htmlFor="end">End Time</label>
        <input type="text" ref={endRef}></input>
        <button>Voting Start</button>
      </form>
    </>);
}
 
export default VotingStartForm;