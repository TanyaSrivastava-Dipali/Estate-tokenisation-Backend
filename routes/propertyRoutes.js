import express from "express";
// eslint-disable-next-line import/extensions
import * as PropertyController from "../controllers/PropertyController.js";

const Router = express.Router();

Router.route("/CreateProperty").post(PropertyController.createNewProperty);
Router.route("/initiateRentalPeriod/:propertyTokenId").patch(
	PropertyController.initiateRentalPeriod
);
Router.route("/enterRentalPropertyDetails/:propertyTokenId").patch(
	PropertyController.enterRentalPropertyDetails
);
Router.route("/getPropertystatus/:propertyTokenId").get(PropertyController.getPropertystatus);
Router.route("/getAllPropertystatus").get(PropertyController.getAllPropertystatus);
Router.route("/distributeRentAmount").post(PropertyController.distributeRentAmount);
Router.route("/terminateRentalPeriod/:propertyTokenId").post(
	PropertyController.terminateRentalPeriod
);
export default Router;
