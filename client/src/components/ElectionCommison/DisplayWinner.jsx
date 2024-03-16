import { useEffect,useState } from "react";
import { useWeb3Context } from "../../context/useWeb3Context";
const DisplayWinner = () => {
    const {web3State}=useWeb3Context();
    const {contractInstance}=web3State;
    const [winner,setWinner]=useState("Not declared yet")

    useEffect(()=>{
        const displayWinner = async()=>{
            const electionWinner = await contractInstance.winner();
            if(electionWinner!=="0x0000000000000000000000000000000000000000"){
                setWinner(electionWinner);
            }  
        }
        contractInstance && displayWinner();
    },[contractInstance])

    return ( 
    <>
      <p>Winner:{winner}</p>
    </> );
}
 
export default DisplayWinner;