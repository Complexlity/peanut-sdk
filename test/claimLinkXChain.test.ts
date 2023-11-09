import { ethers } from 'ethersv5'
import peanut from '../src/index' // import directly from source code
import dotenv from 'dotenv'
import { describe, it, expect } from '@jest/globals'

dotenv.config()
//                     0.000000000000000000
//   amount   uint256 :  100000000000000000
// squid value:          100042414897311943
// tx value:             0.000042414897311936
// squid data: 0x846a1bc6000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000016345785d8a000000000000000000000000000000000000000000000000000000000000000001200000000000000000000000000000000000000000000000000000000000000340000000000000000000000000000000000000000000000000000000000000038000000000000000000000000000000000000000000000000000000000000003c000000000000000000000000000000000000000000000000000000000000004200000000000000000000000006b3751c5b04aa818ea90115aa06a4d9a36a16f0200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000007a250d5630b4cf539739df2c5dacb4c659f2488d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000001c000000000000000000000000000000000000000000000000000000000000000e47ff36ab50000000000000000000000000000000000000000000000000000000001aa56860000000000000000000000000000000000000000000000000000000000000080000000000000000000000000481a2aae41cd34832ddcf5a79404538bb2c02bc80000000000000000000000000000000000000000000000000000018bb4c22ef30000000000000000000000000000000000000000000000000000000000000002000000000000000000000000b4fbf271143f4fbf7b91a5ded31805e42b2208d6000000000000000000000000254d06f33bdc5b8ee05b2ea472107e300226659a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005615553444300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000056c696e6561000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002a307834383141324141453431636433343833326444434635413739343034353338626232633032624338000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000bc000000000000000000000000000000000000000000000000000000000000000400000000000000000000000006b3751c5b04aa818ea90115aa06a4d9a36a16f02000000000000000000000000000000000000000000000000000000000000000700000000000000000000000000000000000000000000000000000000000000e000000000000000000000000000000000000000000000000000000000000001e000000000000000000000000000000000000000000000000000000000000003600000000000000000000000000000000000000000000000000000000000000580000000000000000000000000000000000000000000000000000000000000070000000000000000000000000000000000000000000000000000000000000009200000000000000000000000000000000000000000000000000000000000000a8000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000254d06f33bdc5b8ee05b2ea472107e300226659a0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000254d06f33bdc5b8ee05b2ea472107e300226659a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000001200000000000000000000000000000000000000000000000000000000000000044095ea7b30000000000000000000000006aa397cab00a2a40025dbf839a83f16d5ec7c1eb0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000254d06f33bdc5b8ee05b2ea472107e300226659a000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000010000000000000000000000006aa397cab00a2a40025dbf839a83f16d5ec7c1eb000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000001c000000000000000000000000000000000000000000000000000000000000000e404e45aaf000000000000000000000000254d06f33bdc5b8ee05b2ea472107e300226659a000000000000000000000000f56dc6695cf1f5c364edebc7dc7077ac9b5860680000000000000000000000000000000000000000000000000000000000000bb8000000000000000000000000d9b7849d3a49e287c8e448cea0aae852861c45450000000000000000000000000000000000000000000000000000000001c0f33800000000000000000000000000000000000000000000000000000000107b970d0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000254d06f33bdc5b8ee05b2ea472107e300226659a00000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000001000000000000000000000000f56dc6695cf1f5c364edebc7dc7077ac9b586068000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000001200000000000000000000000000000000000000000000000000000000000000044095ea7b30000000000000000000000006aa397cab00a2a40025dbf839a83f16d5ec7c1eb0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000f56dc6695cf1f5c364edebc7dc7077ac9b586068000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000010000000000000000000000006aa397cab00a2a40025dbf839a83f16d5ec7c1eb000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000001c000000000000000000000000000000000000000000000000000000000000000e404e45aaf000000000000000000000000f56dc6695cf1f5c364edebc7dc7077ac9b5860680000000000000000000000002c1b868d6596a18e32e61b901e4060c872647b6c00000000000000000000000000000000000000000000000000000000000001f4000000000000000000000000d9b7849d3a49e287c8e448cea0aae852861c4545000000000000000000000000000000000000000000000000000000001164c428000000000000000000000000000000000000000000000000000019b7a3469e820000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000f56dc6695cf1f5c364edebc7dc7077ac9b586068000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000010000000000000000000000002c1b868d6596a18e32e61b901e4060c872647b6c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000242e1a7d4d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000002c1b868d6596a18e32e61b901e4060c872647b6c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000006b3751c5b04aa818ea90115aa06a4d9a36a16f02000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
// DOESNT WORK
///
// DOES WORK
// deposit: 10000000000000000
//                      100042414897311943
//  // squid value      10099613338293587
// txn fee              0.000429108005149296 ETH (works)
// txn fee 2            0.000042414897311936 (doesnt work)
// squid data           0x846a1bc6000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000002386f26fc1000000000000000000000000000000000000000000000000000000000000000001200000000000000000000000000000000000000000000000000000000000000340000000000000000000000000000000000000000000000000000000000000038000000000000000000000000000000000000000000000000000000000000003c00000000000000000000000000000000000000000000000000000000000000420000000000000000000000000b6f42695e43712b091f398fe61562f0fdf44c97300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000007a250d5630b4cf539739df2c5dacb4c659f2488d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000001c000000000000000000000000000000000000000000000000000000000000000e47ff36ab5000000000000000000000000000000000000000000000000000000000036b5240000000000000000000000000000000000000000000000000000000000000080000000000000000000000000481a2aae41cd34832ddcf5a79404538bb2c02bc80000000000000000000000000000000000000000000000000000018b6bf773220000000000000000000000000000000000000000000000000000000000000002000000000000000000000000b4fbf271143f4fbf7b91a5ded31805e42b2208d6000000000000000000000000254d06f33bdc5b8ee05b2ea472107e300226659a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000561555344430000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008617262697472756d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002a3078343831413241414534316364333438333264444346354137393430343533386262326330326243380000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005800000000000000000000000000000000000000000000000000000000000000040000000000000000000000000b6f42695e43712b091f398fe61562f0fdf44c97300000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000016000000000000000000000000000000000000000000000000000000000000002e000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000254d06f33bdc5b8ee05b2ea472107e300226659a0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000254d06f33bdc5b8ee05b2ea472107e300226659a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000001200000000000000000000000000000000000000000000000000000000000000044095ea7b300000000000000000000000081cd91b6bd7d275a7aeebba15929ae0f0751d18c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000254d06f33bdc5b8ee05b2ea472107e300226659a0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000081cd91b6bd7d275a7aeebba15929ae0f0751d18c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000001e0000000000000000000000000000000000000000000000000000000000000010418cbafe5000000000000000000000000000000000000000000000000000000000036fbb2000000000000000000000000000000000000000000000000000059066e019db900000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000b6f42695e43712b091f398fe61562f0fdf44c9730000000000000000000000000000000000000000000000000000018b6bf773230000000000000000000000000000000000000000000000000000000000000002000000000000000000000000254d06f33bdc5b8ee05b2ea472107e300226659a000000000000000000000000ee01c0cd76354c383b8c7b4e65ea88d00b06f36f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000254d06f33bdc5b8ee05b2ea472107e300226659a0000000000000000000000000000000000000000000000000000000000000000

describe('TESTNET Peanut XChain claiming tests', function () {
	it('should create and claim link', async function () {
		// goerli
		const CHAINID = 5
		const provider = await peanut.getDefaultProvider(String(CHAINID))
		const wallet = new ethers.Wallet(process.env.TEST_WALLET_PRIVATE_KEY ?? '', provider)
		console.log('Using ' + wallet.address)
		// let link = 'https://peanut.to/claim#?c=5&v=v5&i=27&p=N5zPNFggvTqVeKt5&t=sdk'
		// let link = 'https://peanut.to/claim#?c=5&v=v5&i=35&p=gmIAFfwUFVOxk9IO&t=sdk'
		// let link = 'https://peanut.to/claim#?c=5&v=v5&i=38&p=5sMdW7PU1jQkxeRz&t=sdk'
		let link = 'https://peanut.to/claim#?c=5&v=v5&i=40&p=2Aojyh8prHKYXBBv&t=sdk'
		// let link = ''

		if (link.length == 0) {
			// create link
			console.log('No link supplied, creating..')
			const createLinkResponse = await peanut.createLink({
				structSigner: {
					signer: wallet,
				},
				linkDetails: {
					chainId: CHAINID,
					tokenAmount: 0.1,
					tokenType: 0, // 0 is for native tokens
				},
				peanutContractVersion: 'v5',
			})

			link = createLinkResponse.link
			console.log('New link: ' + link)
		} else {
			console.log('Link supplied : ' + link)
		}

		// get status of link
		const getLinkDetailsResponse = await peanut.getLinkDetails({
			link,
			provider: wallet.provider,
		})
		console.log('The link is claimed: ' + getLinkDetailsResponse.claimed)

		peanut.toggleVerbose(true)

		// try for each of chainIds:
		// const SquidSupportedTestnetChainIds = [80001, 3, 43113, 59140]
		// for (let i = 0; i < SquidSupportedTestnetChainIds.length; i++) {
		// 	try {
		// 		const claimTx = await peanut.claimLinkXChain({
		// 			structSigner: {
		// 				signer: wallet,
		// 				// gasLimit: ethers.BigNumber.from(1000000), // hardcode gas to guarantee broadcasts
		// 			},
		// 			link: link,
		// 			destinationChainId: String(SquidSupportedTestnetChainIds[i]), // use chain ID from array
		// 			isTestnet: true,
		// 			maxSlippage: 3.0,
		// 			recipient: await wallet.getAddress(), // replace with actual recipient address
		// 		})

		// 		console.log('success: x claimTx: ' + claimTx.txHash)
		// 		break // exit the loop if the claim is successful
		// 	} catch (error) {
		// 		console.log(`Failed to claim on chain ID ${SquidSupportedTestnetChainIds[i]}: ${error.message}`)
		// 	}
		// }

		// try on a single chain Id
		const claimTx = await peanut.claimLinkXChain({
			structSigner: {
				signer: wallet,
				gasLimit: ethers.BigNumber.from(1000000), // hardcode gas to guarantee broadcasts
			},
			link: link,
			// destinationChainId: '3', // arbitrum
			// destinationChainId: '59140', // linea testnet
			// destinationChainId: '43113', // avalanche fuji
			destinationChainId: '80001', // avalanche mumbai
			isTestnet: true,
			maxSlippage: 3.0,
			recipient: await wallet.getAddress(), // replace with actual recipient address
		})

		console.log('success: x claimTx: ' + claimTx.txHash)

		// Add your assertions here
		expect(claimTx).toBeTruthy()
		expect(claimTx.txHash).toBeDefined()
	}, 120000) // Increase timeout if necessary
})

describe.skip('MAINNET Peanut XChain claiming tests', function () {
	it('should create and claim link', async function () {
		// 137
		const CHAINID = 137
		const provider = await peanut.getDefaultProvider(String(CHAINID))
		const wallet = new ethers.Wallet(process.env.TEST_WALLET_PRIVATE_KEY ?? '', provider)
		console.log('Using ' + wallet.address)
		let link = 'https://peanut.to/claim#?c=137&v=v5&i=0&p=mfQRsGvHZ709nMt3&t=sdk'

		if (link.length == 0) {
			// create link
			console.log('No link supplied, creating..')
			const createLinkResponse = await peanut.createLink({
				structSigner: {
					signer: wallet,
				},
				linkDetails: {
					chainId: CHAINID,
					tokenAmount: 0.1,
					tokenType: 0, // 0 is for native tokens
				},
				peanutContractVersion: 'v5',
			})

			link = createLinkResponse.link
			console.log('New link: ' + link)
		} else {
			console.log('Link supplied : ' + link)
		}

		const claimTx = await peanut.claimLinkXChain({
			structSigner: {
				signer: wallet,
				// gasLimit: ethers.BigNumber.from(1000000), // hardcode gas
			},
			link: link,
			// destinationChainId: '100', // gnosis
			// destinationChainId: '420', // optimism
			destinationChainId: '42161', // arb
			isTestnet: false,
			maxSlippage: 3.0,
			recipient: await wallet.getAddress(), // replace with actual recipient address
		})

		console.log('success: x claimTx: ' + claimTx.txHash)

		// Add your assertions here
		expect(claimTx).toBeTruthy()
		expect(claimTx.txHash).toBeDefined()
	}, 120000) // Increase timeout if necessary
})
