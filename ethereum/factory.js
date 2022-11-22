import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x6C6eF36FDc3575fAf3953B36dbBd6395C84A4095'
);

export default instance;
