import express from 'express';
import { SearchScrapperRequest, LoadUrlRequest } from '../requests/ScrapperRequests';
import RequestValidator from '../middlewares/RequestValidator';
import { Container } from 'typedi';
import ScrapperController from '../controllers/ScrapperController';
import { ROUTES } from '../constants/routes';


const router = express.Router();

const scrapperController = Container.get(ScrapperController);

router.post(ROUTES.SCRAPPER.TEXAS.SEARCH, RequestValidator.validate(SearchScrapperRequest), scrapperController.searchTexasProperties);
router.post(ROUTES.SCRAPPER.TEXAS.DETAILS, RequestValidator.validate(LoadUrlRequest), scrapperController.getTexasPropertyDetails);

router.post(ROUTES.SCRAPPER.FLORIDA.SEARCH, RequestValidator.validate(SearchScrapperRequest), scrapperController.searchFloridaProperties);
router.post(ROUTES.SCRAPPER.FLORIDA.DETAILS, RequestValidator.validate(LoadUrlRequest), scrapperController.getFloridaPropertyDetails);

export default router;
