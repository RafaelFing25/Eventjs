class Eventjs{
    events :any= {};
    on = (event:string,cb:Function)=>{
      this.events[event] = this.events[event] || []
      this.events[event].push(cb)
    };
    emmit = (event:string, ...rest:Array<any>) =>{
      if(!this.events[event])
        return
      this.events[event].forEach((cb:Function) => {
        cb(...rest)
      });
    }
    leave = (event:string)=>{
      this.events[event].splice(this.events[event].indexOf(event),1)
    }
  }
  
  
  
  
  export default Eventjs