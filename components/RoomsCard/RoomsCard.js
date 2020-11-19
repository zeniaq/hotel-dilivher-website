/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-return-await */
import PropTypes from "prop-types";
import React, { useState } from "react";
import {
    Li,
    DivCard,
    Figure,
    Img,
    DivText,
    DivInfo,
    P,
    Strong,
    ButtonCount,
    DivButton,
    Counter,
    DivNotification,
} from "./styled";

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
    const [count, setCount] = useState(0);
    function Add({ id }) {
        count < 4 ? setCount(count + 1) : null;
        const myActID = id;
        const ROOM = IDRoom;
        ROOM.push(id);
        setIDRoom(ROOM);
        const myFilter = IDRoom.filter((myRoom) => myRoom === myActID);
        const roomSelected = myFilter.length;
        document.getElementById(id).innerHTML = roomSelected;
    }

    function Remove({ id }) {
        count !== 0 ? setCount(count - 1) : null;
        const countRoom = document.getElementById(id).innerHTML;
        if (countRoom >= 2) {
            document.getElementById(id).innerHTML = countRoom - 1;
            const indice = IDRoom.indexOf(id);
            IDRoom.splice(indice, 1);
        } else if (countRoom <= 1) {
            document.getElementById(id).innerHTML = "";
            const indice = IDRoom.indexOf(id);
            IDRoom.splice(indice, 1);
        }
    }
    return (
        <Li key={roomID}>
            <DivNotification>
                <Counter>{count}</Counter>
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
                        <DivButton>
                            <ButtonCount
                                type="-"
                                disabled={count === 0}
                                onClick={() => Remove(roomID)}
                            >
                                -
                            </ButtonCount>
                            <ButtonCount
                                type="+"
                                disabled={count === 4}
                                onClick={() => Add(roomID)}
                            >
                                +
                            </ButtonCount>
                        </DivButton>
                    </DivText>
                </DivCard>
            </DivNotification>
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
