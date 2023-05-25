import axios from "axios";

async function fetchApi(data) {
  let key = `key=${process.env.REACT_APP_DEVELOPMENT_API_KEY}`;
  let resource = data.resource ? data.resource : "";
  let configObj = {
    url: `${process.env.REACT_APP_DEVELOPMENT_URL}&${key}${resource}`, //process.env.REACT_APP_DEVELOPMENT_URL + "&" + key,
    ...data,
  };
  console.log(configObj);
  try {
    let result = await axios(configObj);
    return result;
  } catch (error) {
    return error;
  }
}

export default fetchApi;
