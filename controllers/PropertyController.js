import { ethers } from "ethers";
// eslint-disable-next-line import/extensions
import PropertyModel from "../models/PropertyModel.js";
// eslint-disable-next-line import/extensions
import tokenContractABI from "../services/tokenContractABI.js";
// eslint-disable-next-line import/extensions
import rentalPropertyContractABI from "../services/rentalPropertyContractABI.js";

export const createNewProperty = async (req, res) => {
	try {
		const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545/");
		const signer = new ethers.Wallet(req.body.key, provider);

		const tokenContractInstance = new ethers.Contract(
			process.env.TOKEN_CONTRACT_ADDRESS,
			tokenContractABI,
			provider
		);

		const newProperty = await new PropertyModel({
			propertyTokenId: req.body.propertyTokenId,
		});

		const ethTrx = await tokenContractInstance
			.connect(signer)
			.mintNewPropertyToken(
				req.body.uri,
				ethers.utils.parseUnits("1000", 18),
				req.body.ownerAddress
			);
		// console.log("ethTrx", ethTrx.hash);
		let property;
		if (!ethTrx) {
			throw new Error("Transaction Failed");
		} else {
			property = await newProperty.save();
		}
		res.status(201).json({
			status: "Success",
			message: "property created successfully",
			ethTransactionHash: ethTrx.hash,
			propertyDetail: property,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			status: "Fail",
			err,
		});
	}
};
// eslint-disable-next-line consistent-return
export const getPropertystatus = async (req, res) => {
	try {
		const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545/");
		const rentalContractInstance = new ethers.Contract(
			process.env.RENTAL_PROPERTY_CONTRACT_ADDRESS,
			rentalPropertyContractABI,
			provider
		);
		const ethTrx = await rentalContractInstance.getPropertyStatus(req.params.propertyTokenId);
		// const Property = await PropertyModel.findOne({
		// 	propertyTokenId: req.params.propertyTokenId,
		// });

		if (!ethTrx) {
			return res.status(404).json({
				status: "Fail",
				message: "Not found Property details for this propertyId",
			});
			// eslint-disable-next-line no-else-return
		} else {
			res.status(200).json({
				status: "Success",
				message: " property details fetched successfully",
				ethtrx: ethTrx,
			});
		}
	} catch (err) {
		console.log(err);
		res.status(400).json({
			status: "Fail",
			err,
		});
	}
};
// eslint-disable-next-line consistent-return
export const getAllPropertystatus = async (req, res) => {
	try {
		const Property = await PropertyModel.find();
		if (!Property) {
			return res.status(404).json({
				status: "Fail",
				message: "Empty collection",
			});
			// eslint-disable-next-line no-else-return
		} else {
			res.status(200).json({
				status: "Success",
				message: " property details fetched successfully",
				PropertyDetail: Property,
			});
		}
	} catch (err) {
		console.log(err);
		res.status(400).json({
			status: "Fail",
			err,
		});
	}
};
// eslint-disable-next-line consistent-return
export const enterRentalPropertyDetails = async (req, res) => {
	try {
		const Property = await PropertyModel.findOne({
			propertyTokenId: req.params.propertyTokenId,
		});
		const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545/");
		const propertyManager = new ethers.Wallet(req.body.key, provider);
		const rentalContractInstance = new ethers.Contract(
			process.env.RENTAL_PROPERTY_CONTRACT_ADDRESS,
			rentalPropertyContractABI,
			provider
		);
		const ethTrx = await rentalContractInstance
			.connect(propertyManager)
			.enterRentalPropertyDetails(
				req.params.propertyTokenId,
				ethers.utils.parseEther("1.5"),
				ethers.utils.parseEther("2")
			);
		if (!ethTrx) {
			return res.status(404).json({
				status: "Fail",
				message: "Not found Propertydetails for this propertyId",
			});
			// eslint-disable-next-line no-else-return
		} else {
			if (Property) {
				Property.isListed = true;
				await Property.save();
			}
			res.status(200).json({
				status: "Success",
				message: "listing status changed successfully",
				PropertyDetail: Property,
			});
		}
	} catch (err) {
		console.log(err);
		res.status(400).json({
			status: "Fail",
			err,
		});
	}
};
// eslint-disable-next-line consistent-return
export const initiateRentalPeriod = async (req, res) => {
	try {
		const Property = await PropertyModel.findOne({
			propertyTokenId: req.params.propertyTokenId,
		});
		const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545/");
		const propertyManager = new ethers.Wallet(req.body.key, provider);
		const rentalContractInstance = new ethers.Contract(
			process.env.RENTAL_PROPERTY_CONTRACT_ADDRESS,
			rentalPropertyContractABI,
			provider
		);
		const ethTrx = await rentalContractInstance
			.connect(propertyManager)
			.initiateRentalPeriod(
				req.params.propertyTokenId,
				req.body.tenant,
				req.body.rentalPeriodInDays,
				req.body.amountTowardsMaintenanceReserve,
				req.body.amountTowardsVacancyReserve,
				{
					value: ethers.utils.parseEther(req.body.value),
				}
			);
		if (!ethTrx) {
			return res.status(404).json({
				status: "Fail",
				message: "Either property not minted or not listed",
			});
			// eslint-disable-next-line no-else-return
		} else {
			if (Property) {
				Property.isinitiated = true;
				await Property.save();
			}
			res.status(200).json({
				status: "Success",
				message: "listing status changed successfully",
				PropertyDetail: Property,
			});
		}
	} catch (err) {
		console.log(err);
		res.status(400).json({
			status: "Fail",
			err,
		});
	}
};
export const distributeRentAmount = async (req, res) => {
	try {
		const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545/");
		const propertyManager = new ethers.Wallet(req.body.key, provider);
		const rentalContractInstance = new ethers.Contract(
			process.env.RENTAL_PROPERTY_CONTRACT_ADDRESS,
			rentalPropertyContractABI,
			provider
		);
		const ethTrx = await rentalContractInstance
			.connect(propertyManager)
			.distributeRentAmount(req.body.propertyTokenId, req.body.ownerList);
		if (!ethTrx) {
			throw new Error("Transaction Failed");
		}
		res.status(201).json({
			status: "Success",
			message: "rent distributed successfully",
			ethTransaction: ethTrx,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			status: "Fail",
			err,
		});
	}
};
export const terminateRentalPeriod = async (req, res) => {
	try {
		const Property = await PropertyModel.findOne({
			propertyTokenId: req.params.propertyTokenId,
		});
		const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545/");
		const propertyManager = new ethers.Wallet(req.body.key, provider);
		const rentalContractInstance = new ethers.Contract(
			process.env.RENTAL_PROPERTY_CONTRACT_ADDRESS,
			rentalPropertyContractABI,
			provider
		);
		const ethTrx = await rentalContractInstance
			.connect(propertyManager)
			.terminateRentalPeriod(req.params.propertyTokenId);
		if (!ethTrx) {
			throw new Error("Transaction Failed");
		} else {
			if (Property) {
				Property.isinitiated = false;
				await Property.save();
			}
			res.status(201).json({
				status: "Success",
				message: "rental period terminated  successfully",
				ethTransaction: ethTrx,
			});
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({
			status: "Fail",
			err,
		});
	}
};
