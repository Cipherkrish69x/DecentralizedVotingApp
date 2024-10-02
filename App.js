import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import Voting from './contracts/Voting.json';

function App() {
  const [account, setAccount] = useState('');
  const [candidates, setCandidates] = useState([]);
  const [votingContract, setVotingContract] = useState(null);

  useEffect(() => {
    loadBlockchainData();
  }, []);

  async function loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);

    const networkId = await web3.eth.net.getId();
    const deployedNetwork = Voting.networks[networkId];
    const contract = new web3.eth.Contract(Voting.abi, deployedNetwork && deployedNetwork.address);
    setVotingContract(contract);

    const candidatesCount = await contract.methods.candidatesCount().call();
    const candidatesArray = [];
    for (let i = 1; i <= candidatesCount; i++) {
      const candidate = await contract.methods.candidates(i).call();
      candidatesArray.push(candidate);
    }
    setCandidates(candidatesArray);
  }

  const vote = async (candidateId) => {
    await votingContract.methods.vote(candidateId).send({ from: account });
  };

  return (
    <div>
      <h1>Voting DApp</h1>
      <h2>Your Account: {account}</h2>
      <ul>
        {candidates.map((candidate, index) => (
          <li key={index}>
            {candidate.name} - {candidate.voteCount} votes
            <button onClick={() => vote(candidate.id)}>Vote</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
