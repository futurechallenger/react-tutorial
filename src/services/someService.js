/**
 * A service, doing something
 * @param {string} taskName 
 */
export default function someService(taskName) {
  console.log(`Some service ${taskName}`);
  return `Serving task ${taskName || 'some task'}!`;
}