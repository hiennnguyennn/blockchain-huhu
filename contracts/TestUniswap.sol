// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;
import "./interfaces/Uniswap.sol";
import "./interfaces/IERC20.sol";

contract TestUniswap {
    address private constant UNISWAP_V2_ROUTER =
        0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D; // to trade
    address private constant WETH = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;

    function swap(
        address tokenIn, //token trading in
        address tokenOut, //token trading out
        uint256 amountIn, //amout of token trading in
        uint256 amountOutMin, //min of token we want trade out
        address to //address sending the output token to
    ) external {
        IERC20(tokenIn).transferFrom(msg.sender, address(this), amountIn); //transfer the amoutIn tokenIn from the messager.sender to this contract
        //after this function is clalled this contract will have amountIn amount of tokenIn

        IERC20(tokenIn).approve(UNISWAP_V2_ROUTER, amountIn); //allow uniswap v2 router to spend that token (cho phep uniswap v2 router su dung token vua gui)

        //declare an array of addresses named path, path have 3 tokens
        address[] memory path;
        path = new address[](3);
        path[0] = tokenIn;
        path[1] = WETH;
        path[2] = tokenOut;

        IUniswapV2RRouter(UNISWAP_V2_ROUTER).swapExtractTokensForTokens(
            amountIn,
            amountOutMin,
            path,
            to,
            block.timestamp
        );
    }
    function getAmountOutMin(address tokenIn, address tokenOut, uint256 amountIn) external returns(uint256){
        address[] memory path;
        
        if(tokenIn==WETH||tokenOut==WETH){
            path=new address[](2);
            path[0]=tokenIn;
            path[1]=tokenOut;
        }
        else{
            path=new address[](3);
            path[0]=tokenIn;
            path[1]=WETH;
            path[2]=tokenOut;
        }
        uint256[] memory amountOutMins = IUniswapV2RRouter(UNISWAP_V2_ROUTER).getAmountsOut(amountIn, path);
        return amountOutMins[path.length -1]; 
    }
}
