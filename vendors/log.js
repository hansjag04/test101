class Logger {
    async log(message) {
        return new Promise(resolve => setTimeout(() => {
            console.log('Logged message: ', message);

            resolve();
        }, 1000));
    }
}

module.exports = {
    Logger,
};
