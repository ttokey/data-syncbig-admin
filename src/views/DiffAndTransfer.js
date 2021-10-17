import * as React from 'react';
import {CButton, CCol, CContainer, CFormSelect, CRow} from "@coreui/react";
import {getDiffStatusList} from "../services/dataProvider";
import {MDBDataTableV5} from "mdbreact";
import {useState} from "react";
import Select from "react-select";


const DiffAndTransfer = (props) => {
    const [column, setColumn] = useState([]);
    const [diffStatus, setDiffStatus] = useState([]);
    const [collection, setCollection] = useState("nlu");
    const [sourceEnv, setSourceEnv] = useState("local");
    const [targetEnv, setTargetEnv] = useState("local");

    const handleSelect = (value, setFunction) => {

        // setFunction(value.target.value);
        setCollection(value.target.value);
        console.log(value.target.value);
        // setCollection(value.realValue)
        // console.log(setFunction);
        // console.log("collection : {}, sourceEnv : {}, targetEnv : {}", collection, sourceEnv, targetEnv);
        // setSourceEnv("hi");

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
                    <CFormSelect
                        onChange={(value) => handleSelect(value, setCollection)}
                    >
                        <option value="nlu">nlu</option>
                        <option value="view">view</option>
                        <option value="control">control</option>
                    </CFormSelect>
                    {/*<Select*/}
                    {/*    onChange={(value) => handleSelect(value, setCollection)}*/}
                    {/*    options={collectionOption}*/}
                    {/*/>*/}

                </CCol>
                <CCol md={2}>
                    <div>source</div>
                    <CFormSelect
                        onChange={(value) => handleSelect(value, setSourceEnv)}
                        defaultValue={sourceEnv}
                    >
                        <option value="local">local</option>
                        <option value="local2">local2</option>
                    </CFormSelect>
                    {/*<Select*/}
                    {/*    onChange={(value) => handleSelect(value, setSourceEnv)}*/}
                    {/*    options={envOption}*/}
                    {/*/>*/}
                </CCol>
                <CCol md={2}>
                    <div>target</div>
                    <CFormSelect
                        onChange={(value) => handleSelect(value, setTargetEnv)}
                        defaultValue={targetEnv}
                    >
                        <option value="local">local</option>
                        <option value="local2">local2</option>
                    </CFormSelect>
                    {/*<Select*/}
                    {/*    onChange={(value) => handleSelect(value, setTargetEnv)}*/}
                    {/*    options={envOption}*/}
                    {/*/>*/}
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
    {value: "nlu", label: "nlu", realValue: "nlu"},
    {value: "view", label: "view", realValue: "view"},
    {value: "control", label: "control", realValue: "control"},
];

const envOption = [
    {value: "local", label: "local", realValue: "local"},
    {value: "local2", label: "local2", realValue: "local2"},
    {value: "dev", label: "dev", realValue: "dev"},
    {value: "test", label: "test", realValue: "test"},
    {value: "prod", label: "prod", realValue: "prod"},
];

export default DiffAndTransfer;