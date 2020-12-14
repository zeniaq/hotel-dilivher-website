import { DivEmergent, DivEmergentContent, DivClose, Button} from "./styled";
import ReactToPrint from "react-to-print";
import React, { useRef } from 'react';


const WarningMessage = ({ typeMenu, linkRef }) => {
    const componentRef = useRef();
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