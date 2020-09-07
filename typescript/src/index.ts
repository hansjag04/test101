import { BankService } from '../../vendors/bank';

const bank = new BankService();
bank.usdExchange().then(value => console.log('\nUSD DE HOY: ', value, '\n'));
