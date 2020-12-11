/* eslint-disable no-nested-ternary */
import PropTypes from "prop-types";
import React, { useState } from "react";
import exportData from "./menus";
import Table, { Row, TitleCell, ContentCell } from "../Table";
import { titles, dataRows } from "./tables";
import Menu, { CardPay, CashPay, TransferPay } from "../PaymentSystem";
import Tab from "../Tab";
import ButtonAction from "../Button";
import {
    Nav,
    H1,
    DivContainer,
    Ul,
    DivMenu,
    Button,
    DivMain,
    DivSecundary,
    Header,
    Img,
    P,
    DivTable,
} from "./styled";
import AnchorList from "../AnchorList";
import MenuNav from "../MenuNav";
import RoomsCard from "../RoomsCard";
import Select from "../Select";
import { dataSelect } from "../FormInput/forms";
import FormInput, { FormButton } from "../FormInput";

const ControlPanel = ({ myRol }) => {
    const [click, setClick] = useState(false);
    const [cancel, setCancel] = useState(false);
    const [paySystem, setPaySystem] = useState(0);
    const dataAdmin = exportData.dataAdmin.map((data) => (
        <AnchorList titleText={data.titleText} linkRef={data.linkRef} key={data.titleText} />
    ));
    const dataEmployee = exportData.dataEmployee.map((data) => (
        <AnchorList titleText={data.titleText} linkRef={data.linkRef} key={data.titleText} />
    ));
    const inputs = dataSelect.map((data) => (
        <FormInput
            key={data.titleText}
            typeInput={data.typeInput}
            titleText={data.titleText}
            defaultValue={data.defaultValue}
            min={data.min}
            max={data.max}
            typeForm={data.typeForm}
            nameField={data.nameField}
        />
    ));

    const titleRow = titles.map((data) => <TitleCell key={data.Value}>{data.Value}</TitleCell>);
    const rows = dataRows.map((data) => (
        <Row key={data.name}>
            <ContentCell>{data.name}</ContentCell>
            <ContentCell>{data.age}</ContentCell>
            <ContentCell>{data.home}</ContentCell>
            <ContentCell>
                <ButtonAction typeButton="confirm" />
                <ButtonAction typeButton="cancel" />
                {data.mail}
            </ContentCell>
        </Row>
    ));

    return (
        <>
            <MenuNav
                display={click}
                setDisplay={setClick}
                typeMenu={myRol}
                dataPanel={myRol === "Admin" ? dataAdmin : dataEmployee}
            />

            <DivMain>
                <DivContainer>
                    <H1>{myRol}</H1>
                    {myRol === "Admin" ? (
                        <Nav>
                            <Ul>{dataAdmin}</Ul>
                        </Nav>
                    ) : myRol === "Employee" ? (
                        <Nav>
                            <Ul>{dataEmployee}</Ul>
                        </Nav>
                    ) : (
                        <h1>Usuario no permitido</h1>
                    )}
                </DivContainer>
                <DivSecundary>
                    <DivMenu>
                        <Header click={click}>
                            <Button
                                type="button"
                                id="menuButton"
                                onClick={() => setClick(!click)}
                                buttonStyle={click ? "secundary" : "principal"}
                            >
                                {click ? null : "Panel de Control"}
                                <Img
                                    src={click ? "icons/close.svg" : "icons/bars.svg"}
                                    click={click}
                                />
                            </Button>
                        </Header>
                    </DivMenu>
                    <Select mapSelect={inputs} textButton="Buscar" />
                    <ul>
                        <RoomsCard
                            imageSrc="images/banner.jpg"
                            roomBeds="2"
                            roomAvailabity="Si"
                            roomID="1"
                            roomCapacity="2"
                            roomName="Aliquam"
                            roomPrice="2000"
                            roomWC="No"
                            cancel={cancel}
                            setCancel={setCancel}
                        />
                        <RoomsCard
                            imageSrc="images/banner.jpg"
                            roomBeds="2"
                            roomAvailabity="Si"
                            roomID="1"
                            roomCapacity="2"
                            roomName="Aliquam"
                            roomPrice="2000"
                            roomWC="No"
                            cancel={cancel}
                            setCancel={setCancel}
                        />
                        <P>
                            <FormButton
                                textButton="Cancelar todo"
                                typeButton="cancelar"
                                actionEvent={() => setCancel(true)}
                            />
                        </P>
                    </ul>
                    <DivTable>
                        <Table titles={titleRow} rows={rows} />
                    </DivTable>
                    <Tab />
                    {paySystem === 0 ? (
                        <Menu setPayState={setPaySystem} />
                    ) : paySystem === 1 ? (
                        <CardPay setPayState={setPaySystem} />
                    ) : paySystem === 2 ? (
                        <CashPay setPayState={setPaySystem} />
                    ) : paySystem === 3 ? (
                        <TransferPay setPayState={setPaySystem} />
                    ) : null}
                </DivSecundary>
            </DivMain>
        </>
    );
};

ControlPanel.propTypes = {
    myRol: PropTypes.string,
};

ControlPanel.defaultProps = {
    myRol: "",
};
export default ControlPanel;
