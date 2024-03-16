import { useRef } from "react";
// import { Web3Context } from "../../context/web3Context";
import { useWeb3Context } from "../../context/useWeb3Context";

const VoterRegistration = () => {
  //const { contractInstance } = useContext(Web3Context);
  const { contractInstance } = useWeb3Context()
  const nameRef = useRef();
  const ageRef = useRef();
  const genderRef = useRef();
  const handleVoterRegistration = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    const gender = genderRef.current.value;
    await contractInstance.voterRegister(name, age, gender);
    console.log("Voter Registration Successful!");
  };

  return (
    <>
      <form onSubmit={handleVoterRegistration}>
        <label>Voter Name:</label>
        <input type="text" placeholder="Candidate Name" ref={nameRef} />

        <label>Voter Age:</label>
        <input type="text" placeholder="Candidate Age" ref={ageRef} />

        <label>Voter Gender:</label>
        <input type="text" placeholder="Candidate Gender" ref={genderRef} />
        <br />
        <button type="submit">Voter Register</button>
      </form>
    </>
  );
};

export default VoterRegistration;
