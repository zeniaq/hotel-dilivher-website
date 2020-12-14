import { DivEmergent, DivEmergentContent, DivClose, Button} from "./styled";

const WarningMessage = () => {
    return (
        <>
            <DivEmergent id="popup" >
                <DivEmergentContent>
                    <h2>Operacion Exitosa</h2>
                    <br></br>
                    <h2>Documento Descargado</h2>
                    <DivClose>
                        <a href="#">&times;</a>
                    </DivClose>
                </DivEmergentContent>
            </DivEmergent>
        </>
    );
};

export default WarningMessage;