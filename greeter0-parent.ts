class Greeter {
    greeting:string;

    constructor(greeting:string){
        this.greeting = greeting;
    }

    greet(name:string) : string {
        return this.greeting + ", " + name + "!"
    }
}
let test = new Greeter("Hello");
test.greet("Joe");
console.log(test.greet("Joe"));

export { Greeter };