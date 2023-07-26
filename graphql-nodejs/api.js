import { default as fetch, Request } from 'node-fetch';
const GRAPHQL_ENDPOINT ='https://fyi63dmhc5bwthur6rifat6o4q.appsync-api.ap-south-1.amazonaws.com/graphql' 
const GRAPHQL_API_KEY ='da2-trmypwhe2fctzemoqj65ufntue'
const query = /* GraphQL */ `
query MyQuery {
    getCodeimprove(id: "123") {
      name
      id
      emailid
    }
  }
`;
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

handler()
async function handler(){
  

  /** @type {import('node-fetch').RequestInit} */
  const options = {
    method: 'POST',
    headers: {
      'x-api-key': GRAPHQL_API_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  };


  const request = new Request(GRAPHQL_ENDPOINT, options);

  let statusCode = 200;
  let body;
  let response;

  try {
    response = await fetch(request);
    body = await response.json();
    console.log(body);
    if (body.errors) statusCode = 400;
  } catch (error) {
    statusCode = 400;
    body = {
      errors: [
        {
          status: response.status,
          message: error.message,
          stack: error.stack
        }
      ]
    };
  }

  return {
    statusCode,
    body: JSON.stringify(body)
  };
 
};
