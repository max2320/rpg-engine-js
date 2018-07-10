import Db from "./db";

export const dbQuery = async (sql)=>{
  if(!process.dbConnection){
    process.dbConnection = new Db();
  }

  console.info(`SQL::${sql}`);

  const db = await process.dbConnection.getConnection();

  return db.query(sql)
};
