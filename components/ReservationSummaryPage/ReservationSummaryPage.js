import Table, { Row, TitleCell, ContentCell } from "../Table";
import { titles, dataRows, result, dataresults } from "./tables";
import { DivTable, DivTable2, H1, Button, DivContent, Section, DivH1, DivColor, H3, A} from "./styled";
import React, { useRef } from 'react';
import WarningMessage from "../WarningMessage/WarningMessage";
import ReactToPrint from "react-to-print";

const titleRow = titles.map((data) => <TitleCell key={data.Value}>{data.Value}</TitleCell>);
const rows = dataRows.map((data) => (
    <Row>
        <ContentCell>{data.name}</ContentCell>
        <ContentCell>{data.room}</ContentCell>
        <ContentCell>{data.arrivaldate}</ContentCell>
        <ContentCell>{data.departuredate}</ContentCell>
        <ContentCell>{data.numbernights}</ContentCell>
        <ContentCell>{data.costnight}</ContentCell>
        <ContentCell>{data.subtotal}</ContentCell>

    </Row>
));
const results = result.map((data) => <TitleCell key={data.Value}>{data.Value}</TitleCell>);
const rowsresult = dataresults.map((data) => (
    <Row>
         <ContentCell>{data.total}</ContentCell>
       
    </Row>
));

const Resume = () => {
    return (
        <>
            <Section>
                <DivContent>
                    <DivH1>
                        <H1>Resumen de reservación</H1>
                        <H3>Hotel Dilivher</H3>
                    </DivH1>
                    <DivColor>
                        <DivTable>
                            <Table titles={titleRow} rows={rows} />
                            <DivTable2>
                                <Table titles={results} rows={rowsresult} />
                            </DivTable2>
                        </DivTable>
                    </DivColor>
                </DivContent>
            </Section>
        </>
    );
};

class ComponentToPrint extends React.PureComponent {
    render() {
        return <Resume />;
    }
}
const ReservationSummaryPage = () => {
    const componentRef = useRef();
    return (
        <>
            <ComponentToPrint ref={componentRef} />
            
            <br></br>
            <ReactToPrint
                trigger={() => (
                    
                    <A href="#popup">
                    <Button type="submit">Descargar Resumen</Button>
                    </A>  
                )}
                content={() => componentRef.current}
            /> 
            <br></br>
            <A href="/controlpanel" >
            <Button type="submit">Modificar</Button>

            </A>
            <WarningMessage  />
        </>
    );
};

export default ReservationSummaryPage;
