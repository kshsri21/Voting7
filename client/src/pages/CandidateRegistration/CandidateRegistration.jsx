// import { Web3Context } from "../../context/web3Context";
// import { useContext } from "react";
import { useRef } from "react";
import { useWeb3Context } from "../../context/useWeb3Context";
const CandidateRegistration = () => {
    //const {contractInstance} = useContext(Web3Context)
    const {contractInstance} = useWeb3Context();
    const nameRef = useRef();
    const genderRef = useRef();
    const ageRef = useRef();
    const partyRef = useRef();

    const handleCandidateRegistration = async(e)=>{
        e.preventDefault()
        const name = nameRef.current.value;
        const gender = genderRef.current.value;
        const age = ageRef.current.value;
        const party = partyRef.current.value;
        await contractInstance.candidateRegister(name, party,age,gender);
        console.log("Transaction Successful!")
    }
    return ( <div>
        <form onSubmit={handleCandidateRegistration}>
            <label>Candidate Name:</label>
            <input type="text" placeholder="Candidate Name" ref={nameRef}></input>
            <label>Candidate Age:</label>
            <input type="text" placeholder="Candidate Age" ref={ageRef}></input>
            <label>Candidate Gender:</label>
            <input type="text" placeholder="Candidate Gender" ref={genderRef}></input>
            <label>Candidate Party:</label>
            <input type="text" placeholder="Candidate Party" ref={partyRef}></input>
             <br></br>
            <button type="submit">Register</button>
        </form>
        <br></br>
    </div>);
}
 
export default CandidateRegistration;