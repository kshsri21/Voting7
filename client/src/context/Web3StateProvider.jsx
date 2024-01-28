import { useState,useEffect } from "react";
import { getWeb3State } from "../utils/web3States";
import { handleAccountChange } from "../utils/handleAccountChange";
import { handleChainChange } from "../utils/handleChainChange";
import { Web3Context } from "./web3Context";
const Web3StateProvider = ({children}) => {
    const [web3State,setWeb3State]=useState({
        contractInstance:null,
        chainId:null,
        selectedAccount:null
    })
    const handleWallet= async()=>{
      try {
        const {contractInstance,chainId,selectedAccount}= await getWeb3State();
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
      <Web3Context.Provider value={web3State}>
        {children}
      </Web3Context.Provider>
      <button onClick={handleWallet}>Connect Wallet</button>
    </div> 
    );
}
 
export default Web3StateProvider;