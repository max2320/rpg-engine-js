import { dbQuery } from '../config/connection';

export default class Base{
  constructor(){}

  async query(sql){
    return await dbQuery(sql);
  }

  table(){
    console.error("Not Implement");
  }

  columns(){
    console.error("Not Implement");
  }

  async getOne(id){
    let sql = `SELECT ${this.columns()} FROM ${this.table()} WHERE id = ${id}`;
    let res = await this.query(sql);

    return res.rows.length > 0 ? res.rows[0] : null;
  }

  async getAll(limit = undefined, page = 1){
    let limitString =  '';

    if(limit){
      const offset = page * limit;
      const limitString =  `LIMIT ${limit} OFFSET ${offset}`;
    }

    let sql = `SELECT ${this.columns()} FROM ${this.table()} ${limitString}`;
    let res = await this.query(sql);

    return res.rows;
  }
}
