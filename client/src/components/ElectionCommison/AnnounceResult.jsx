import { useWeb3Context } from "../../context/useWeb3Context";
const AnnounceResult = () => {
    const {web3State}=useWeb3Context();
    const {constractInstance}=web3State;

    const announceResult = async()=>{
        await constractInstance.result();
        alert("Result Announced")
    }
    return ( <button onClick={announceResult}>Announce Result</button> );
}
 
export default AnnounceResult;