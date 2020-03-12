import { NumberFormatStyle } from '@angular/common'

export class Pedido{
    constructor(
        public endereco: string,
        public numero: string,
        public complemento: string,
        public formaPagemento: string
    ){}
}