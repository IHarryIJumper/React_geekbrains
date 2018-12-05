const config = {
    db: {
        postgres: {
            host: 'localhost', // server name or IP address;
            port: 5432,
            database: 'postgres',
            user: 'admin',
            password: 'admin'
        }
    },
    server: {
        port: 8080,
        host: 'localhost'
    },   
};

module.exports = config;
