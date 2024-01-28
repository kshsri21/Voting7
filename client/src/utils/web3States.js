import {ethers}  from "ethers";
import abi from "../constants/abi.json"
//0xCCC15B5CCAF92d34f3A99c2270920D3Fcf42c290
//0xe247F53E1201D5573a2dFA6600a6daE9753BB16e - erc20
export const getWeb3State = async()=>{
  let [contractInstance,selectedAccount,chainId] = [null,null,null,null];
  try {
    if(!window.ethereum){
        throw new Error("Metamask is not installed");
      }
      const accounts = await window.ethereum.request({
        method:'eth_requestAccounts'
      })
      let chainIdHex = await window.ethereum.request({
        method:'eth_chainId'
      })
      chainId=parseInt(chainIdHex,16);
      selectedAccount = accounts[0];
      //read operation
      const provider = new ethers.BrowserProvider(window.ethereum);
      //write operation
      const signer = await provider.getSigner();
      const contractAddress = "0xCCC15B5CCAF92d34f3A99c2270920D3Fcf42c290";
      contractInstance = new ethers.Contract(contractAddress,abi,signer);
      return {contractInstance,chainId,selectedAccount};
  } catch (error) {
    console.error("Not able to get the web3states",error.message);
    throw error;
  }
  
}