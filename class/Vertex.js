export default class Vertex{
    #key;
    #pos;
    weight;
    tag;
    info;
    constructor(key,pos = [0,0]){
        this.#key=key;
        this.#pos=pos;
        this.weight=0;
        this.info="";
        this.tag=0;
    }

    getId(){
        return this.#key;
    }

    getPos(){
        return this.#pos;
    }

    setPos(pos){
        this.#pos=pos;
    }

    // toString = function() {
    //     return "Key: " +  this.getId() + " Point: " +  this.getPos() ;
    //   }

}

// const v1 = new Vertex(1,[1,2]);
// const v2 = new Vertex(3);

// console.log(""+v1);

// console.log(""+v2);

// v2.setPos([5,5]);

// console.log(""+v2);