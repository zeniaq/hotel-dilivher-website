import PrincipalLayout from "../components/PrincipalLayout";
import { dataTableUsers } from "../components/Tables/table";
import Tables from "../components/Tables";

export default function Home() {
    const tab = dataTableUsers.map((form) => (
        <Tables
            titleText={form.titleText}
            descriptionText={form.descriptionText}
         
        />
    ));
    return (    
        <PrincipalLayout title="Hotel Dilivher :: Tables">
            <Tables linkRef="/">{tab}</Tables>
        </PrincipalLayout>
    );

}