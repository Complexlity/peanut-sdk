import { ethers } from 'ethersv5'
import { TransactionRequest } from '@ethersproject/abstract-provider'

//General export interface s and enums
export interface IPeanutSigner {
	signer: ethers.Signer
	nonce?: number
	maxFeePerGas?: number
	maxPriorityFeePerGas?: number
	gasLimit?: number
	eip1559?: boolean
}

export interface ITxOptions {
	nonce?: number
	value?: ethers.BigNumber
	gasLimit?: ethers.BigNumber
	gasPrice?: ethers.BigNumber
	maxFeePerGas?: ethers.BigNumber
	maxPriorityFeePerGas?: ethers.BigNumber
}

export enum EPeanutLinkType {
	native,
	erc20,
	erc721,
	erc1155,
	inflationarytokens, // we might leave this out for now?
}

export interface IPeanutLinkDetails {
	chainId: number
	tokenAmount: number
	tokenType: EPeanutLinkType
	tokenAddress?: string
	tokenId?: number
	tokenDecimals?: number
	baseUrl?: string
	trackId?: string
}

export interface ICreatedPeanutLink {
	link: string
	txHash: string
}

export interface IPeanutLinkChainDetails {
	linkDetails: IPeanutLinkDetails
	depositTimestamp: number
	claimed: boolean
}

export interface IPeanutUnsignedTransactions {
	unsignedTxs: TransactionRequest // change this any type to correct type
}

export interface IReturnSuccessObject {
	status: boolean
	errorCode?: number
	errorMessage?: string
}

//createLink
export interface ICreateLinkParams {
	structSigner: IPeanutSigner
	linkDetails: IPeanutLinkDetails
	peanutContractVersion?: string
	password?: string
}

//createLinks
export interface ICreateLinksParams extends Omit<ICreateLinkParams, 'password'> {
	numberOfLinks: number
	passwords?: string[]
}

//claimLinkGasless
export interface IClaimLinkGaslessParams {
	APIKey: string
	baseUrl?: string
	recipientAddress: string
	link: string
}

export interface IClaimLinkGaslessResponse {
	txHash: string
}

//ClaimLink
export interface IClaimLinkParams {
	structSigner: IPeanutSigner
	link: string
	recipient?: string
}

export interface IClaimLinkXChainParams {
	structSigner: IPeanutSigner
	link: string
	destinationChainId: string
	maxSlippage: number
	recipient?: string
}

export interface IClaimLinkResponse {
	txHash: string
}

//prepareCreatetxs
export interface IPrepareTxsParams {
	address: string
	linkDetails: IPeanutLinkDetails
	peanutContractVersion?: string
	batcherContractVersion?: string
	numberOfLinks?: number
	passwords: string[]
	provider?: ethers.providers.Provider
}

export interface IPrepareTxsResponse {
	unsignedTxs: TransactionRequest[]
}

//signAndSubmitTx
export interface ISignAndSubmitTxParams {
	structSigner: IPeanutSigner
	unsignedTx: TransactionRequest
}

export interface ISignAndSubmitTxResponse {
	txHash: string
	tx: ethers.providers.TransactionResponse
}

//getLink
export interface IGetLinkFromTxParams {
	linkDetails: IPeanutLinkDetails
	txHash: string
	provider?: ethers.providers.Provider
	passwords: string[]
}

export interface IGetLinkFromTxResponse {
	links: string[]
}

//getLinkDetails
export interface IGetLinkDetailsParams {
	link: string
	provider?: ethers.providers.Provider
}

export interface IGetLinkDetailsResponse {
	linkDetails: IPeanutLinkChainDetails
}

export interface Chain {
	chainId: number
	chainName: string
	chainType: string
}

export interface Token {
	chainId: number
	address: string
	name: string
	symbol: string
}

//error object and enums

export enum ECreateLinkStatusCodes {
	ERROR_PREPARING_TX,
	ERROR_SIGNING_AND_SUBMITTING_TX,
	ERROR_GETTING_LINKS_FROM_TX,
}

export enum EPrepareCreateTxsStatusCodes {
	ERROR_VALIDATING_LINK_DETAILS,
	ERROR_GETTING_DEFAULT_PROVIDER,
	ERROR_GETTING_TX_COUNT,
	ERROR_PREPARING_APPROVE_ERC20_TX,
	ERROR_PREPARING_APPROVE_ERC721_TX,
	ERROR_PREPARING_APPROVE_ERC1155_TX,
	ERROR_SETTING_FEE_OPTIONS,
	ERROR_ESTIMATING_GAS_LIMIT,
	ERROR_MAKING_DEPOSIT,
}

export enum ESignAndSubmitTx {
	ERROR_SENDING_TX,
	ERROR_SETTING_FEE_OPTIONS,
}

export enum EGetLinkFromTxStatusCodes {
	ERROR_GETTING_TX_RECEIPT_FROM_HASH,
}

export enum EClaimLinkStatusCodes {
	ERROR,
}

export type allErrorEnums =
	| ECreateLinkStatusCodes
	| EPrepareCreateTxsStatusCodes
	| ESignAndSubmitTx
	| EGetLinkFromTxStatusCodes
	| EClaimLinkStatusCodes

export class SDKStatus extends Error {
	code: allErrorEnums
	extraInfo?: any

	constructor(code: allErrorEnums, message?: string, extraInfo?: string) {
		super(message)
		this.code = code
		this.message = extraInfo

		// Ensure the instance of is correct
		Object.setPrototypeOf(this, SDKStatus.prototype)
	}
}
