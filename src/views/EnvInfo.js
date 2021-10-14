import React, {useEffect, useRef, useState} from 'react';
import {getAllList} from "../services/dataProvider";
import {AgGridColumn, AgGridReact} from "ag-grid-react";
import {CButton, CCol, CContainer, CFormLabel, CRow} from "@coreui/react";
import EnvInfoModal from "./EnvInfoModal";
import Select from "react-select";


const EnvInfo = () => {
    const [rowData, setRowData] = useState([]);
    const [selectedRow, setSelectedRow] = useState({});
    const [visible, setVisible] = useState(false);
    const [pageSize, setPageSize] = useState(10);
    const gridRef = useRef(null);

    const fetchRowData = async () => {
        const response = await getAllList("envInfo");
        setRowData(response);
    }

    useEffect(async (e) => {
        await fetchRowData();
        console.log("fetch envInfo", rowData)
    }, [])


    const onButtonClick = e => {
        const selectedNodes = gridRef.current.api.getSelectedNodes()
        const selectedData = selectedNodes.map(node => node.data)
        const selectedDataStringPresentation = selectedData.map(node => `${node.id}`).join(', ')
        alert(`Selected nodes: ${selectedDataStringPresentation}`)
    }

    const onButtonClickCreate = e => {
        setSelectedRow({});
        setVisible(true);
    }


    const onRowSelected = (event) => {
        setSelectedRow(event.api.getSelectedNodes().map(node => node.data)[0])
        setVisible(true);
        console.log(selectedRow);
    };

    const options = [
        {value: 10, label: 10},
        {value: 20, label: 20},
        {value: 50, label: 50},
    ];

    const handlePageSizeChange = (value) => {
        setPageSize(value.value);
    };

    return (
        <CContainer>
            <CRow className="justify-content-end">
                <CCol className="align-self-end">
                    <CButton color="light" size={"sm"} onClick={onButtonClickCreate}>create</CButton>
                </CCol>
                <CCol className="align-self-end">
                    <CButton color="light" size={"sm"} onClick={onButtonClick}>delete</CButton>
                </CCol>
            </CRow>
            <CRow>
                <CCol md={2}>
                    <CFormLabel>page size = </CFormLabel>
                </CCol>
                <CCol md={2}>
                    <Select
                        onChange={(event) => handlePageSizeChange(event)}
                        options={options}
                        defaultValue={pageSize}
                    />
                </CCol>

            </CRow>
            <div style={{height: 'calc(100% - 25px)'}}>
                <div className="ag-theme-alpine" style={{height: "100%", width: "100%"}}>
                    <AgGridReact
                        ref={gridRef}
                        rowData={rowData}
                        rowSelection={'multiple'}
                        onRowSelected={onRowSelected}
                        paginationPageSize={10}
                        pagination={true}
                    >
                        <AgGridColumn
                            field="id"
                            sortable={true}
                            filter={true}
                            checkboxSelection={true}
                            headerCheckboxSelection={true}
                            headerCheckboxSelectionFilteredOnly={true}

                        >
                        </AgGridColumn>
                        <AgGridColumn field="env" sortable={true} filter={true}></AgGridColumn>
                        <AgGridColumn field="url" sortable={true} filter={true}></AgGridColumn>
                    </AgGridReact>

                    <EnvInfoModal
                        fetch={fetchRowData}
                        selectedRow={selectedRow}
                        visible={visible}
                        setVisible={setVisible}
                        env={"envInfo"}
                    />
                </div>
            </div>

        </CContainer>
    )
}
export default EnvInfo;