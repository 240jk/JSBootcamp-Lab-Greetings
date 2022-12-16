import { Greeter } from "./greeter0-parent"

class HtmlGreeter extends Greeter {
    tagName:string;

    constructor(greeting:string, tagName:string){
        super(greeting);
        this.tagName = tagName;
    }

    greet (name:string, tagName:string) : string {
        return "<" + this.tagName + ">" + this.greeting + ", " + name + "!</" + this.tagName + ">"

    }

};

export { HtmlGreeter };