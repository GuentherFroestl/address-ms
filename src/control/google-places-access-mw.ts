import * as Request from 'request-promise-native';


export const googlePlacesAccessMW = async (apiKey: string, input:string): Promise<string> => {

    let uri = `https://google.com/${apiKey}?input=${input}`;
    let options = {
        method: 'GET',
        uri: uri,
        json: { restrictions: {} }
    };
    let resp = await Request(options);
    return resp;
};