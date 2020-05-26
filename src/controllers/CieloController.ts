import { Request, Response } from 'express'
import {
    Cielo,
    CieloConstructor,
    TransactionCreditCardRequestModel,
    EnumBrands,
    EnumCardType
} from 'cielo';



class CieloController {
    public async index(req: Request, res: Response): Promise<Response> {

        const cieloParams: CieloConstructor = {
            merchantId: 'dbe5e423-ed15-4c27-843a-fedf325ea67c',
            merchantKey: 'NPGKHFARFASEZEPYEYLTXJMWACSWDEMJWBAKWPQD',
            sandbox: true, // Opcional - Ambiente de Testes
        }
        
        const cielo = new Cielo(cieloParams);

        const vendaParams: TransactionCreditCardRequestModel = {
            customer: {
                name: "Comprádor Teste Cíéló Áá",
            },
            merchantOrderId: "TypescriptSDK-banzeh",
            payment: {
                amount: 10000,
                creditCard: {
                    brand: EnumBrands.VISA,
                    cardNumber: "4532117080573700",
                    holder: "Comprador T Cielo",
                    expirationDate: "12/2021",
                },
                installments: 1,
                softDescriptor: "Banzeh",
                type: EnumCardType.CREDIT,
                capture: false,
            },
        };
        cielo.creditCard.transaction(vendaParams)
            .then((venda) => console.log('VENDA CIELO', JSON.stringify(venda, null, '\t')))
            .catch((err) => console.error(err));

        return res.json([{
            cu: 'pato'
        }])
    }
}

export default new CieloController()
