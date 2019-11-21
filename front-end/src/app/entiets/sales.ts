import { Product } from './product';
import { Client } from './clients';

export class Sales {
    status: string;
    id: string;
    number: number;
    createDate: Date;
    __v: number;
    customer: Client;
    items: any[];
}
