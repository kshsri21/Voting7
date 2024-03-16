import AnnounceResult from "../../components/ElectionCommison/AnnounceResult";
import DisplayWinner from "../../components/ElectionCommison/DisplayWinner";
import VotingStartForm from "../../components/ElectionCommison/VotingStartForm";
import VotingStatus from "../../components/ElectionCommison/VotingStatus";
import EmergencyDeclare from "../../components/ElectionCommison/EmergencyDeclare"
const ElectionCommision = () => {
    return ( <>
     <VotingStatus/>
     <br></br>
     <DisplayWinner/>
     <br></br>
     <VotingStartForm/> 
     <br></br>
     <AnnounceResult/>
     <br></br>
     <EmergencyDeclare/>
    </>);
}
 
export default ElectionCommision;