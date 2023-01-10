const tokenContractABI = [
	{
		inputs: [],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "previousAdmin",
				type: "address",
			},
			{
				indexed: false,
				internalType: "address",
				name: "newAdmin",
				type: "address",
			},
		],
		name: "AdminChanged",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "account",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address",
			},
			{
				indexed: false,
				internalType: "bool",
				name: "approved",
				type: "bool",
			},
		],
		name: "ApprovalForAll",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "beacon",
				type: "address",
			},
		],
		name: "BeaconUpgraded",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint8",
				name: "version",
				type: "uint8",
			},
		],
		name: "Initialized",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "userAddress",
				type: "address",
			},
			{
				indexed: false,
				internalType: "address payable",
				name: "relayerAddress",
				type: "address",
			},
			{
				indexed: false,
				internalType: "bytes",
				name: "functionSignature",
				type: "bytes",
			},
			{
				indexed: false,
				internalType: "bytes",
				name: "returnData",
				type: "bytes",
			},
		],
		name: "MetaTransactionExecuted",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "OwnershipTransferred",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "account",
				type: "address",
			},
		],
		name: "Paused",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256[]",
				name: "ids",
				type: "uint256[]",
			},
			{
				indexed: false,
				internalType: "uint256[]",
				name: "values",
				type: "uint256[]",
			},
		],
		name: "TransferBatch",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "id",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256",
			},
		],
		name: "TransferSingle",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "string",
				name: "value",
				type: "string",
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "id",
				type: "uint256",
			},
		],
		name: "URI",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "account",
				type: "address",
			},
		],
		name: "Unpaused",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "implementation",
				type: "address",
			},
		],
		name: "Upgraded",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint256",
				name: "estateid",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "burnAllowedTill",
				type: "uint256",
			},
		],
		name: "extendedBurnDeadline",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint256",
				name: "estateId",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "string",
				name: "uri",
				type: "string",
			},
		],
		name: "mintedNewPropertyToken",
		type: "event",
	},
	{
		inputs: [],
		name: "admin0",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "admin1",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "admin2",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bool",
				name: "approved",
				type: "bool",
			},
		],
		name: "adminApproveForAll",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "id",
				type: "uint256",
			},
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address[]",
				name: "accounts",
				type: "address[]",
			},
			{
				internalType: "uint256[]",
				name: "ids",
				type: "uint256[]",
			},
		],
		name: "balanceOfBatch",
		outputs: [
			{
				internalType: "uint256[]",
				name: "",
				type: "uint256[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_account",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "_estateid",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256",
			},
		],
		name: "burn",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address",
			},
			{
				internalType: "uint256[]",
				name: "ids",
				type: "uint256[]",
			},
			{
				internalType: "uint256[]",
				name: "values",
				type: "uint256[]",
			},
		],
		name: "burnBatch",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "docs",
		outputs: [
			{
				internalType: "string",
				name: "doc1",
				type: "string",
			},
			{
				internalType: "string",
				name: "doc2",
				type: "string",
			},
			{
				internalType: "string",
				name: "doc3",
				type: "string",
			},
			{
				internalType: "string",
				name: "doc4",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "userAddress",
				type: "address",
			},
			{
				internalType: "bytes",
				name: "functionSignature",
				type: "bytes",
			},
			{
				internalType: "bytes32",
				name: "sigR",
				type: "bytes32",
			},
			{
				internalType: "bytes32",
				name: "sigS",
				type: "bytes32",
			},
			{
				internalType: "uint8",
				name: "sigV",
				type: "uint8",
			},
		],
		name: "executeMetaTransaction",
		outputs: [
			{
				internalType: "bytes",
				name: "",
				type: "bytes",
			},
		],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "id",
				type: "uint256",
			},
		],
		name: "exists",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_estateid",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "_timetill",
				type: "uint256",
			},
		],
		name: "extendBurnDeadline",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "getChainID",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "user",
				type: "address",
			},
		],
		name: "getNonce",
		outputs: [
			{
				internalType: "uint256",
				name: "nonce",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "initialize",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address",
			},
			{
				internalType: "address",
				name: "operator",
				type: "address",
			},
		],
		name: "isApprovedForAll",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "__uri",
				type: "string",
			},
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256",
			},
			{
				internalType: "address",
				name: "_propowneradd",
				type: "address",
			},
		],
		name: "mintNewPropertyToken",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
			{
				internalType: "address",
				name: "",
				type: "address",
			},
			{
				internalType: "uint256[]",
				name: "",
				type: "uint256[]",
			},
			{
				internalType: "uint256[]",
				name: "",
				type: "uint256[]",
			},
			{
				internalType: "bytes",
				name: "",
				type: "bytes",
			},
		],
		name: "onERC1155BatchReceived",
		outputs: [
			{
				internalType: "bytes4",
				name: "",
				type: "bytes4",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
			{
				internalType: "address",
				name: "",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
			{
				internalType: "bytes",
				name: "",
				type: "bytes",
			},
		],
		name: "onERC1155Received",
		outputs: [
			{
				internalType: "bytes4",
				name: "",
				type: "bytes4",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "pause",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "paused",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "propertyinfo",
		outputs: [
			{
				internalType: "string",
				name: "propertyName",
				type: "string",
			},
			{
				internalType: "string",
				name: "location",
				type: "string",
			},
			{
				internalType: "string",
				name: "taxId",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "proxiableUUID",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "renounceOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				internalType: "uint256[]",
				name: "ids",
				type: "uint256[]",
			},
			{
				internalType: "uint256[]",
				name: "amounts",
				type: "uint256[]",
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes",
			},
		],
		name: "safeBatchTransferFrom",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "id",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes",
			},
		],
		name: "safeTransferFrom",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_admin1",
				type: "address",
			},
			{
				internalType: "address",
				name: "_admin2",
				type: "address",
			},
		],
		name: "setAdmins",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "operator",
				type: "address",
			},
			{
				internalType: "bool",
				name: "approved",
				type: "bool",
			},
		],
		name: "setApprovalForAll",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_tokenID",
				type: "uint256",
			},
			{
				internalType: "string",
				name: "doc1",
				type: "string",
			},
		],
		name: "setDoc1",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_tokenID",
				type: "uint256",
			},
			{
				internalType: "string",
				name: "doc2",
				type: "string",
			},
		],
		name: "setDoc2",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_tokenID",
				type: "uint256",
			},
			{
				internalType: "string",
				name: "doc3",
				type: "string",
			},
		],
		name: "setDoc3",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_tokenID",
				type: "uint256",
			},
			{
				internalType: "string",
				name: "doc4",
				type: "string",
			},
		],
		name: "setDoc4",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_tokenID",
				type: "uint256",
			},
			{
				internalType: "string",
				name: "doc1",
				type: "string",
			},
			{
				internalType: "string",
				name: "doc2",
				type: "string",
			},
			{
				internalType: "string",
				name: "doc3",
				type: "string",
			},
			{
				internalType: "string",
				name: "doc4",
				type: "string",
			},
		],
		name: "setDocs",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_tokenID",
				type: "uint256",
			},
			{
				internalType: "string",
				name: "_propertyName",
				type: "string",
			},
			{
				internalType: "string",
				name: "_location",
				type: "string",
			},
			{
				internalType: "string",
				name: "_taxID",
				type: "string",
			},
		],
		name: "setPropertyinfo",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bytes4",
				name: "interfaceId",
				type: "bytes4",
			},
		],
		name: "supportsInterface",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "tokenID",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "tokenInfo",
		outputs: [
			{
				internalType: "bool",
				name: "minted",
				type: "bool",
			},
			{
				internalType: "bool",
				name: "burnState",
				type: "bool",
			},
			{
				internalType: "bool",
				name: "tempBurnState",
				type: "bool",
			},
			{
				internalType: "uint256",
				name: "burnAllowedTill",
				type: "uint256",
			},
			{
				internalType: "string",
				name: "uri",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "id",
				type: "uint256",
			},
		],
		name: "totalSupply",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "transferOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "unPause",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "updateAdmin0",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bool",
				name: "_state",
				type: "bool",
			},
			{
				internalType: "uint256",
				name: "_estateid",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "_timetill",
				type: "uint256",
			},
		],
		name: "updateBurningState",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_estateid",
				type: "uint256",
			},
			{
				internalType: "string",
				name: "_uri",
				type: "string",
			},
		],
		name: "updateTokenURI",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newImplementation",
				type: "address",
			},
		],
		name: "upgradeTo",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newImplementation",
				type: "address",
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes",
			},
		],
		name: "upgradeToAndCall",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_estateid",
				type: "uint256",
			},
		],
		name: "uri",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "nonce",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "chainID",
				type: "uint256",
			},
			{
				internalType: "bytes",
				name: "functionSignature",
				type: "bytes",
			},
			{
				internalType: "bytes32",
				name: "sigR",
				type: "bytes32",
			},
			{
				internalType: "bytes32",
				name: "sigS",
				type: "bytes32",
			},
			{
				internalType: "uint8",
				name: "sigV",
				type: "uint8",
			},
		],
		name: "verify",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
];
export default tokenContractABI;
