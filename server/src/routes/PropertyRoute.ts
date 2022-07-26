import express from 'express';
import { PropertySearchRequest } from '../requests/PropertySearchRequest';
import { PropertyCreateRequest } from '../requests/PropertyCreaterequest';
import RequestValidator from '../middlewares/RequestValidator';
import { Container } from 'typedi';
import PropertyController from '../controllers/PropertyController';


const router = express.Router();

/**
 * We are using TypeDI to get the UserService instance from our dependency container
 */
const propertyController = Container.get(PropertyController);

router.post('/search', RequestValidator.validate(PropertySearchRequest), propertyController.searchProperties);
router.post('/create-property', RequestValidator.validate(PropertyCreateRequest), propertyController.createProperty);
router.get('/properties', propertyController.getAllProperties);

router.get('/properties/:id', propertyController.getPropertyDetails);

export default router;
