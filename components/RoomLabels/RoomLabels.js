import {  Article1, Article2, P, Ul, Li } from "./styled";
import PropTypes from "prop-types";


const RoomLabels = ({ descriptionText, imageSrc, linkRef }) => (
    <Article1>
        <Ul>
            <Li>
                <Article2 style={{ backgroundImage: `url(${imageSrc})` }}>
                    <P>{descriptionText}</P>
                </Article2>
            </Li>
            
        </Ul>
    </Article1>


);

RoomLabels.propTypes = {

    descriptionText: PropTypes.string,
    imageSrc: PropTypes.string,
    linkRef: PropTypes.string,
};

RoomLabels.defaultProps = {

    descriptionText: "",
    imageSrc: "",
    linkRef: "",
};

export default RoomLabels;

