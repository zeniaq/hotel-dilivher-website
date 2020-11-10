import PropTypes from "prop-types";
import Head from "next/head";
import Navigation from "../Navigation";
import Footer from "../Footer";
import Div from "./styled";
import SectionContact from "../SectionContact";

const PrincipalLayout = ({ children, contact, title, typeMenu }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Hotel Dilivher WebSite" />
            </Head>
            <Navigation typeMenu={typeMenu} />
            <Div>{children}</Div>
            {contact ? <SectionContact /> : null}
            <Footer />
        </>
    );
};
PrincipalLayout.propTypes = {
    children: PropTypes.node.isRequired,
    contact: PropTypes.string,
    title: PropTypes.string,
    typeMenu: PropTypes.string,
};
PrincipalLayout.defaultProps = {
    contact: "",
    title: "",
    typeMenu: "",
};
export default PrincipalLayout;
