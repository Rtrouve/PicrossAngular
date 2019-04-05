import { Statement } from '@angular/compiler';

export class Case {
    static readonly EMPTY = 0;
    static readonly FULL = 1;
    static readonly CROSS = 2;
    private color: string;

    constructor(private state: number= 0, colorArg?: string) {
        if (colorArg) {
            this.color = colorArg;
        } else {
            const tempColor = Math.floor(Math.random() * 4) + 1;
            switch (tempColor) {
                case 0:
                    this.color = 'white';
                    break;
                case 1:
                    this.color =  'red';
                    break;
                case 2:
                    this.color =  'green';
                    break;
                case 3:
                    this.color =  'yellow';
                    break;
                case 4:
                    this.color =  'blue';
                    break;
                default:
                    this.color =  'black';
                    break;
            }
        }
    }

    public getColor() {
        return this.color;
    }

    public getState() {
        return this.state;
    }

    public changeState() {
        if (this.state === Case.EMPTY) {
            this.state = Case.FULL;
        } else {
            this.state = Case.EMPTY;
        }
    }

    public markState() {
        if (this.state === Case.CROSS) {
            this.state = Case.EMPTY;
        } else {
            this.state = Case.CROSS;
        }
        return false;
    }

    public equals(toCompare: Case) {
        if ((toCompare.getState() === Case.EMPTY || toCompare.getState() === Case.CROSS)
        && (this.state === Case.EMPTY || this.state === Case.CROSS)) {
            return true;
        }
        if (toCompare.getState() === Case.FULL && this.state === Case.FULL) {
            return true;
        } else {
            return false;
        }
    }
}
