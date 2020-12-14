import Table, { Row, TitleCell, ContentCell } from "../Table";
import { titles, dataRows, result, dataresults } from "./tables";
import { DivTable, DivTable2, H1, Button, DivContent, Section, DivH1, DivColor, H3} from "./styled";
import React, { useRef } from 'react';
import WarningMessage from "../WarningMessage/WarningMessage";
import ReactToPrint from "react-to-print";

const titleRow = titles.map((data) => <TitleCell data={data.Value} />);
const rows = dataRows.map((data) => (
    <Row>
        <ContentCell data={data.name} />
        <ContentCell data={data.room} />
        <ContentCell data={data.arrivaldate} />
        <ContentCell data={data.departuredate} />
        <ContentCell data={data.numbernights} />
        <ContentCell data={data.costnight} />
        <ContentCell data={data.subtotal} />
    </Row>
));
const results = result.map((data) => <TitleCell data={data.Value} />);
const rowsresult = dataresults.map((data) => (
    <Row>
        <ContentCell data={data.total} />
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
const ReservationSummaryPage = ({ typeMenu, linkRef }) => {
    const componentRef = useRef();
    return (
        <>
            <ComponentToPrint ref={componentRef} />
            
            <br></br>
            <ReactToPrint
                trigger={() => (
                    
                    <a href="#popup">
                    <Button type="submit">Descargar Resumen</Button>
                    </a>  
                )}
                content={() => componentRef.current}
            /> 
            <br></br>
            <a href="/controlpanel">
                <Button>Modificar</Button>

            </a>
            <WarningMessage  />
        </>
    );
};

export default ReservationSummaryPage;
