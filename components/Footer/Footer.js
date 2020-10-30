import { dataSocial } from "../Icon/icons";
import { dataMaster } from "../AnchorList/anchors";
import Icon from "../Icon";
import AnchorList from "../AnchorList/AnchorList";
import { FooterTag, Div, List1, List2 } from "./styled";

const Footer = () => {
    const data = dataSocial.map((icons) => (
        <Icon url={icons.url} iconSrc={icons.iconSrc} key={icons.iconSrc} />
    ));
    const data2 = dataMaster.map((anchors) => (
        <AnchorList
            titleText={anchors.titleText}
            titleText2={anchors.titleText2}
            linkRef={anchors.linkRef}
            key={anchors.titleText}
        />
    ));
    return (
        <>
            <FooterTag>
                <Div>
                    <List1>{data}</List1>
                    <List2>{data2}</List2>
                </Div>
            </FooterTag>
        </>
    );
};
export default Footer;
