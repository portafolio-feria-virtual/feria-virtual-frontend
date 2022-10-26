export interface IProcessSale {
    id:string;
    name:string;
    description:string;
    initDate:string;
    closeDate:string; //Fecha cierre solicitud 
    country: string; //Direccion
    region:string; //estado o region
    city: string;
    street: string;
    postalCode: string;       
    listProduct :IProductSale[]; //Productos Solicitados
    maxAmount:number; //Monto maximo estimado    
    processStatus:string; //Publicada
}

export interface IProductSale{
    id:string;
    name:string;
    amount:number; //Cantidad de producto solicitado en Kg(Kilogramos)
    //fkProcess:string;  //Conexion del proceso 
}