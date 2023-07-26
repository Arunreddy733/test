const AWS = require('aws-sdk');
AWS.config.update({
    accessKeyId: 'AKIA4ORNI64FAKERXNUR',
    secretAccessKey: 'MBp96zHkXxHDBGkPxQL28YUvi7Goau8oK9dtDL5N',
    region: 'ap-south-1', // e.g., 'us-east-1'
});
const appsync = new AWS.AppSync();
const apiUrl = 'https://fyi63dmhc5bwthur6rifat6o4q.appsync-api.ap-south-1.amazonaws.com/graphql';
