import Select from "../Select";
import FormInput from "../FormInput";
import { dataSelect } from "../FormInput/forms";
import RoomLabels from "../RoomLabels";

export default function SectionRooms() {
    const data = dataSelect.map((form) => (
        <FormInput
            titleText={form.titleText}
            nameField={form.nameField}
            typeInput={form.typeInput}
            typeForm={form.typeForm}
            key={form.titleText}
            defaultValue={form.defaultValue}
            min={form.min}
            max={form.max}
        />
    ));
    return (
        <>
        <section>
            <Select mapSelect={data} textButton="Buscar" />
            <RoomLabels
                roomName="Aliquam"
                roomID="1"
                imageSrc="images/banner.jpg"
            />
        </section>  
        <section>
            <RoomLabels
                roomName="Aliquam"
                roomID="1"
                imageSrc="images/banner.jpg"
            />
        </section>
        </>
    );
}
