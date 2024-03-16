import { useState,useEffect } from "react";
import { getWeb3State } from "../utils/web3States";
import { handleAccountChange } from "../utils/handleAccountChange";
import { handleChainChange } from "../utils/handleChainChange";
import { Web3Context } from "./web3Context";
const Web3StateProvider = ({children}) => {
    console.log("Web3StateProvider")
    const [web3State,setWeb3State]=useState({
        contractInstance:null,
        chainId:null,
        selectedAccount:null
    })
    const handleWallet= async()=>{
      try {
        const {contractInstance,chainId,selectedAccount}= await getWeb3State();
        console.log("Connected")
        setWeb3State({contractInstance,chainId,selectedAccount})
      } catch (error) {
        console.error("Wallet connection failed",error.message)
      }
      
    }
    useEffect(()=>{
        window.ethereum.on('accountsChanged',()=>handleAccountChange(setWeb3State))
        window.ethereum.on('chainChanged',()=>handleChainChange(setWeb3State))
        
        return()=>{
            window.ethereum.removeListener('accountsChanged',()=>handleAccountChange(setWeb3State))
            window.ethereum.removeListener('accountsChanged',()=>handleAccountChange(setWeb3State))
        }
    },[])
    return ( 
    <div>
      <Web3Context.Provider value={{web3State,handleWallet}}>
        {children}
      </Web3Context.Provider>
      
    </div> 
    );
}
 
export default Web3StateProvider;