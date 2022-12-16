import { Greeter } from "./greeter0-parent"

class JavaScriptGreeter extends Greeter {

    constructor (greeting:string){
        super (greeting)
    }

    greet() : string {
        return this.greeting + ", " + name + "!";
        
        
    }
    console.log(this.greet())
}


export { JavaScriptGreeter };