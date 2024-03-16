import { useWeb3Context } from "../../context/useWeb3Context";
const EmergencyDeclare = () => {
    const {web3State}=useWeb3Context();
    const {constractInstance}=web3State;

    const emergencyDeclared = async()=>{
        await constractInstance.emergency();
        alert("Emergency Declared")
    }
    return ( <button onClick={emergencyDeclared}>Emergency</button> );
}
 
export default EmergencyDeclare;