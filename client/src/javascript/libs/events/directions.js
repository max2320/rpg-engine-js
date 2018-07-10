


const UP_CODE = 119;
const DOWN_CODE = 115;
const LEFT_CODE = 97;
const RIGHT_CODE = 100;


export default class Direction{
  cases = {
    [UP_CODE]: {
      direction: 'UP_DIRECTION',
      math:{
        y: 1,
        x: 0
      }
    },
    [DOWN_CODE]: {
      direction: 'DOWN_DIRECTION',
      math:{
        y: -1,
        x: 0
      }
    },
    [LEFT_CODE]: {
      direction: 'LEFT_DIRECTION',
      math:{
        y: 0,
        x: -1
      }
    },
    [RIGHT_CODE]: {
      direction: 'RIGHT_DIRECTION',
      math:{
        y: 0,
        x: 1
      }
    }
  }

  constructor(callback){
    this.callback = callback;
    this.bindEvent();
  }


  handleKeyPress(e){
    const action = this.cases[e.which];
    if(action){
      this.callback(action)
    }
  }

  bindEvent(){
    window.addEventListener('keypress',(e)=>{
      this.handleKeyPress(e)
    });
  }
}
