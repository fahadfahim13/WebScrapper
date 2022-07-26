import { ApplicationError } from '../utils/ApiError';
import { Service } from 'typedi';
import PropertyRepository from '../repositories/PropertyRepository';
import { LoggerClient } from './LoggerClient';
import { PropertyAttributes } from '../Types/Property';

@Service()
export default class PropertyService {
  constructor(public propertyRepository: PropertyRepository, public logger: LoggerClient) {}

  createProperty = async (property: PropertyAttributes) => {
    const result = this.propertyRepository.createProperty(property);
    return result;
  };

  updateProperty = async (id: number, property: PropertyAttributes) => {
    this.logger.info(`Id of the registered property is ${id}`);
    const updatedResult =  this.propertyRepository.updateProperty(id, property);
    if (!updatedResult) {
      throw new ApplicationError('No Property found with this id');
    }
    return 'Successfully Updated';
  };

  getAllProperties = async () => {
    return await this.propertyRepository.getAllProperties();
  };

  getMultipleProperties = async (key: string, value: string) => {
    const result = this.propertyRepository.findPropertiesByKey(key, value);
    return result;
  };

  getSingleProperty = async (id: number) => {
    return await this.propertyRepository.findByKey('id', id);
  };
}
