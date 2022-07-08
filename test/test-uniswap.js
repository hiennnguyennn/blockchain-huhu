// SPDX-License-Identifier: MIT
const IERC20 = artifacts.require("IERC20");
const TestUniswap = artifacts.require("TestUniswap");
contract('TestUniswap', (accounts) => {
  const WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
  const WETH_WHALE = "0x9804f0A29F101982A449c083Cdf545e685eBcF1f";
  const WBTC = "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599";
  const WHALE = WETH_WHALE;
  const AMOUNT_IN = 1000000;
  const AMOUNT_OUT_MIN = 1;
  const TOKEN_IN = WETH;
  const TOKEN_OUT = WBTC;
  const TO = accounts[0];

  beforeEach(async () => {
    tokenIn = await IERC20.at(TOKEN_IN);
    tokenOut = await IERC20.at(TOKEN_OUT);
    testUniswap = await TestUniswap.new();

    // make sure WHALE has enough ETH to send tx
    // await sendEther(web3, accounts[0], WHALE, 1);
   // await tokenIn.approve(testUniswap.address, AMOUNT_IN, { from: WHALE });
  });

  // it("should pass", async () => {
  //   await testUniswap.swap(
  //     tokenIn.address,
  //     tokenOut.address,
  //     AMOUNT_IN,
  //     AMOUNT_OUT_MIN,
  //     TO,
  //     {
  //       from: WHALE,
  //     }
  //   );
  
    
  //   console.log(`in ${AMOUNT_IN}`);
  //   console.log(`out ${await tokenOut.balanceOf(TO)}`);
  // });
  it("should get amount out min",async()=>{
    x=await testUniswap.getAmountOutMin(tokenIn.address,tokenOut.address,AMOUNT_IN);
    console.log(`in ${AMOUNT_IN} and ${x}`);
    
  })
});
