import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { Button } from "../CardPay/styled";
import {
    Container,
    OxxoPay,
    Header,
    Reminder,
    Info,
    Brand,
    Ammount,
    Reference,
    Instructions,
    FootNote,
    Img,
    P,
    Sup,
    TitleH1,
    TitleH2,
    TitleH3,
    OrderList,
    Item,
    Strong,
    DivPrint,
} from "../CashPay/styled";

const Payment = () => {
    return (
        <Container>
            <OxxoPay>
                <Header>
                    <Reminder>Ficha digital. No es necesario imprimir.</Reminder>
                    <Info>
                        <Brand>
                            <Img src="images/spei.png" alt="TranferPay" />
                        </Brand>
                        <Ammount>
                            <TitleH3>Monto a pagar</TitleH3>
                            <TitleH2>
                                $10,000.00
                                <Sup>MXN</Sup>
                            </TitleH2>
                            <P>Utiliza exactamente esta cantidad al realizar el pago.</P>
                        </Ammount>
                    </Info>
                    <Reference>
                        <TitleH3>CLABE</TitleH3>
                        <TitleH1>0000000000000000000</TitleH1>
                    </Reference>
                </Header>
                <Instructions>
                    <TitleH3>Instrucciones</TitleH3>
                    <OrderList>
                        <Item>Accede a tu banca en línea.</Item>
                        <Item>
                            Da de alta la CLABE en esta ficha.
                            <Strong>El banco deberá de ser STP</Strong>.
                        </Item>
                        <Item>
                            Realiza la transferencia correspondiente por la cantidad exacta en esta
                            ficha, <Strong>de lo contrario se rechazará el cargo</Strong>.
                        </Item>
                        <Item>
                            Al confirmar tu pago, el portal de tu banco generará un comprobante
                            digital.
                            <Strong>
                                En el podrás verificar que se haya realizado correctamente.
                            </Strong>
                            Conserva este comprobante de pago.
                        </Item>
                    </OrderList>
                    <FootNote>
                        Al completar estos pasos recibirás un correo confirmando tu pago.
                    </FootNote>
                </Instructions>
            </OxxoPay>
        </Container>
    );
};
class ComponentToPrint extends React.PureComponent {
    render() {
        return <Payment />;
    }
}

// eslint-disable-next-line react/prop-types
const TransferPay = ({ setPayState }) => {
    const componentRef = useRef();
    return (
        <div>
            <ComponentToPrint ref={componentRef} />
            <ReactToPrint
                trigger={() => (
                    <Container>
                        <DivPrint>
                            <Button type="submit">Guardar referencia</Button>
                        </DivPrint>
                    </Container>
                )}
                content={() => componentRef.current}
            />
            <Container>
                <DivPrint>
                    <Button type="submit" onClick={() => setPayState(0)}>
                        Regresar
                    </Button>
                </DivPrint>
            </Container>
        </div>
    );
};
export default TransferPay;
