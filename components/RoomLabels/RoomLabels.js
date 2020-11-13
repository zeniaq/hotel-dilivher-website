import PropTypes from "prop-types";
import {Li, DivCard, Figure, Img, DivText, DivInfo, P, Strong, Anchor } from "./styled";
import { FormButton } from "../FormInput";

const RoomLabels = ({
    roomID,
    roomName,
    imageSrc,
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
                    </DivInfo>
                    <Anchor>
                        <FormButton
                            textButton="Añadir"
                            typeButton="card"
                            onClick={() => {
                                const ROOM = IDRoom;
                                ROOM.push(roomID);
                                setIDRoom(ROOM);
                            }}
                        />
                    </Anchor>
                </DivText>
            </DivCard>
        </Li>
        
    );
};
RoomLabels.propTypes = {
    roomID: PropTypes.string,
    roomName: PropTypes.string,
    imageSrc: PropTypes.string,
};

RoomLabels.defaultProps = {
    roomID: "",
    roomName: "",
    imageSrc: "",
};
export default RoomLabels;
