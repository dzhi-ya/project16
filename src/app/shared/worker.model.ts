export interface MyWorker {
  id?: number;
  name: string;
  surname: string;
  patronymic:string;
  phone: string;
  email:string;
  birthday: string;
  type: number;
}

export enum MyWorkerType {
  IT,
  sales, 
  delivery, 
  lawyers
}

