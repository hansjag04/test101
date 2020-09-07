class BankService {
    async usdExchange() {
        const randomValue = (Math.random() * (580 - 590) + 595).toFixed(2)

        return new Promise(resolve => setTimeout(() => resolve(randomValue), 3000));
    }
}

module.exports = {
    BankService,
};
