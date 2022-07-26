import express from 'express';
import { PropertySearchRequest, PropertyDetailsRequest } from '../requests/PropertySearchRequest';
import { PropertyCreateRequest } from '../requests/PropertyCreaterequest';
import RequestValidator from '../middlewares/RequestValidator';
import { Container } from 'typedi';
import PropertyController from '../controllers/PropertyController';
import { ROUTES } from '../constants/routes';


const router = express.Router();

const propertyController = Container.get(PropertyController);

router.post(ROUTES.PROPERTY.SEARCH, RequestValidator.validate(PropertySearchRequest), propertyController.searchProperties);
router.post(ROUTES.PROPERTY.CREATE, RequestValidator.validate(PropertyCreateRequest), propertyController.createProperty);

router.get(ROUTES.PROPERTY.GET.ALL, propertyController.getAllProperties);
router.post(ROUTES.PROPERTY.GET.DETAILS, RequestValidator.validate(PropertyDetailsRequest), propertyController.getPropertyDetails);

export default router;
