import PropTypes from "prop-types";
import AnchorList from "../AnchorList/AnchorList";
import { dataLinks, dataForm, dataEmployee } from "../AnchorList/anchors";
import { Nav, UlLinks, UlForm, Li, Anchor, Img, UlEmployee, P } from "./styled";
import { Ul } from "../ControlPanelPage/styled";
// eslint-disable-next-line react/prop-types
const MenuNav = ({ display, setDisplay, typeMenu, dataPanel }) => {
    const data1 = dataLinks.map((anchors) => (
        <AnchorList
            titleText={anchors.titleText}
            titleText2={anchors.titleText2}
            linkRef={anchors.linkRef}
        />
    ));
    const data2 = dataForm.map((anchors) => (
        <AnchorList
            titleText={anchors.titleText}
            linkRef={anchors.linkRef}
            styleProp={anchors.styleProp}
        />
    ));
    const data3 = dataEmployee.map((anchors) => (
        <AnchorList
            titleText={anchors.titleText}
            linkRef={anchors.linkRef}
            styleProp={anchors.styleProp}
        />
    ));
    return display ? (
        <Nav onClick={() => setDisplay(!display)} role="presentation" dataPanel={dataPanel}>
            {dataPanel ? (
                <Ul>{dataPanel}</Ul>
            ) : (
                <>
                    {typeMenu === "Employee" ? (
                        <UlEmployee>
                            <Li>
                                <Anchor href="#k">
                                    <Img src="icons/user.svg" alt="Profile icon" />
                                    <br />
                                    <P>
                                        Tony Stark <hr /> Director
                                    </P>
                                </Anchor>
                            </Li>
                        </UlEmployee>
                    ) : null}
                    <UlLinks>{data1}</UlLinks>
                    <UlForm>{typeMenu === "Employee" ? data3 : data2}</UlForm>
                </>
            )}
        </Nav>
    ) : null;
};
MenuNav.propTypes = {
    typeMenu: PropTypes.string,
    dataPanel: PropTypes.string,
};
MenuNav.defaultProps = {
    typeMenu: "",
    dataPanel: "",
};

export default MenuNav;
