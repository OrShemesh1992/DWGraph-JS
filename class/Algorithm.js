import Graph from './Graph.js';
import {MinPriorityQueue} from '@datastructures-js/priority-queue';
class Algorithm {

    #g

    constructor(graph){
        this.#g=graph;
    }
    Dijkstra(src , dest){
        if(src === dest || !(src in this.#g.get_all_vertex())|| !(dest in this.#g.get_all_vertex())){
           console.log("No have a path");
        }
        this.#init();
        const pq = new MinPriorityQueue();
        var s=this.#g.get_all_vertex()[src];
       
        s.weight=0;
        pq.enqueue(s,s.weight);

        while(!(pq.isEmpty())){
            var u=pq.dequeue();
  
            for(const [key, value] of Object.entries(this.#g.get_all_edge(u["element"].getId()))){
                var v= this.#g.get_all_vertex()[key];
                // console.log(key,value);
                let dist = u["element"].weight + value; 
                if(dist < v.weight){
                    v.weight = dist;
                    v.info = u["element"].getId();
                    pq.enqueue(v,v.weight);
                }
            }
        }  

        
        var d=this.#g.get_all_vertex()[dest];
        if(d.weight!= Number.POSITIVE_INFINITY){
            console.log();
        }

        var arr =  dest+" ";

        var prev=d.info;
        while(prev != ""){
            arr = prev+" " +arr;
            prev = this.#g.get_all_vertex()[prev].info;
        }
    console.log(arr);
    }

    #init(){
        for(var key in this.#g.get_all_vertex()){
            this.#g.get_all_vertex()[key].weight=Number.POSITIVE_INFINITY;
            this.#g.get_all_vertex()[key].tag=0;
        }
    }
}

const g = new Graph();

g.add_vertex(1);
g.add_vertex(2);
g.add_vertex(3);
g.add_vertex(4);
g.add_vertex(5);

g.add_edge(1,2,50);
g.add_edge(2,3,50);
g.add_edge(1,3,150);
// g.add_edge(3,4,4);
// g.add_edge(4,5,5);
// g.add_edge(5,1,6);



 //queue.push([1,2]);
// queue.dequeue([2,3]);
// queue.dequeue([3,5]);
// queue.dequeue([4,4]);
// queue.dequeue([5,1]);



var a=new Algorithm(g);

a.Dijkstra(1,3);
