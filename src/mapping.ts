import { BigInt } from "@graphprotocol/graph-ts";
import {
  AugustusSwapperV2,
  Bought,
  Donation,
  FeeTaken,
  OwnershipTransferred,
  Paused,
  Swapped,
  Unpaused,
} from "../generated/AugustusSwapperV2/AugustusSwapperV2";
import { Fee, Swap } from "../generated/schema";

export function handleBought(event: Bought): void {}

export function handleDonation(event: Donation): void {}

export function handleFeeTaken(event: FeeTaken): void {
  let entity = Fee.load(event.transaction.from.toHex());
  if (entity == null) {
    entity = new Fee(event.transaction.from.toHex());
  }

  // Entity fields can be set based on event parameters
  entity.fee = event.params.fee;
  entity.partnerShare = event.params.partnerShare;
  entity.paraswapShare = event.params.partnerShare;
  entity.txHash = event.transaction.hash;
  entity.txOrigin = event.transaction.from;
  entity.txTarget = event.transaction.to;
  entity.txGasUsed = event.transaction.gasUsed;
  entity.txGasPrice = event.transaction.gasPrice;
  entity.blockHash = event.block.hash;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;

  // Entities can be written to the store with `.save()`
  entity.save();
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePaused(event: Paused): void {}

export function handleSwapped(event: Swapped): void {
  let entity = Swap.load(event.transaction.from.toHex());
  if (entity == null) {
    entity = new Swap(event.transaction.from.toHex());
  }

  // Entity fields can be set based on event parameters
  entity.initiator = event.params.initiator;
  entity.beneficiary = event.params.beneficiary;
  entity.srcToken = event.params.srcToken;
  entity.destToken = event.params.destToken;
  entity.srcAmount = event.params.srcAmount;
  entity.receivedAmount = event.params.receivedAmount;
  entity.expectedAmount = event.params.expectedAmount;
  entity.referrer = event.params.referrer;
  entity.txHash = event.transaction.hash;
  entity.txOrigin = event.transaction.from;
  entity.txTarget = event.transaction.to;
  entity.txGasUsed = event.transaction.gasUsed;
  entity.txGasPrice = event.transaction.gasPrice;
  entity.blockHash = event.block.hash;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;

  // Entities can be written to the store with `.save()`
  entity.save();
}

export function handleUnpaused(event: Unpaused): void {}
