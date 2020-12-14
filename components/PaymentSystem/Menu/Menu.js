import {
    Ammount,
    Container,
    H1,
    P,
    Sup,
    PaySystem,
    Header,
    ImgLogo,
    Options,
    H2,
    Option,
    ImgPay,
    DivMenu,
    Anchor,
    H3,
} from "./styled";
// eslint-disable-next-line react/prop-types
const Menu = ({ setPayState }) => {
    return (
        <Container>
            <DivMenu>
                <Ammount>
                    <P>Total de compra</P>
                    <H1>
                        $10,000.00<Sup>MXN</Sup>
                    </H1>
                </Ammount>
                <PaySystem>
                    <Header>
                        <H2>Powered By:</H2>
                        <Anchor href="https://conekta.com">
                            <ImgLogo src="images/conekta.png" alt="Conekta" />
                        </Anchor>
                    </Header>
                    <Options>
                        <H2>Selecciona un método de pago</H2>
                        <Anchor onClick={() => setPayState(1)}>
                            <Option>
                                <H3>Tarjeta de credito o debito</H3>
                                <ImgPay src="images/mastercard.png" alt="Master Card" />
                                <ImgPay src="images/visa.png" alt="Visa" />
                                <ImgPay src="images/amex.png" alt="American Express" />
                            </Option>
                        </Anchor>
                        <Anchor onClick={() => setPayState(2)}>
                            <Option>
                                <H3>Efectivo</H3> <ImgPay src="images/oxxopay.png" alt="OXXOPay" />
                            </Option>
                        </Anchor>
                        <Anchor onClick={() => setPayState(3)}>
                            <Option>
                                <H3>Transferencia Interbancaria</H3>
                                <ImgPay src="images/spei.png" alt="SPEI" />
                            </Option>
                        </Anchor>
                    </Options>
                </PaySystem>
            </DivMenu>
        </Container>
    );
};

export default Menu;
