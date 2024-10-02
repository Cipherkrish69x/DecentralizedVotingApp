# Decentralized Voting Application by alla krishna vamsi reddy

## Overview

This is a decentralized voting application built on the Ethereum blockchain. It utilizes smart contracts written in Solidity, a React frontend for user interaction, and Web3.js for blockchain integration. The application allows users to cast votes for candidates in a secure and transparent manner.

## Features

- **Blockchain-based voting**: Ensures the integrity and transparency of the voting process.
- **Smart Contracts**: Developed using Solidity, deployed on the Ethereum test network (Rinkeby/Ropsten).
- **Frontend**: Built with React, providing a user-friendly interface.
- **Real-time updates**: The application fetches and displays the current vote counts for each candidate.

## Technologies Used

- **Blockchain**: Ethereum
- **Smart Contract Language**: Solidity
- **Frontend Framework**: React
- **Blockchain Interaction**: Web3.js
- **Development Tools**: Truffle, Ganache, npm
- **Testing Framework**: Mocha, Chai

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16.x or 20.x)
- [npm](https://www.npmjs.com/)
- [Truffle](https://www.trufflesuite.com/truffle) (`npm install -g truffle`)
- [Ganache](https://www.trufflesuite.com/ganache) (CLI or GUI)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Cipherkrish69x/DecentralizedVotingApp.git
   cd DecentralizedVotingApp
Install the backend dependencies:

bash
Copy code
cd voting-frontend
npm install
Install Truffle dependencies:

bash
Copy code
cd ../
npm install
Running the Application
Start Ganache to create a local Ethereum blockchain:

bash
Copy code
ganache-cli
Deploy the smart contracts to the local blockchain:

bash
Copy code
truffle migrate --network development
Start the React application:

bash
Copy code
cd voting-frontend
npm start
Open your browser and go to http://localhost:3000 to access the application.

Usage
Users can select a candidate and cast their vote.
The application displays the list of candidates along with their current vote counts.
Voting results are updated in real time.
Example Output
When you run the application, you will see an interface like this:

Initial Output:

plaintext
Copy code
Voting DApp
Your Account: 0x123456789abcdef123456789abcdef123456789a

Candidates:
- Alice - 0 votes [Vote]
- Bob - 0 votes [Vote]
Voting Functionality
When a user clicks the "Vote" button for a candidate, the application should:

Send a transaction to the Ethereum blockchain to record the vote.
Update the vote count in the UI.
Expected Behavior After Voting:

plaintext
Copy code
Voting DApp
Your Account: 0x123456789abcdef123456789abcdef123456789a

Candidates:
- Alice - 1 votes [Vote]
- Bob - 0 votes [Vote]
Error Handling
If any errors occur, such as trying to vote more than once, the application should display a message indicating the issue.

Example Error Message:

plaintext
Copy code
Error: You have already voted.
Testing
To run unit tests for the smart contracts, navigate to the root directory and execute:

bash
Copy code
truffle test
Example Testing Output
When you run the tests, you will see output like this:

plaintext
Copy code
Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.

Starting the tests...
======================
    ✓ initializes with two candidates (X ms)
    ✓ allows a voter to cast a vote (X ms)

  2 passing (X ms)
