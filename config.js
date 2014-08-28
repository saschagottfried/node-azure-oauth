

module.exports.settings = {
    authUrl: 'https://login.windows.net/<your_directory_id>/oauth2/authorize',
    tokenUrl: 'https://login.windows.net/<your_directory_id>/oauth2/token',
    clientId: 'guid_for_configured_app',
    clientSecret: 'secret_for_configured_app',
    callbackUrl: 'url_for_your_app_called_by_azure_upon_completing_authentication',
    resource: 'https://graph.windows.net',
    mongodb: 'mongodb://MongoLab-1l:Y3n.k50P9WSll3qxdqaZ3VHrUBppUjjn68LYrc2jJlM-@ds035787.mongolab.com:35787/MongoLab-1l'
};
