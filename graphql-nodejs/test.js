const fetch = import('node-fetch');
const GRAPHQL_ENDPOINT ='https://fyi63dmhc5bwthur6rifat6o4q.appsync-api.ap-south-1.amazonaws.com/graphql' 
// process.env.API_<DummyGraphQl>_GRAPHQLAPIENDPOINTOUTPUT;
const GRAPHQL_API_KEY ='kdcpsnbav5h7raezl4e72xqrcy'


const query = /* GraphQL */ `
query MyQuery {
    getCodeimprove(id: "123") {
      name
      id
      emailid
    }
  }
`;

async function fetchDataFromAppSync() {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': GRAPHQL_API_KEY, // Include this header if using API key authorization
    },
    body: JSON.stringify({ query }),
  };

  try {
    const response = await fetch(GRAPHQL_ENDPOINT, options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchDataFromAppSync();
