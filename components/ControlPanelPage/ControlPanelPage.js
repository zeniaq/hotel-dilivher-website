import Select from "../Select";
import FormInput from "../FormInput";
import { dataSelect } from "../FormInput/forms";
import RoomsCard from "../RoomsCard";

export default function ControlPanelPage() {
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
        <section>
            <Select mapSelect={data} textButton="Buscar" />
            <RoomsCard
                roomName="Aliquam"
                roomAvailabity="SI"
                roomCapacity="5"
                roomWC="SI"
                roomBeds="2"
                roomID="1"
                roomPrice="500.00"
                imageSrc="images/banner.jpg"
            />
        </section>
    );
}
