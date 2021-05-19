const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {
  const delay = randomIntegerFromInterval(200, 500);
  transaction.time=delay;

  return new Promise((resolve, reject) => {
    const canProcess = Math.random() > 0.3;
    setTimeout(() => {
      if (canProcess) {
        resolve(transaction);
      }
        reject(transaction);
    }, delay);
  });
};

const logSuccess = (transaction) => {
  console.log(`Transaction ${transaction.id} processed in ${transaction.time} ms`);
};

const logError = transaction => {
  console.warn(`Error processing transaction ${transaction.id}. Please try again later.`);
};


makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 71, amount: 230 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 72, amount: 75 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 73, amount: 100 })
  .then(logSuccess)
  .catch(logError);