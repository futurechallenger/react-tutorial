


export const CHANGE_COLOR = 'CHANGE_COLOR';
/**
 * `type` is a must have
 * @param {*} payload 
 */
export default function changeColorAction(payload = {}) {
  return {
    type: CHANGE_COLOR,
    payload,  // {color: 'yellow'} 
  }
}