import AnchorList from "../AnchorList/AnchorList";
import { dataLinks, dataForm } from "../AnchorList/anchors";
import { Nav, UlLinks, UlForm } from "./styled";

// eslint-disable-next-line react/prop-types
const MenuNav = ({ display, setDisplay }) => {
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
    return display ? (
        <Nav onClick={() => setDisplay(!display)} role="presentation">
            <UlLinks>{data1}</UlLinks>
            <UlForm>{data2}</UlForm>
        </Nav>
    ) : null;
};

export default MenuNav;
