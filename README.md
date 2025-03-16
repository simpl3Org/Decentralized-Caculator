# DAPP_CALCULATOR

# FAUCTNET LINK 👇🏾
https://sei-faucet.nima.enterprises

# Ethereum Calculator

A web-based calculator application that requires wallet authentication with a minimum of 2 ETH to unlock advanced calculator functions.

## Overview

This project demonstrates a simple calculator web application with Ethereum wallet integration. The calculator functions are locked until a user connects their wallet with a balance of at least 2 ETH. After successful authentication, users can perform basic arithmetic operations and square root calculations.

## Features

- Basic calculator functionality (addition, subtraction, multiplication, division)
- Square root calculations
- Ethereum wallet authentication
- Balance verification (requires ≥ 2 ETH)
- Clean, responsive user interface

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ethereum-calculator.git
   cd ethereum-calculator
   ```

2. Open the project in your code editor and set up a local server to run the application.

3. For local development, you can use any simple HTTP server. For example with Node.js:
   ```bash
   npm install -g http-server
   http-server
   ```

## Usage

1. Open the application in your browser (make sure you have a Web3 wallet like MetaMask installed)

2. Click the "Connect" button to connect your wallet

3. If your wallet has at least 2 ETH, the calculator functions will be unlocked

4. Use the calculator by clicking on the number and operation buttons

5. View results in the display area

## Example Operations

- Basic arithmetic: Enter numbers and operations (e.g., `5 + 3 =`)
- Square root: Enter a number and click the square root button (√)
- Clear the display: Click the "clear" button

## Technical Details

### Dependencies

- [ethers.js](https://docs.ethers.io/v5/) - Ethereum JavaScript library for wallet interaction

### Project Structure

- `index.html` - Main HTML structure
- `style.css` - Styling for the calculator
- `calc.js` - Main JavaScript logic for calculator operations and wallet connection
- `ethers-5.1.esm.min.js` - Ethers.js library for Ethereum integration

### Ethereum Integration

The application uses ethers.js to:
1. Connect to the user's Web3 provider (MetaMask)
2. Request access to the user's accounts
3. Check the account balance
4. Enable calculator features based on the account balance

```javascript
const connectWallet = async () => {
  if (typeof window.ethereum !== "undefined") {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const userAddr = await signer.getAddress();
    const balance = await provider.getBalance(userAddr);
    const mainBalance = Number(balance) / 1e18;
    checkIn = mainBalance >= 2;
    
    if (checkIn) {
      btn.disabled = true;
    }
  } else {
    console.log("Please Download a wallet");
  }
};
```

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Edge
- Safari

## License

MIT License

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
