

export default class BaseAction{
  const types = [
    'REQUEST',
    'SUCCESS',
    'FAILURE'
  ];

  prefix() {
    console.error("Not Implemented");
  }

  constructor(){

  }

  defineCreator(action){
    return {

    }
  }

  creators(){
    this.creatorsList().reduce({}(action)=>{
      return this.defineCreator(action, (payload, meta) => ({type: base[type], payload, meta}))
    })
  }
}
