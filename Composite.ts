/*composite means a thing made of several parts or elements; an object containing other objects(other composite and leaf objects)
  This pattern makes sense if your model can be represented as a tree (objects inside objects inside objects ...)
  Run a behaviour recursively down the tree for until leaves
*/

//common fnctionality for composite and leaf objects is to display price
interface ICommon{
    displayPrice():void;
}

class Leaf implements ICommon{
    name:string;
    price:number;

    constructor(name:string, price:number){
        this.name = name;
        this.price = price;
    }

    displayPrice(): void {
        console.log(`    - ${this.name} : costs ${this.price}`);
    }

}

class Composite implements ICommon{
    name:string;
    components: ICommon[] = [];

    constructor(name:string){
        this.name = name;
    }

    addComponent(component:ICommon){
        this.components.push(component);
    }

    displayPrice(): void {
        console.log(`Prices of ${this.name} composite objects`);
        for(let component of this.components){
            component.displayPrice();
        }
        
    }

}

//client code
const cpu = new Leaf('cpu',10000);
const ram = new Leaf('ram',15000);

const mouse = new Leaf('mouse',500);
const keyboard = new Leaf('keyboard',2000);

//composite obj having leaf objects
const motherBoard = new Composite('motherboard');
motherBoard.addComponent(cpu);
motherBoard.addComponent(ram);

const peripherals = new Composite('peripherals');
peripherals.addComponent(mouse);
peripherals.addComponent(keyboard);

//composite obj having composite and leaf objects
const comp = new Composite('Computer');
comp.addComponent(motherBoard);
comp.addComponent(peripherals);

console.log(comp.displayPrice());