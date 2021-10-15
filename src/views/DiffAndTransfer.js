import * as React from 'react';
import {CButton, CCol, CContainer, CRow} from "@coreui/react";
import {getDiffStatusList} from "../services/dataProvider";
import {MDBDataTableV5} from "mdbreact";
import {useState} from "react";
import Select from "react-select";


const DiffAndTransfer = () => {
    const [column, setColumn] = useState([]);
    const [diffStatus, setDiffStatus] = useState([]);
    const [collection, setCollection] = useState();
    const [sourceEnv, setSourceEnv] = useState();
    const [targetEnv, setTargetEnv] = useState();

    const handleSelect = (value, setFunction) => {
        setFunction(value.value);
        console.log(collection);
    };

    const getDiffStatus = async () => {
        const response = await getDiffStatusList(collection, sourceEnv, targetEnv);
        console.log(response);
        setDiffStatus(response);

        // transColumn(response);
    };

    const transColumn = (response) => {
        let toColumn = [
            {
                label: 'id',
                field: 'id',
                sort: 'asc',
                width: 300
            },
        ]

        console.log(response.keys())
    }

    const data = {
        columns: [
            {
                label: 'id',
                field: 'id',
                sort: 'asc',
                width: 200
            },
            {
                label: 'nluId',
                field: 'fields.nluId',
                sort: 'asc',
                width: 200
            },
            {
                label: 'confidenceCutScore',
                field: 'fields.confidenceCutScore',
                sort: 'asc',
                width: 200
            },
            {
                label: 'url',
                field: 'status',
                sort: 'asc',
                width: 200
            },
        ],
        rows: diffStatus
    };

    const [checkbox1, setCheckbox1] = useState([]);

    const showLogs2 = (e) => {
        setCheckbox1(e);
    };

    return (
        <CContainer>
            <CRow>
                <CCol md={2}>
                    <div>collection</div>
                    <Select
                        onChange={(value) => handleSelect(value, setCollection)}
                        options={collectionOption}
                    />
                </CCol>
                <CCol md={2}>
                    <div>source</div>
                    <Select
                        onChange={(value) => handleSelect(value, setSourceEnv)}
                        options={envOption}
                    />
                </CCol>
                <CCol md={2}>
                    <div>target</div>
                    <Select
                        onChange={(value) => handleSelect(value, setTargetEnv)}
                        options={envOption}
                    />
                </CCol>
                <CCol md={2}>
                    <CButton color="secondary" onClick={getDiffStatus}>diff status</CButton>
                </CCol>
            </CRow>

            <MDBDataTableV5
                striped
                bordered
                hover
                data={data}

                checkbox
                headCheckboxID='id6'
                bodyCheckboxID='checkboxes6'
                getValueCheckBox={(e) => {
                    showLogs2(e);
                }}
                getValueAllCheckBoxes={(e) => {
                    showLogs2(e);
                }}
                multipleCheckboxes
            />
        </CContainer>
    );
}


const collectionOption = [
    {value: "nlu", label: "nlu"},
    {value: "view", label: "view"},
    {value: "control", label: "control"},
];

const envOption = [
    {value: "local", label: "local"},
    {value: "local2", label: "local2"},
    {value: "dev", label: "dev"},
    {value: "test", label: "test"},
    {value: "prod", label: "prod"},
];

export default DiffAndTransfer;