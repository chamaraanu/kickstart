import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xf63a3b1CfEE73844d391adD8c8767bbdBBF8213C'
);

export default instance;
