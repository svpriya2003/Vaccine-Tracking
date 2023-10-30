const { ethers } = require("ethers");

const abi = [
 {
  "inputs": [],
  "stateMutability": "nonpayable",
  "type": "constructor"
 },
 {
  "anonymous": false,
  "inputs": [
   {
    "indexed": true,
    "internalType": "uint256",
    "name": "vaccineId",
    "type": "uint256"
   },
   {
    "indexed": false,
    "internalType": "string",
    "name": "vaccineName",
    "type": "string"
   },
   {
    "indexed": false,
    "internalType": "string",
    "name": "manufacturer",
    "type": "string"
   },
   {
    "indexed": false,
    "internalType": "uint256",
    "name": "manufacturingDate",
    "type": "uint256"
   },
   {
    "indexed": false,
    "internalType": "string",
    "name": "batchNumber",
    "type": "string"
   },
   {
    "indexed": false,
    "internalType": "address",
    "name": "customerAddress",
    "type": "address"
   }
  ],
  "name": "VaccineAdded",
  "type": "event"
 },
 {
  "inputs": [
   {
    "internalType": "uint256",
    "name": "vaccineId",
    "type": "uint256"
   },
   {
    "internalType": "string",
    "name": "_vaccineName",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "_manufacturer",
    "type": "string"
   },
   {
    "internalType": "uint256",
    "name": "_manufacturingDate",
    "type": "uint256"
   },
   {
    "internalType": "string",
    "name": "_batchNumber",
    "type": "string"
   },
   {
    "internalType": "uint256",
    "name": "_qty",
    "type": "uint256"
   },
   {
    "internalType": "address",
    "name": "_customerAddress",
    "type": "address"
   }
  ],
  "name": "addVaccine",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "uint256",
    "name": "_vaccineId",
    "type": "uint256"
   }
  ],
  "name": "getVaccineDetails",
  "outputs": [
   {
    "internalType": "string",
    "name": "",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "",
    "type": "string"
   },
   {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
   },
   {
    "internalType": "string",
    "name": "",
    "type": "string"
   },
   {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
   },
   {
    "internalType": "address",
    "name": "",
    "type": "address"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [],
  "name": "owner",
  "outputs": [
   {
    "internalType": "address",
    "name": "",
    "type": "address"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [],
  "name": "vaccineCount",
  "outputs": [
   {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
   }
  ],
  "name": "vaccines",
  "outputs": [
   {
    "internalType": "string",
    "name": "vaccineName",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "manufacturer",
    "type": "string"
   },
   {
    "internalType": "uint256",
    "name": "manufacturingDate",
    "type": "uint256"
   },
   {
    "internalType": "string",
    "name": "batchNumber",
    "type": "string"
   },
   {
    "internalType": "uint256",
    "name": "quantity",
    "type": "uint256"
   },
   {
    "internalType": "address",
    "name": "customerAddress",
    "type": "address"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 }
]

if (!window.ethereum) {
 alert('Meta Mask Not Found')
 window.open("https://metamask.io/download/")
}

export const provider = new ethers.providers.Web3Provider(window.ethereum);
export const signer = provider.getSigner();
export const address = "0x99998E8D54A66CA6e31f1c6321C9280668759672"

export const contract = new ethers.Contract(address, abi, signer)
