'use server';

import { connectToDatabase } from '../mongoose';

export async function createQuestion(params) {
  try {
    connectToDatabase();
    console.log('DB_Connected');
  } catch (err) {
    console.log(err);
  }
}
