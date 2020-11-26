import React, { useState } from "react";
import { Anchor, Li, Ul, Container, Content, Panel } from "./styled";
import RoomsCard from "../RoomsCard";
import Select from "../Select";
import FormInput from "../FormInput";

const Tab = () => {
    const [tab, setTab] = useState(0);
    const data = [
        [
            ["Enrique", "enrique@gmail", "775149"],
            ["2020-11-24", "2020-11-24", 5600],
            ["Aliquam1", "Si", "3", "2", "600", "Si"],
        ],
        [
            ["Jonas", "jonas@gmail", "35987367"],
            ["2020-11-25", "2020-11-25", 900],
            ["Aliquam2", "No", "5", "1", "700", "Si"],
        ],
        [
            ["Marcos", "marcos@gmail", "89327"],
            ["2020-11-26", "2020-11-26", 70000],
            ["Aliquam3", "Si", "2", "3", "700", "No"],
        ],
        [
            ["Jonas", "jonas@gmail", "35987367"],
            ["2020-11-25", "2020-11-25", 900],
            ["Aliquam2", "No", "5", "1", "700", "Si"],
        ],
        [
            ["Marcos", "marcos@gmail", "89327"],
            ["2020-11-26", "2020-11-26", 70000],
            ["Aliquam3", "Si", "2", "3", "700", "No"],
        ],
        [
            ["Janeth", "janeth@gmail", "775149"],
            ["2020-11-27", "2020-11-27", 9000],
            ["Aliquam4", "No", "1", "1", "9000", "No"],
        ],
    ];

    const formUser = [
        {
            typeInput: "text",
            titleText: "Titular",
            defaultValue: data[tab][0][0],
            typeForm: "app",
            nameField: "titular",
        },
        {
            typeInput: "email",
            titleText: "Email",
            defaultValue: data[tab][0][1],
            typeForm: "app",
            nameField: "mail",
        },
        {
            typeInput: "tel",
            titleText: "Telefono",
            defaultValue: data[tab][0][2],
            typeForm: "app",
            nameField: "phone",
        },
    ];
    const formRoom = [
        {
            typeInput: "date",
            titleText: "Llegada",
            defaultValue: data[tab][1][0],
            typeForm: "app",
            nameField: "titular",
        },
        {
            typeInput: "date",
            titleText: "Salida",
            defaultValue: data[tab][1][1],
            typeForm: "app",
            nameField: "mail",
        },
        {
            typeInput: "text",
            titleText: "Costo",
            defaultValue: data[tab][1][2],
            typeForm: "app",
            nameField: "phone",
        },
    ];
    const list = data.map((form, index) => (
        <Li>
            <Anchor value={form[2][0]} onClick={() => setTab(index)} id={index} actual={tab}>
                {form[2][0]}
            </Anchor>
        </Li>
    ));
    const inputUser = formUser.map((form) => (
        <FormInput
            typeInput={form.typeInput}
            titleText={form.titleText}
            defaultValue={form.defaultValue}
            min={form.min}
            max={form.max}
            typeForm={form.typeForm}
            nameField={form.nameField}
        />
    ));
    const inputRoom = formRoom.map((form) => (
        <FormInput
            typeInput={form.typeInput}
            titleText={form.titleText}
            defaultValue={form.defaultValue}
            min={form.min}
            max={form.max}
            typeForm={form.typeForm}
            nameField={form.nameField}
        />
    ));
    return (
        <Container>
            <Ul>{list}</Ul>
            <Content>
                <Panel>
                    <Select mapSelect={inputUser} typeSelect="tab" />
                    <Select mapSelect={inputRoom} typeSelect="tab" />
                    <ul>
                        <RoomsCard
                            imageSrc="images/banner.jpg"
                            roomBeds={data[tab][2][2]}
                            roomAvailabity={data[tab][2][1]}
                            roomCapacity={data[tab][2][3]}
                            roomName={data[tab][2][0]}
                            roomPrice={data[tab][2][4]}
                            roomWC={data[tab][2][5]}
                            typeCard="tab"
                        />
                    </ul>
                </Panel>
            </Content>
        </Container>
    );
};

export default Tab;
