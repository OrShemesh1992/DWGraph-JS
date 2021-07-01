
 import Edge from './Edge.js';
 import Vertex from './Vertex.js';


 export default class Graph {
     #Edges ; 
     #Vertexs ; 
     #mc;
     #size_edge;
     constructor(){
        this.#Edges={};
        this.#Vertexs={};
        this.#mc=0;
        this.#size_edge=0;
     }
     
     Vertex_size(){
        return Object.keys(this.#Vertexs).length;
     }

     edge_size(){
         return this.#size_edge;
     }

     get_all_vertex(){
         return this.#Vertexs;
     }

     get_all_edge(id){
         if(id in this.#Edges){
         return this.#Edges[id];
         }else{
             return {};
         }
     }
     get_mc(){
         return this.#mc;
     }

     add_edge(id1,id2,weight){
         if(weight>0 && id1!==id2 && id1 in this.#Vertexs && id2 in this.#Vertexs && !(id2 in this.#Edges[id1])){
            this.#Edges[id1][id2]=weight;
            this.#mc++;
            this.#size_edge++;
            return true;
         }else{
             return false;
         }
     }

     add_vertex(id,pos = [0,0]){
         if(!(id in this.#Vertexs)){
            let v = new Vertex(id,pos);
            this.#Vertexs[id] = v;
            this.#Edges[id]={};
            this.#mc++;
            return true;
         }else{
            return false;
         }
     }

     remove_vertex(id){
         if(id in this.#Vertexs){

            for(var key in this.#Edges){
                if(id in this.#Edges[key]){
                    delete this.#Edges[key][id]; 
                    this.#mc++;
                    this.#size_edge--;
                }
            }


            for(var key in this.#Edges[id]){
                delete this.#Edges[id][key];
                this.#mc++;
                this.#size_edge--;
            }

            delete this.#Vertexs[id];
            this.#mc++;
            return true;
         }else{
             return false;
         }
     }
     remove_edge(id1,id2){
        if(id1!==id2 && id1 in this.#Vertexs && id2 in this.#Vertexs && id2 in this.#Edges[id1]){
           delete this.#Edges[id1][id2];
           this.#mc++;
           this.#size_edge--;
           return true;
        }else{
            return false;
        }
    }
}



// const g = new Graph();

// g.add_vertex(1);
// g.add_vertex(2);
// g.add_vertex(3);
// g.add_vertex(4);
// g.add_vertex(5);

// g.add_edge(1,2,2);
// g.add_edge(2,3,3);
// g.add_edge(3,4,4);
// g.add_edge(4,5,5);
// g.add_edge(5,1,6);

// console.log(g.get_all_edge(1)[2]);
//  const e = new Edge(1,2,5.3);
//  const v = new Vertex(1);
// console.log(e);
// console.log(v);

//  const g = new Graph();
// console.log("vertex:",g.Vertex_size());
// g.add_vertex(1);
// console.log("vertex:",g.Vertex_size());
// console.log("mc:",g.get_mc());

// console.log(g.get_all_vertex()[1].getId());


// console.log(g.add_edge(1,2,8));
// g.add_vertex(2);

//  console.log(g.add_edge(1,2,8));

//  console.log(g.add_edge(2,1,8));
//  console.log("size v ",g.Vertex_size());
//  console.log("size e ",g.edge_size());
//  console.log("size mc ",g.get_mc());
// g.remove_vertex(2);
// console.log("size v ",g.Vertex_size());
// console.log("size e ",g.edge_size());
// console.log("size mc ",g.get_mc());
//  console.log(g.remove_edge(1,2));

