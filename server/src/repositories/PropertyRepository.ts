import { Properties } from '../models/Properties';
import { Service } from 'typedi';
import { PropertyAttributes } from '../Types/Property';

@Service()
export default class PropertyRepository {
  createProperty = async (property: PropertyAttributes): Promise<Properties> => {
    const { name, city, address, zip, county, phone, type, capacity, images, map } = property;
    const user = Properties.build({ name, city, address, zip, county, phone, type, capacity, images, map });
    return await user.save();
  };

  updateProperty = async (id: number, property: PropertyAttributes): Promise<[affectedCount: number]> => {
    const { name, city, address, zip, county, phone, type, capacity, images, map } = property;
    const user = Properties.update({ name, city, address, zip, county, phone, type, capacity, images, map },{ where: {id: id} });
    return user;
  };

  findByKey = async (key: string, value: string | number): Promise<Properties | null> => {
    return await Properties.findOne({ where: { [key]: value } });
  };

  findPropertiesByKey = async (key: string, value: string | number): Promise<Properties[] | []> => {
    return await Properties.findAll({ where: { [key]: value }});
  };

  getAllProperties = async (): Promise<Properties[]> => {
    return await Properties.findAll();
  };
}
