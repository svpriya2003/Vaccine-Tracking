import React, { useState } from "react";
import { Button, Container, Row, Col } from 'react-bootstrap';
import { contract } from "./connector";

function Home() {
   const [Id, setId] = useState("");
   const [DrugName, setDrugName] = useState("");
   const [Manufacturer, setManufacturer] = useState("");
   const [date, setDate] = useState("");
   const [TranId, setTranId] = useState("");
   const [Owner, setOwner] = useState("");
   const [BookId, setBookId] = useState("");
   const [BookDet, setBookDet] = useState("");
   const [Batch, setBatch] = useState("");
   const [Qty, setQty] = useState("");
   const [Cus, setCus] = useState("");
   const [Wallet, setWallet] = useState("");


 
   const handleId = (e) => {
      setId(e.target.value)
   } 

   const handleVaccineName = (e) => {
      setDrugName(e.target.value)
   } 

   const handleManufacturer = (e) => {
      setManufacturer(e.target.value)
   } 

   const handleDate = (e) => {
      setDate(e.target.value)
   }

   const handleBatch = (e) => {
      setBatch(e.target.value)
   }

   const handleQty = (e) => {
      setQty(e.target.value)
   }

   const handleCusAddr = (e) => {
      setCus(e.target.value)
   }


   const handleAddVaccine = async () => {
      try {
         let tx = await contract.addVaccine(Id.toString(), DrugName, Manufacturer, date, Batch, Qty, Cus)
         let wait = await tx.wait()
         alert(wait.transactionHash)
         console.log(wait);
      } catch (error) {
         alert(error)
      }
   }

   const handleDrugId = (e) => {
      setTranId(e.target.value)
   }

   const handleNewOwner = (e) => {
      setOwner(e.target.value)
   } 

   const handleTransfer = async () => {
      try {
         let tx = await contract.transferDrugOwnership(TranId.toString(), Owner)
         let wait = await tx.wait()
         console.log(wait);
         alert(wait.transactionHash)
      } catch (error) {
         alert(error)   
      }
   }

   const handleVaccineDetailsId = (e) => {
      setBookId(e.target.value)
   }

   const handleDrugDetails = async () => {
      try {
         let tx = await contract.getVaccineDetails(BookId.toString())
         
         let arr = []
         tx.map(e => {
            arr.push(e)
         })
         
         console.log(tx);
         setBookDet(arr)
      } catch (error) {
         alert(error)
         console.log(error);
      }
   }

   const handleWallet = async () => {
      if (!window.ethereum) {
         return alert('please install metamask');
      }

      const addr = await window.ethereum.request({
         method: 'eth_requestAccounts',
      });

      setWallet(addr[0])

   }

 return (
  <div>
   <h1 style={{ marginTop: "30px", marginBottom: "80px" }}>Vaccination</h1>
       {!Wallet ?

          <Button onClick={handleWallet} style={{ marginTop: "30px", marginBottom: "50px" }}>Connect Wallet </Button>
          :
          <p style={{ width: "250px", height: "50px", margin: "auto", marginBottom: "50px", border: '2px solid #2096f3' }}>{Wallet.slice(0, 6)}....{Wallet.slice(-6)}</p>
       }
   <Container>
    <Row>
     <Col style={{marginRight:"100px"}}>
      <div>

      
       <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleId} type="number" placeholder="Enter vaccine Id" value={Id} /> <br />
     
         <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleVaccineName} type="string" placeholder="Enter vaccine Name" value={DrugName} /> <br />
     
         <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleManufacturer} type="string" placeholder="Enter vaccine manufacturer" value={Manufacturer} /><br />
      
         <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleDate} type="number" placeholder="Enter vaccine manufacturing date" value={date} /><br />

                   <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleBatch} type="string" placeholder="Enter Batch No" value={Batch} /><br />

                   <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleQty} type="number" placeholder="Enter Quantity" value={Qty} /><br />

                   <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleCusAddr} type="string" placeholder="Enter Customer Address" value={Cus} /><br />


       <Button onClick={handleAddVaccine} style={{ marginTop: "10px" }} variant="primary">Add vaccine</Button>
      </div>
     </Col>
             <Col >
                <div style={{ margin: "auto" }}>
                   <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleVaccineDetailsId} type="number" placeholder="Enter Drug Id" value={BookId} /><br />

                   <Button onClick={handleDrugDetails} style={{ marginTop: "10px" }} variant="primary">Get vaccine Details</Button>
                   {BookDet ? BookDet?.map(e => {
                      return <p>{e.toString()}</p>
                   }) : <p></p>}
                </div>
             </Col>   
   </Row>    
   </Container>

  </div>
 )
}

export default Home;
