import { Statement } from '@angular/compiler';

export class Case {
    static readonly EMPTY= 0;
    static readonly FULL = 1;
    static readonly CROSS= 2;

    constructor(private state: number){}

    public getState(){
        return this.state;
    }

    public changeState(){
        if (this.state == Case.EMPTY) {
            this.state = Case.FULL;
        } else {
            this.state = Case.EMPTY;
        }
    }

    public markState(){
        if (this.state == Case.CROSS) {
            this.state = Case.EMPTY;
        } else {
            this.state = Case.CROSS;
        }
        return false;
    }

    public equals(toCompare:Case){
        if((toCompare.getState() == Case.EMPTY || toCompare.getState() == Case.CROSS) && (this.state == Case.EMPTY || this.state==Case.CROSS)){
            return true;
        } 
        if (toCompare.getState() == Case.FULL && this.state == Case.FULL)
            return true;
        else
            return false;
    }
}
