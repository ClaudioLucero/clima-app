import { Temp } from './Temp';

export interface City {
    name:string
    id:number
    temps:Temp[]
    fav:bool
}
