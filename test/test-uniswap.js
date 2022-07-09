// SPDX-License-Identifier: MIT
const IERC20 = artifacts.require("IERC20");
const TestUniswap = artifacts.require("TestUniswap");
contract('TestUniswap', (accounts) => {
  const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
  const WBTC = "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599";
  const BUSD = "0x4Fabb145d64652a948d72533023f6E7A623C7C53";
  const WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
  const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
  const ETH_WHALE="0x8f33edEF2Cf3BdF9B082350cA72a1a09F8d36EBA";
  //const WHALE = WETH_WHALE;
  const AMOUNT_IN = 1000000;
  const AMOUNT_OUT_MIN = 1;
 const TOKEN_IN = DAI;
  const TOKEN_OUT = WETH;
  const TO = ETH_WHALE
  const WHALE=ETH_WHALE;

 /*
   it("swap token to token", async () => {
    tokenIn = await IERC20.at(TOKEN_IN);
    tokenOut = await IERC20.at(TOKEN_OUT);
    testUniswap = await TestUniswap.new();
    console.log(`in ${await tokenIn.balanceOf(TO)}`,AMOUNT_IN);
    await tokenIn.approve(testUniswap.address, AMOUNT_IN, { from: WHALE });
    console.log(tokenIn.address, tokenOut.address, AMOUNT_IN, AMOUNT_OUT_MIN, WHALE, TO)
     await testUniswap.swap(
       tokenIn.address,
       tokenOut.address,
       AMOUNT_IN,
       AMOUNT_OUT_MIN,
       TO,
       {
        from: WHALE,
       }
     );
  
    
     console.log(`in ${AMOUNT_IN}`);
     console.log(`out ${await tokenOut.balanceOf(TO)}`);
   });
   */
   
  it("should get amount out min",async()=>{
    tokenIn = await IERC20.at(TOKEN_IN);
    tokenOut = await IERC20.at(TOKEN_OUT);
    testUniswap = await TestUniswap.new();
    console.log(`in ${tokenIn.address} and ${tokenOut.address} and ${AMOUNT_IN}`);
    x=await testUniswap.getAmountOutMin(tokenIn.address,tokenOut.address,AMOUNT_IN);
    console.log(`in ${AMOUNT_IN} and x: `, x);
    console.log(`in ${AMOUNT_IN} and x: `, x.toNumber());
    
  }) 
  /*
  it("eth to token",async()=>{
    tokenOut = await IERC20.at(TOKEN_OUT);
    testUniswap = await TestUniswap.new();
   await testUniswap.swapFromETHToToken(tokenOut.address,AMOUNT_OUT_MIN,TO,{value:AMOUNT_IN, FROM:WHALE});
   console.log(`in ${AMOUNT_IN}`);
    console.log(`out ${await tokenOut.balanceOf(TO)}`);
  })
  */
 /*
 it("token to eth",async()=>{
  tokenIn = await IERC20.at(TOKEN_IN);
  testUniswap = await TestUniswap.new();
  console.log(`in ${await tokenIn.balanceOf(TO)}`,AMOUNT_IN);
  await tokenIn.approve(testUniswap.address, AMOUNT_IN, { from: WHALE });
  console.log(tokenIn.address,AMOUNT_IN, AMOUNT_OUT_MIN, WHALE, TO)
   await testUniswap.swapFromTokenToETH(
     tokenIn.address,
     AMOUNT_IN,
     AMOUNT_OUT_MIN,
     TO,
     {
      from: WHALE,
     }
   );

  
   console.log(`in ${AMOUNT_IN}`);
   console.log(`out ${await tokenOut.balanceOf(TO)}`);
 })
 */
});
