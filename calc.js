"use strict";
import { ethers } from "./ethers-5.1.esm.min.js";
let inputs = document.querySelectorAll(".input");
let operators = document.querySelectorAll(".operator");
let display = document.querySelector("#display");
let mainDisplay = document.querySelector("#mainDisplay");
const btn = document.querySelector(".btn");
let checkIn = false;
inputs.forEach((input) => {
    input.addEventListener("click", (e) => {
        const event = e.target;
        const value = event.dataset.no;
        display.innerHTML += value;
    });
});
operators.forEach((operator) => {
    operator.addEventListener("click", (e) => {
        const event = e.target;
        const value = event.dataset.op;
        let dis = display.textContent;
        if (dis !== "") {
            const splitval = dis.split("");
            const length = splitval.length - 1;
            let lastVal = splitval[length]; //Get the last value
            if (lastVal == "+" || lastVal == "-" || lastVal == "/") { //check if it is function
                const slicedDis = dis.slice(0, length); //slice the string to get the string without the last value
                display.innerHTML = slicedDis + event.dataset.op; //then append the value to the sliced string,which solves the problem of accepting different operators
            }
            else {
              if (checkIn) {
                if (value == "eval" || value == "square" || value == "clear") {
                    if (value == "eval") {
                        var result = eval(dis);
                        mainDisplay.innerHTML = result;
                    }
                    else if (value == "square") {
                        var result = eval(dis);
                        var square = Math.sqrt(result);
                        mainDisplay.innerHTML = JSON.stringify(square);
                    }
                    else if (value == "clear") {
                        display.innerHTML = "";
                        mainDisplay.innerHTML = "";
                    }
                }
                else {
                    display.innerHTML += value;
                }
              }
            }
        }
    });
});


const connectWallet = async()=>{
  // console.log("clicked");
  // console.log(typeof window.ethereum);
  if (typeof window.ethereum !== "undefined") {
    await window.ethereum.request({method:"eth_requestAccounts"});
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const userAddr = await signer.getAddress(); //Our user Address
    // console.log(userAddr);
    const balance = await provider.getBalance(userAddr);
    // console.log(Number(balance) / 1e18);
    const mainBalance = Number(balance) / 1e18;
    checkIn = mainBalance >= 2;
    // console.log(checkIn);
    if (checkIn) {
      btn.disabled = true;
    }
  }else{
    console.log("Please Download a wallet");
    
  }
  
}

btn.addEventListener("click",connectWallet);
