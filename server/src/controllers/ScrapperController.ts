import { Request } from 'express';
import ScrapperService from '../services/ScrapperService';
import { asyncWrapper } from '../utils/asyncWrapper';
import { SuccessResponse } from '../utils/SuccessResponse';
import { Service } from 'typedi';

@Service()
export default class ScrapperController {

  constructor(public scrapperService: ScrapperService) {}

  searchTexasProperties = asyncWrapper(async (req: Request) => {
    const { search } = req.body;
    const response = await this.scrapperService.scrapTexas(search);
    return new SuccessResponse(response);
  });

  getTexasPropertyDetails = asyncWrapper(async (req: Request) => {
    const { url } = req.body;
    const response = await this.scrapperService.findTexasPhoneAndMapUrl(url);
    return new SuccessResponse(response);
  });

  searchFloridaProperties = asyncWrapper(async (req: Request) => {
    const { search } = req.body;
    const response = await this.scrapperService.scrapFlorida(search);
    return new SuccessResponse(response);
  });

  getFloridaPropertyDetails = asyncWrapper(async (req: Request) => {
    const { url } = req.body;
    const response = await this.scrapperService.findFloridaPropertyMapUrl(url);
    return new SuccessResponse(response);
  });
}
