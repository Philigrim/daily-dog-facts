module.exports = {
    oauth: {
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
        GOOGLE_REDIRECT_URL: process.env.BASE_URL + '/auth/google/contacts/callback'
    },
    encryption: {
        key: process.env.ENCRYPTION_KEY,
        algorithm: process.env.ENCRYPTION_ALGORITHM
    },
    session: {
        secret: process.env.SESSION_SECRET
    },
    ifttt: {
        apiKey: process.env.IFTTT_API_KEY
    },
    apiai: {
        accessToken: process.env.APIAI_ACCESS_TOKEN
    },
    database: {
        host: 'ds157298.mlab.com',
        port: '57298',
        name: 'cat-facts',
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        url() {
            return `mongodb://${this.username}:${this.password}@$cat-facts-ii0uq.mongodb.net/test`;
        }
    },
    generalAccessToken: process.env.GENERAL_ACCESS_TOKEN
};
