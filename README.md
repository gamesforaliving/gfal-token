# Games For A Living Token ERC20

The $GFAL Token Smart Contract follows the ERC20 Token Standard and is deployed on the BNB Chain. This GitHub repository provides a centralized location for interested parties to view the Smart Contract.

## Smart Contract Audit
The $GFAL Token has been audited by Hacken.io, a professional services firm that specializes in audit, tax, legal, and financial advising services.
The last audit received a score of 10 and can be accessed [here](https://drive.google.com/file/d/1nOSMHaOZRApLVqvf7gRrfi5QBSlMZ0F5/view?usp=sharing).

## Smart Contract Address

- Mainnet: TBD on the Binance Smart Chain
- Testnet: 0xdE8eCC061f2940D1Ccd32DbE5cEA64EC0E1Fc878 on the Goerli Testnet [(view on Etherscan)](https://goerli.etherscan.io/address/0xdE8eCC061f2940D1Ccd32DbE5cEA64EC0E1Fc878)

<hr/>

## Project Setup

Install required dependencies:

```bash
npm install
```

## Create .env file

Create the .env file:

```bash
cp .env.example .env
```

## Tests

The smart contract can be tested using Hardhat:

### Solidity/Hardhat
```bash
npx hardhat test
```

## Deployment

To deploy the smart contract:

- To Hardhat for testing: `npx hardhat run scripts/deploy.js`
- To a remote blockchain: `npx hardhat run scripts/deploy.js --network {{network}}`