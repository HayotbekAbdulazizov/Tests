import {fork} from 'child_process'  

const numWorkers = 5; // Количество child process, которые вы хотите создать

for (let i = 0; i < numWorkers; i++) {
  const worker = fork('./worker.js'); // Создаем новый child process для каждого worker.js

  worker.on('message', (result) => {
    console.log('result from child process:', result);
  });

  // Отправляем данные для каждого child process
  let obj = {
    name:"bek",
    age: 18
  }


  worker.send(200);
}
