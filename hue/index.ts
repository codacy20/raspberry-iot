import { config } from "dotenv";

config();
const ip = process.env.IP;
const key = process.env.KEY;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const bridgeUrl = `https://${ip}/api`;
import got from "got";

const getLights = async () => {
  try {
    const url = `${bridgeUrl}/${key}/lights`;    
    const response = await got(url);
    console.log(response.body);
    //=> '<!doctype html> ...'
  } catch (error: any) {
    console.log(error.body);
    //=> 'Internal server error ...'
  }
};

getLights();
