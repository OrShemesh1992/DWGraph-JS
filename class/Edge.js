class Edge{
    #src;
    #dest;
    #weight;
    tag;
    constructor(src,dest,weight){
        this.#src=src;
        this.#dest=dest;
        this.#weight=weight;
        this.tag=0;
    }

     getSrc(){
        return this.#src;
    }

     getDest(){
        return this.#dest;
    }


     getWeight(){
        return this.#weight;
    }

    toString = function() {
        return "Src: " +  this.getSrc() + " Weight: " +  this.getWeight() + " Dest: " +  this.getDest();
      }
}


const e = new Edge(1,2,5.3);

console.log(""+e);