import { Pool } from 'pg';

export default class Db{
  pool = null;

  constructor(){
    this.createClient();
  }

  createClient(){
    if(!this.pool){
      this.pool = new Pool({
        connectionString: process.env.DATABASE_URL
      });
      console.log("Connection:" + process.env.DATABASE_URL);
    }
  }

  async getConnection(){
    return this.pool;
  }
}
