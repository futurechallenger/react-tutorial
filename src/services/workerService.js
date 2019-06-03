export default function runWorker(data) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('../workers/someTask.js', {type: 'module'});

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