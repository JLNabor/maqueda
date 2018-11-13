import { Base } from "./base";

export class Etravel extends Base{
    public imgName:string;
    public urlEtravel:string;
    public type:EtravelType;
}

export enum EtravelType {
    Destination = 0,
    Hotel = 1,
    Tour = 2,
    Car = 3,
    Shuttle = 4
  }