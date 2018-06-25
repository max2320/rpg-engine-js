import Base from './base';

export default class User extends Base{
  table(){
    return 'user';
  }

  columns(){
    return 'id, name';
  }
}
