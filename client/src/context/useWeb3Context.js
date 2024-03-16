import { Web3Context } from "./web3Context";
import { useContext } from "react";

export const useWeb3Context=() =>{
   return useContext(Web3Context)
}