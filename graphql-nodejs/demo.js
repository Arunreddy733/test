
const axios = require('axios');
const query = `
query MyQuery {
    getCodeimprove(id: "123") {
      name
      id
      emailid
    }
  }
  
`;
axios
    .post(apiUrl, {
        query
    }, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        console.log('Response:', response.data.data);
    })
    .catch(error => {
        console.error('Error:', error.response.data);
    });


