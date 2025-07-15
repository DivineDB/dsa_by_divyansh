// ----------------Custom Array------------------------------

class ArrayDb {
    constructor (){
        this.data = {};
        this.length = 0;
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        // console.log(`${item} has been added to the array!`);
        return newArrayDb;
    }

    get(index){
        return this.data[index];
    }

    pop(){
        const LastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        console.log(`The last item ${LastItem} has been removed from the array!`);
    }

    shift(){
        const FirstElement = this.data[0];
        for(let i = 0;i<this.length;i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
        return `${FirstElement} has been deleted from the Array!`;

    }

    remove(index){
        const item = this.data[index];
        for(let i = index;i<this.length-1;i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length -1];
        this.length--;
        return `${item} has been removed from the Array!`;
    }
}

const newArrayDb = new ArrayDb();

newArrayDb.push("Apple");
newArrayDb.push("Mango");
newArrayDb.push("Cucumber");
newArrayDb.push("Tomato");


console.log(newArrayDb);






