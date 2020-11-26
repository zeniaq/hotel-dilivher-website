/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-return-await */
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
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
    typeCard,
    roomID,
    roomName,
    imageSrc,
    roomCapacity,
    roomBeds,
    roomPrice,
    roomWC,
    roomAvailabity,
    cancel,
    setCancel,
}) => {
    const [count, setCount] = useState(0);
    function Add() {
        count < 4 ? setCount(count + 1) : null;
    }

    function Remove() {
        count !== 0 ? setCount(count - 1) : null;
    }

    useEffect(() => {
        cancel ? setCount(0) : null;
        typeCard !== "tab" ? setCancel(false) : null;
    });
    return (
        <Li key={roomID}>
            <DivNotification typeCard={typeCard}>
                <Counter>{count}</Counter>
                <DivCard typeCard={typeCard}>
                    <Figure data-title-item={roomName} typeCard={typeCard}>
                        <Img alt={roomName} src={imageSrc} />
                    </Figure>
                    <DivText typeCard={typeCard}>
                        <DivInfo typeCard={typeCard}>
                            <P typeCard={typeCard}>
                                <Strong>Habitacion:</Strong> {roomName}
                            </P>
                            <P typeCard={typeCard}>
                                <Strong>Baño:</Strong> {roomWC}
                            </P>
                        </DivInfo>
                        <DivInfo>
                            <P typeCard={typeCard}>
                                <Strong>Personas:</Strong> {roomCapacity}
                            </P>
                            <P typeCard={typeCard}>
                                <Strong>Camas:</Strong> {roomBeds}
                            </P>
                        </DivInfo>
                        <DivInfo>
                            <P typeCard={typeCard}>
                                <Strong>Precio:</Strong> ${roomPrice}
                            </P>
                            <P typeCard={typeCard}>
                                <Strong>Disponible:</Strong> {roomAvailabity ? "Si" : "No"}
                            </P>
                        </DivInfo>
                        {typeCard !== "tab" ? (
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
                        ) : null}
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
    typeCard: PropTypes.string,
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
    typeCard: "",
};
export default RoomsCard;
