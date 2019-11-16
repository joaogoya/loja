import { Product } from './product';
import { Client } from './clients';

export class SalesBase {
    customer: Client;
    items: Product[];
}
