# Paraswap
> Solving Liquidity for Defi
#

# Entities and Attributes #

## Swap ##
> Captures swap transactions details and attributes.
     id,
     initiator,
     beneficiary,
     srcToken,
     destToken,
     srcAmount,
     receivedAmount,
     expectedAmount,
     referrer,
     txHash,
     txOrigin,
     txTarget,
     txGasUsed,
     txGasPrice,
     blockHash,
     blockNumber,
     timestamp
     
     
## Fee ##
     id,
     fee,
     partnerShare,
     paraswapShare,
     txHash,
     txOrigin,
     txTarget,
     txGasUsed,
     txGasPrice,
     blockHash,
     blockNumber,
     timestamp
     
     
## User ##
     id,
     address,
     blockHash,
     blockNumber,
     joinTimestamp
     
     
## Token ##
     id,
     address,
     srcTotalAmount,
     receivedTotalAmount
     
     
## Paraswap ##
     id,
     totalSrcAmount,
     totalReceivedAmount,
     totalSwaps,
     totalUser


## Subgraph URL: https://thegraph.com/legacy-explorer/subgraph/dapplooker/paraswap ##
