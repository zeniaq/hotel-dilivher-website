/* eslint-disable no-nested-ternary */
import PropTypes from "prop-types";
import React, { useState } from "react";
import exportData from "./menus";
import Table, { Row, TitleCell, ContentCell } from "../Table";
import { titles, dataRows } from "./tables";
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
} from "./styled";
import AnchorList from "../AnchorList";
import MenuNav from "../MenuNav";
import RoomsCard from "../RoomsCard";
import Select from "../Select";
import { dataSelect } from "../FormInput/forms";
import FormInput from "../FormInput";

const ControlPanel = ({ myRol }) => {
    const [click, setClick] = useState(false);
    const [idRoom, setIdRoom] = useState({});
    const dataAdmin = exportData.dataAdmin.map((data) => (
        <AnchorList titleText={data.titleText} linkRef={data.linkRef} />
    ));
    const dataEmployee = exportData.dataEmployee.map((data) => (
        <AnchorList titleText={data.titleText} linkRef={data.linkRef} />
    ));
    const inputs = dataSelect.map((data) => (
        <FormInput
            typeInput={data.typeInput}
            titleText={data.titleText}
            defaultValue={data.defaultValue}
            min={data.min}
            max={data.max}
            typeForm={data.typeForm}
            nameField={data.nameField}
        />
    ));

    const titleRow = titles.map((data) => <TitleCell data={data.Value} />);
    const rows = dataRows.map((data) => (
        <Row>
            <ContentCell data={data.name} />
            <ContentCell data={data.age} />
            <ContentCell data={data.home} />
            <ContentCell data={data.mail} />
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
                            setIDRoom={setIdRoom}
                            IDRoom={idRoom}
                        />
                    </ul>
                    <Table titles={titleRow} rows={rows} />
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
