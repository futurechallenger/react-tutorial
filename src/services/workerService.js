export default function runWorker(workerPath='../workers/someTask.js', data) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('../workers/someTask.js', {type: 'module'});

    // This may cause `module script does not support` error.
    // const worker = new Worker(workerPath, {type: 'module'}); 
    worker.onmessage = (event) => {
      console.log('===>event from worker', event);
      resolve(event.data);
    };

    worker.onerror = (event) => {
      reject(event.data);
    }

    worker.postMessage(data || {});
  });
}