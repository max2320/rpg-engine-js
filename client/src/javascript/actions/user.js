import BaseAction from './base';

class UserAction extends BaseAction{
  prefix(){
    return User
  }

  
}


export const instance = new UserAction();
