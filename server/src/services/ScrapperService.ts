import { Service } from 'typedi';
import PropertyRepository from '../repositories/PropertyRepository';
import { LoggerClient } from './LoggerClient';
import * as puppeteer from 'puppeteer';
import { REGIONS } from '../constants/urls';
import { PropertyDetails } from '../Types/Property';

@Service()
export default class ScrapperService {
  constructor(public propertyRepository: PropertyRepository, public logger: LoggerClient) {}

  findTexasPhoneAndMapUrl = async (url: string) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(url);

    const texts = await page.$$eval('#p7EHCd_2 > p', options => {
        return options.map(option => option.textContent);
      });
    const textArray = texts[0].split('\n');

    const mapUrl = await page.$$eval('#p7EHCd_2 > p > a', a => {
        return a.map((el) => el.href);
      });

      const lis = await page.$$eval('#p7TP3c1_1 > div > ul > li', options => {
        return options.map(option => option.textContent);
      });

      const liArray = lis[1].split(' ')

    await browser.close();
    return {
        phone: textArray[3] ?? '',
        map: mapUrl[mapUrl.length - 1] ?? '',
        capacity: liArray[liArray.length - 1] ?? ''
    };
  };


  scrapTexas = async (searchText: string) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(REGIONS.TEXAS_NAME);
    await page.type('#searchterm', searchText);
    await page.click('Button.ctaButton');
    await page.waitForNavigation();
    const tds = await page.$$eval('.sortabletable > tbody > tr > td', options => {
        return options.map(option => option.textContent);
      });

      const links = await page.$$eval('.sortabletable > tbody > tr > td > a', options => {
        return options.map(option => option.href);
      });

    const tdArrays = []
    for (let i = 0; i < tds.length / 6; i++) {
        const element = tds.slice(6*i, 6*i + 6);
        tdArrays.push(element);
    }

    const ansArray = tdArrays.map((el) => this.convertTexasArrayIntoPropertydata(el));

    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        ansArray[i] = {
            ...ansArray[i],
            link: link
        }
    }

    await browser.close();
    return ansArray;
  };

  convertTexasArrayIntoPropertydata = (arr: string[]): PropertyDetails => {
    const data: PropertyDetails = {
        name: arr[0] ?? '',
        address: arr[1] ?? '',
        city: arr[2] ?? '',
        zip: arr[3] ?? '',
        county: arr[4] ?? '',
        type: arr[5] ?? '',
        phone: '',
        capacity: '',
        images: '',
        map: '',
        link: ''
    }
    return data;
  }


  // ---------------------------------------------------------- FLORIDA ---------------------------------------------------------//

  scrapFlorida = async (searchText: string) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(REGIONS.FLORIDA);
    await page.select('Select#ctl00_mainContentPlaceHolder_FacilityType', 'ALL');
    await page.type('#ctl00_mainContentPlaceHolder_FacilityName', searchText);
    await page.click('#ctl00_mainContentPlaceHolder_SearchButton');
    await page.goto(REGIONS.FLORIDA_LIST);
    const oddTds = await page.$$eval('#ctl00_mainContentPlaceHolder_dgFacilities > tbody > tr.odd > td', options => {
        return options.map(option => option.textContent);
      });
    const evenTds = await page.$$eval('#ctl00_mainContentPlaceHolder_dgFacilities > tbody > tr.even > td', options => {
        return options.map(option => option.textContent);
      });

    const links = await page.$$eval('#facilityProfiles > a', options => {
        return options.map(option => option.href);
    });
    
    const tds = [...oddTds, ...evenTds].map((el) => el.replace(/(^ \n)+/,'').trim(' '));

    const tdArrays = []
    for (let i = 0; i < tds.length / 8; i++) {
        const element = tds.slice(8*i, 8*i + 8);
        tdArrays.push(element);
    }

    const ansArray = tdArrays.map((el) => this.convertFloridaArrayIntoPropertydata(el));

    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        ansArray[i] = {
            ...ansArray[i],
            link: link
        }
    }

    await browser.close();
    return ansArray;
  };

  convertFloridaArrayIntoPropertydata = (arr: string[]): PropertyDetails => {
    const data: PropertyDetails = {
        name: arr[0] ?? '',
        type: arr[1] ?? '',
        address: arr[2] ?? '',
        city: arr[3] ?? '',
        county: arr[4] ?? '',
        zip: arr[5] ?? '',
        phone: arr[6] ?? '',
        capacity: arr[7] ?? '',
        images: '',
        map: '',
        link: ''
    }
    return data;
  };

  findFloridaPropertyMapUrl = async (url: string) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(url);

    const mapUrl = await page.$eval('#map_canvas > iframe', iframe => {
        return iframe.src;
      });

    await browser.close();
    return {
        map: mapUrl ?? '',
        phone: '',
        capacity: ''
    };
  };

}
