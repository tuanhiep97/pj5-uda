// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = "psuqflyjr4";
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`;

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: "dev-z0tw1lylaovmbofa.us.auth0.com", // Auth0 domain
  clientId: "KrWlqCA7bqUA40mFspuLPEuw7fmr4c19", // Auth0 client id
  callbackUrl: "http://a1245d6aeceed4813b40138c4a0f9cc9-917788837.us-east-1.elb.amazonaws.com:8080/callback",
};
