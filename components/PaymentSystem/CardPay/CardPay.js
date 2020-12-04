import {
    Form,
    Span,
    Date,
    DivPay,
    DivInfo,
    DivContainer,
    Img,
    Div,
    Label,
    Input,
    P,
    Anchor,
    Total,
    Button,
    Join,
    Title,
    Div1,
} from "./styled";
import { ImgLogo } from "../Menu/styled";
// eslint-disable-next-line react/prop-types
const CardPay = ({ setPayState }) => {
    return (
        <>
            <Form action="" method="POST" id="card-form" idVisible={1}>
                <DivContainer>
                    <DivInfo>
                        <Img src="icons/shoppcart.svg" />
                        <Total>$10,000.00</Total>
                        <P>
                            Powered by:{" "}
                            <Anchor href="https://conekta.com/" target="_blank">
                                <ImgLogo src="images/conekta.png" alt="Conekta" />
                            </Anchor>
                        </P>
                    </DivInfo>
                    <DivPay>
                        <Title>Pago con Tarjeta</Title>
                        <Div>
                            <Label>
                                <Span>Nombre del Tarjetahabiente</Span>
                                <Input
                                    type="text"
                                    id="name"
                                    size="20"
                                    data-conekta="card[name]"
                                    placeholder="Jordan Walke"
                                    required
                                />
                            </Label>
                        </Div>
                        <Div>
                            <Label>
                                <Span>Número de la tarjeta</Span>
                                <Input
                                    type="text"
                                    id="card"
                                    maxlength="16"
                                    size="16"
                                    onkeypress="return isNumberKey(event)"
                                    data-conekta="card[number]"
                                    placeholder="0000 0000 0000 0000"
                                    required
                                />
                            </Label>
                        </Div>
                        <Join>
                            <Div>
                                <Label>
                                    <Span>Fecha de expiración</Span>
                                    <Date>
                                        <Input
                                            type="text"
                                            id="month"
                                            size="2"
                                            data-conekta="card[exp_month]"
                                            placeholder="10"
                                            required
                                        />
                                        /
                                        <Input
                                            type="text"
                                            id="year"
                                            size="4"
                                            data-conekta="card[exp_year]"
                                            placeholder="2025"
                                            required
                                        />
                                    </Date>
                                </Label>
                            </Div>
                            <Div>
                                <Label>
                                    <Span>CVC</Span>
                                    <Input
                                        type="text"
                                        id="cvc"
                                        size="4"
                                        data-conekta="card[cvc]"
                                        placeholder="999"
                                        required
                                    />
                                </Label>
                            </Div>
                        </Join>
                        <Button type="submit">Validar</Button>
                    </DivPay>
                </DivContainer>
            </Form>
            <Div1>
                <Button type="submit" onClick={() => setPayState(0)}>
                    Regresar
                </Button>
            </Div1>
        </>
    );
};

export default CardPay;
