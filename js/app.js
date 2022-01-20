function connectToMetMask() {
    ethereum.enable().then(result => {
        accounts = result[0];
        console.log(result);
    })
}


$(document).ready(function () {
    if (typeof web3 !== 'undefined') {
        web3Provider = web3.currentProvider;
        web3 = new Web3(web3.currentProvider);
        console.log(web3)
    } else {
        // set the provider you want from Web3.providers
        window.web3 = new Web3("http://localhost:8545");
    }

    const contractAddress = "0xF082101C8CCba2fAa42654Ed27b328C9f3A75dBA";
    const contractAbi = [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "name": "certificateDetails",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "courseName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "cadndidateName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "grade",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "date",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_certificateID",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_courseName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_cadndidateName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_grade",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_date",
                    "type": "string"
                }
            ],
            "name": "newCertificate",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ];

    myContract = new web3.eth.Contract(contractAbi, contractAddress);
    console.log(myContract);
})