import { useContext } from "react";
import { Web3Context } from "./context/web3Context";
const Child = () => {
    const obj = useContext(Web3Context)
    console.log(obj)
    return <h1>Child</h1>;
}
 
export default Child;