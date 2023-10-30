// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Vaccination {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    struct Vaccine {
        string vaccineName;
        string manufacturer;
        uint256 manufacturingDate;
        string batchNumber;
        uint256 quantity;
        address customerAddress;
    }

    mapping(uint256 => Vaccine) public vaccines;
    uint256 public vaccineCount;

    event VaccineAdded(uint256 indexed vaccineId, string vaccineName, string manufacturer, uint256 manufacturingDate, string batchNumber, address customerAddress);

    function addVaccine(uint256 vaccineId, string memory _vaccineName, string memory _manufacturer, uint256 _manufacturingDate, string memory _batchNumber,uint256 _qty, address _customerAddress) external onlyOwner {
        

        vaccines[vaccineId] = Vaccine(_vaccineName, _manufacturer, _manufacturingDate, _batchNumber, _qty, _customerAddress);
        vaccineCount++;

        emit VaccineAdded(vaccineId, _vaccineName, _manufacturer, _manufacturingDate, _batchNumber, _customerAddress);
    }

    function getVaccineDetails(uint256 _vaccineId) external view returns (string memory, string memory, uint256, string memory,uint256, address) {

        Vaccine memory vaccine = vaccines[_vaccineId];
        return (vaccine.vaccineName, vaccine.manufacturer, vaccine.manufacturingDate, vaccine.batchNumber, vaccine.quantity, vaccine.customerAddress);
    }
}