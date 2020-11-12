import PropTypes from "prop-types";
import { Li, DivCard, Figure, Img, DivText, DivInfo, P, Strong } from "./styled";
import { FormButton } from "../FormInput";

const RoomsCard = ({
    roomID,
    roomName,
    imageSrc,
    roomCapacity,
    roomBeds,
    roomPrice,
    roomWC,
    roomAvailabity,
    // eslint-disable-next-line react/prop-types
    setIDRoom,
    // eslint-disable-next-line react/prop-types
    IDRoom,
}) => {
    return (
        <Li key={roomID}>
            <DivCard>
                <Figure data-title-item={roomName}>
                    <Img alt={roomName} src={imageSrc} />
                </Figure>
                <DivText>
                    <DivInfo>
                        <P>
                            <Strong>Habitacion:</Strong> {roomName}
                        </P>
                        <P>
                            <Strong>Baño:</Strong> {roomWC}
                        </P>
                    </DivInfo>
                    <DivInfo>
                        <P>
                            <Strong>Personas:</Strong> {roomCapacity}
                        </P>
                        <P>
                            <Strong>Camas:</Strong> {roomBeds}
                        </P>
                    </DivInfo>
                    <DivInfo>
                        <P>
                            <Strong>Precio:</Strong> ${roomPrice}
                        </P>
                        <P>
                            <Strong>Disponible:</Strong> {roomAvailabity ? "Si" : "No"}
                        </P>
                    </DivInfo>
                    <DivInfo>
                        <FormButton
                            textButton="Añadir"
                            typeButton="card"
                            onClick={() => {
                                const ROOM = IDRoom;
                                ROOM.push(roomID);
                                setIDRoom(ROOM);
                            }}
                        />
                    </DivInfo>
                </DivText>
            </DivCard>
        </Li>
    );
};
RoomsCard.propTypes = {
    roomID: PropTypes.string,
    roomName: PropTypes.string,
    roomPrice: PropTypes.string,
    roomCapacity: PropTypes.string,
    roomWC: PropTypes.string,
    roomAvailabity: PropTypes.string,
    roomBeds: PropTypes.string,
    imageSrc: PropTypes.string,
};

RoomsCard.defaultProps = {
    roomID: "",
    roomName: "",
    roomPrice: "",
    roomCapacity: "",
    roomAvailabity: "",
    roomBeds: "",
    imageSrc: "",
    roomWC: "",
};
export default RoomsCard;
