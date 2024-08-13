const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3001,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    mongoUri: process.env.MONGODB_URI || "mongodb+srv://joeyweee:520520Shi@cluster0.qhnik17.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" || 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017') + '/mernproject',
    apiBaseUrl: 'https://jaxz-group.onrender.com' || 'http://localhost:3000'
  };
  
  export default config;
