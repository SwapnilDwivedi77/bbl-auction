import axios from 'axios'
export async function readJSONFile(url) {
    try {
      const response = await axios.get(url);
      const jsonData = response.data;
      return jsonData.data;
    } catch (error) {
      console.error(error);
      // handle error
    }
  }


  export function isEmpty(element) {
    if (element === null || element === undefined) {
      return true;
    }
    if (typeof element === 'string' || Array.isArray(element)) {
      return element.length === 0;
    }
    if (typeof element === 'object') {
      return Object.keys(element).length === 0;
    }
    return false;
  }

  export function writeToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  export function readFromLocalStorage(key) {
    const value = localStorage.getItem(key) || '';
    return !isEmpty(value) ? JSON.parse(value) : null;
  }
  
  export function removeFromLocalStorage(key) {
    localStorage.removeItem(key);
  }
