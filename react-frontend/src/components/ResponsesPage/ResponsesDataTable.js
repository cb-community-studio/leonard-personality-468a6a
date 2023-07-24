
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';


const ResponsesDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.Age}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.Email}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.Name}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.Organization}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.Jobdescription}</p>
    const pTemplate8 = (rowData, { rowIndex }) => <p >{rowData.likestodothingsinawayacceptabletoothers}</p>
    const pTemplate9 = (rowData, { rowIndex }) => <p >{rowData.enjoysbeinginventive}</p>
    const pTemplate10 = (rowData, { rowIndex }) => <p >{rowData.triestobeplayful}</p>
    const pTemplate11 = (rowData, { rowIndex }) => <p >{rowData.enjoystalkingwithothers}</p>
    const pTemplate12 = (rowData, { rowIndex }) => <p >{rowData.desirestobeincontrol}</p>
    const pTemplate13 = (rowData, { rowIndex }) => <p >{rowData.isagoodlistener}</p>
    const pTemplate14 = (rowData, { rowIndex }) => <p >{rowData.haslotsofenergyandenthusiasm}</p>
    const pTemplate15 = (rowData, { rowIndex }) => <p >{rowData.iscurious}</p>
    const pTemplate16 = (rowData, { rowIndex }) => <p >{rowData.thinkscarefullybeforemakingadecision}</p>
    const pTemplate17 = (rowData, { rowIndex }) => <p >{rowData.requiresarelaxedfriendlyatmospheretoworkbes}</p>
    const pTemplate18 = (rowData, { rowIndex }) => <p >{rowData.makesfriendscautiously}</p>
    const pTemplate19 = (rowData, { rowIndex }) => <p >{rowData.desiresquickresults}</p>
    const pTemplate20 = (rowData, { rowIndex }) => <p >{rowData.doesnotstandnonsensefromothers}</p>
    const pTemplate21 = (rowData, { rowIndex }) => <p >{rowData.likestowin}</p>
    const pTemplate22 = (rowData, { rowIndex }) => <p >{rowData.isafunpersontobewith}</p>
    const pTemplate23 = (rowData, { rowIndex }) => <p >{rowData.isaconscientiousperson}</p>
    const pTemplate24 = (rowData, { rowIndex }) => <p >{rowData.ischeerful}</p>
    const pTemplate25 = (rowData, { rowIndex }) => <p >{rowData.likesmoderation}</p>
    const pTemplate26 = (rowData, { rowIndex }) => <p >{rowData.isthelifeofaparty}</p>
    const pTemplate27 = (rowData, { rowIndex }) => <p >{rowData.trieshardtobediligent}</p>
    const pTemplate28 = (rowData, { rowIndex }) => <p >{rowData.hasastrongsenseofduty}</p>
    const pTemplate29 = (rowData, { rowIndex }) => <p >{rowData.likestotryoriginalapproaches}</p>
    const pTemplate30 = (rowData, { rowIndex }) => <p >{rowData.issupportiveofothers}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="Age" header="Age" body={pTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="Email" header="Email" body={pTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="Name" header="Name" body={pTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="Organization" header="Organization" body={pTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="Jobdescription" header="Job Description" body={pTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="likestodothingsinawayacceptabletoothers" header="likes to do things in a way acceptable to others" body={pTemplate8} style={{ minWidth: "8rem" }} />
            <Column field="enjoysbeinginventive" header="enjoys being inventive" body={pTemplate9} style={{ minWidth: "8rem" }} />
            <Column field="triestobeplayful" header="tries to be playful" body={pTemplate10} style={{ minWidth: "8rem" }} />
            <Column field="enjoystalkingwithothers" header="enjoys talking with others" body={pTemplate11} style={{ minWidth: "8rem" }} />
            <Column field="desirestobeincontrol" header="desires to be in control" body={pTemplate12} style={{ minWidth: "8rem" }} />
            <Column field="isagoodlistener" header="is a good listener" body={pTemplate13} style={{ minWidth: "8rem" }} />
            <Column field="haslotsofenergyandenthusiasm" header="has lots of energy and enthusiasm" body={pTemplate14} style={{ minWidth: "8rem" }} />
            <Column field="iscurious" header="is curious" body={pTemplate15} style={{ minWidth: "8rem" }} />
            <Column field="thinkscarefullybeforemakingadecision" header="thinks carefully before making a decision" body={pTemplate16} style={{ minWidth: "8rem" }} />
            <Column field="requiresarelaxedfriendlyatmospheretoworkbes" header="requires a relaxed friendly atmosphere to work best" body={pTemplate17} style={{ minWidth: "8rem" }} />
            <Column field="makesfriendscautiously" header="makes friends cautiously" body={pTemplate18} style={{ minWidth: "8rem" }} />
            <Column field="desiresquickresults" header="desires quick results" body={pTemplate19} style={{ minWidth: "8rem" }} />
            <Column field="doesnotstandnonsensefromothers" header="does not stand nonsense from others" body={pTemplate20} style={{ minWidth: "8rem" }} />
            <Column field="likestowin" header="likes to win" body={pTemplate21} style={{ minWidth: "8rem" }} />
            <Column field="isafunpersontobewith" header="is a fun person to be with" body={pTemplate22} style={{ minWidth: "8rem" }} />
            <Column field="isaconscientiousperson" header="is a conscientious person" body={pTemplate23} style={{ minWidth: "8rem" }} />
            <Column field="ischeerful" header="is cheerful" body={pTemplate24} style={{ minWidth: "8rem" }} />
            <Column field="likesmoderation" header="likes moderation" body={pTemplate25} style={{ minWidth: "8rem" }} />
            <Column field="isthelifeofaparty" header="is the life of a party" body={pTemplate26} style={{ minWidth: "8rem" }} />
            <Column field="trieshardtobediligent" header="tries hard to be diligent" body={pTemplate27} style={{ minWidth: "8rem" }} />
            <Column field="hasastrongsenseofduty" header="has a strong sense of duty" body={pTemplate28} style={{ minWidth: "8rem" }} />
            <Column field="likestotryoriginalapproaches" header="likes to try original approaches" body={pTemplate29} style={{ minWidth: "8rem" }} />
            <Column field="issupportiveofothers" header="is supportive of others" body={pTemplate30} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default ResponsesDataTable;