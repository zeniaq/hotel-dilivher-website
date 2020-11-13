/* eslint-disable no-nested-ternary */
import PropTypes from "prop-types";
import React, { useState } from "react";
import exportData from "./menus";
import { Nav, H1, DivContainer, Ul, DivMenu, Button } from "./styled";
import AnchorList from "../AnchorList";
import MenuNav from "../MenuNav";

const ControlPanel = ({ myRol }) => {
    const [click, setClick] = useState(false);

    const dataAdmin = exportData.dataAdmin.map((data) => (
        <AnchorList titleText={data.titleText} linkRef={data.linkRef} />
    ));
    const dataEmployee = exportData.dataEmployee.map((data) => (
        <AnchorList titleText={data.titleText} linkRef={data.linkRef} />
    ));
    return (
        <>
            <DivMenu>
                <Ul>
                    <Button
                        type="button"
                        id="menuButton"
                        buttonStyle={click ? "secundary" : "principal"}
                        onClick={() => setClick(!click)}
                    >
                        {click ? "Cerrar" : "Panel de Control"}
                    </Button>
                </Ul>
            </DivMenu>
            <MenuNav
                display={click}
                setDisplay={setClick}
                typeMenu={myRol}
                dataPanel={myRol === "Admin" ? dataAdmin : dataEmployee}
            />
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
