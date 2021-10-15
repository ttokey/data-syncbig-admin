import React, {useEffect, useRef, useState} from 'react';
import {getAllList} from "../services/dataProvider";
import './EnvInfo.css'
import {CButton, CCol, CContainer, CFormSelect, CRow} from "@coreui/react";
import {AgGridColumn, AgGridReact} from "ag-grid-react";
import EnvInfoModal from "./EnvInfoModal";


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

    const cFormOptions = `
    <option value="10">10</option>
    <option value="20">20</option>
    <option value="50">30</option>`;

    const handlePageSizeChange = (value) => {
        setPageSize(value.value);
    };

    return (
        <CContainer>
            <CRow xs={{gutter: 0}}>
                <CCol md={1} className="align-self-end">
                    <div>
                        page
                    </div>

                </CCol>
                <CCol md={2}>
                    <CFormSelect
                        size='sm'
                        onChange={(event) => handlePageSizeChange(event)}
                        value={pageSize}
                    >
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </CFormSelect>
                </CCol>
                <CCol md={{span: 4, offset: 4}} className="align-self-end">
                    <div d-grid gap-2 className="d-md-block">
                        <CButton color="primary" size="sm" onClick={onButtonClickCreate}>create</CButton>
                        <CButton color="light" size="sm" onClick={onButtonClick}>delete</CButton>
                    </div>
                </CCol>
            </CRow>

            <CRow>
                <div className="ag-theme-alpine" style={{height: 500, width: 1000}}>
                    <AgGridReact
                        ref={gridRef}
                        rowData={rowData}
                        rowSelection={'multiple'}
                        onRowSelected={onRowSelected}
                        paginationPageSize={pageSize}
                        pagination={true}
                    >
                        <AgGridColumn
                            field="id"
                            sortable={true}
                            filter={true}
                            checkboxSelection={true}
                            headerCheckboxSelection={true}
                            headerCheckboxSelectionFilteredOnly={true}
                        />
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
            </CRow>

        </CContainer>
    )
}
export default EnvInfo;