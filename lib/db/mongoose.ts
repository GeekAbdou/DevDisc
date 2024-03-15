import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set('strictQuery', true);
  if (!process.env.MONGODB_URI)
    return console.log('MONGODB_URI is not set in .env file');

  if (isConnected) {
    return console.log('using existing database connection');
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'devdisc',
    });
    isConnected = true;
    console.log('DB_Connected');
  } catch (error) {
    console.log('error connecting to database:', error);
  }
};
