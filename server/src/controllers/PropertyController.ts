import { Request } from 'express';
import PropertyService from '../services/PropertyService';
import { asyncWrapper } from '../utils/asyncWrapper';
import { SuccessResponse } from '../utils/SuccessResponse';
import { Service } from 'typedi';

@Service()
export default class PropertyController {

  constructor(public propertyService: PropertyService) {}

  createProperty = asyncWrapper(async (req: Request) => {
    const property = req.body;
    const response = await this.propertyService.createProperty(property);
    return new SuccessResponse(response);
  });

  updateProperty = asyncWrapper(async (req: Request) => {
    const { id, property } = req.body;
    const response = await this.propertyService.updateProperty(id, property);
    return new SuccessResponse(response);
  });

  getAllProperties = asyncWrapper(async () => {
    const response = await this.propertyService.getAllProperties();
    return new SuccessResponse(response);
  });

  searchProperties = asyncWrapper(async (req: Request) => {
    const {key, value} = req.body;
    const response = await this.propertyService.getMultipleProperties(key, value);
    return new SuccessResponse(response);
  });

  getPropertyDetails = asyncWrapper(async (req: Request) => {
    const { id } = req.body;
    const response = await this.propertyService.getSingleProperty(id);
    return new SuccessResponse(response);
  });
}
