

const simulateHttpRequestAndSaveToDb = async (data) => {

  return new Promise((resolve) => {
  
    setTimeout(() => {

      process.send(`Data : ${data}`);
      resolve()

  }, 1000);
  });


};



// Listen for messages from the main process
process.on('message', async (data) => {
  console.log(`Received data: ${data}`);
  await simulateHttpRequestAndSaveToDb(data);
  process.exit()
});
