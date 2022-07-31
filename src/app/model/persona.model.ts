export class persona{
     id?:number ;
     nombre:string;
    apellido:string;
    img:string;
    descripcion: any;

constructor(nombre: string, apellido: string, img: string){
    this.nombre = nombre;
    this.apellido = apellido;
    this.img = img;
    this.descripcion;
}
}
