import { Component, Vue } from 'vue-property-decorator'
import {Cell} from "@/model/Cell"

@Component
export default class Board<T> extends Vue{
    cells: Cell<T>[] = [];
    started: boolean = false;

    start():void{
	this.started = true;
	this.setNumOfNeiBomb();
	console.log("start", this.started);
    }

    setNumOfNeiBomb():void{
	for (let a of this.cells){
	    let count = 0;
	    for (let b of this.cells){
		if (a.adjacent(b.pos) && b.bomb){
		    count++
		}
	    }
	    a.num = count;
	}
    }
    open(cell: Cell<T>):void{
	//console.log(cell);
	if (cell.opened){
	    return
	}
	else{
	    cell.open();
	}
	if (cell.bomb || cell.num > 0 ){
	    return
	}
	else{
	    for (let a of this.cells){
		if (cell.adjacent(a.pos)){
		    this.open(a);
		}
	    }
	}
    }
}
