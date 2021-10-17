import * as React from 'react';
import {CButton, CCol, CContainer, CFormSelect, CRow} from "@coreui/react";
import Select from "react-select";
import {getAllList, getDiffStatusList} from "../services/dataProvider";
import {MDBDataTable, MDBDataTableV5} from "mdbreact";


class DiffAndTransfer2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // envInfos: [],
            diffStatus: [],
            collection: 'nlu',
            sourceEnv: 'local',
            targetEnv: 'local',
        }
    };

    handleCollectionChange = (value) => {
        this.setState({collection: value.realValue}, () =>
            console.log(`selectedSource : {}, {}, {}`, this.state.collection, this.state.sourceEnv, this.state.targetEnv)
        );
    };

    handleSourceChange = (value) => {
        this.setState({sourceEnv: value.target.value}, () =>
            console.log(`selectedSource : {}, {}, {} `, this.state.collection, this.state.sourceEnv, this.state.targetEnv)
        );
    };

    handleTargetChange = (value) => {
        this.setState({targetEnv: value.target.value}, () =>
            console.log(`selectedSource : {}, {}, {} `, this.state.collection, this.state.sourceEnv, this.state.targetEnv)
        );
    };

    getDiffStatus = () => {
        console.log(document.getElementById('collection'));

        // const response = await getDiffStatusList(
        //     document.getElementById('collection').value,
        //     document.getElementById('sourceOption').value,
        //     document.getElementById('targetOption').value,
        // );
        // this.setState({diffStatus: response}, () =>
        //     console.log(`diffStatus : `, this.state.diffStatus)
        // );
    }

    data = {
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
        rows: this.diffStatus
    }

    collectionOption = [
        {value: "nlu", label: "nlu", realValue: "nlu"},
        {value: "view", label: "view", realValue: "view"},
        {value: "control", label: "control", realValue: "control"},
    ];

    envOption = [
        {value: "local", label: "local", realValue: "local"},
        {value: "local2", label: "local2", realValue: "local2"},
        {value: "dev", label: "dev", realValue: "dev"},
        {value: "test", label: "test", realValue: "test"},
        {value: "prod", label: "prod", realValue: "prod"},
    ];

    render() {
        return (
            <CContainer>
                <CRow>
                    <CCol md={2}>
                        <div>collection</div>
                        {/*<CFormSelect*/}
                        {/*    onChange={(value) => this.handleCollectionChange(value)}*/}
                        {/*    defaultValue={this.collection}*/}
                        {/*>*/}
                        {/*    <option value="nlu">nlu</option>*/}
                        {/*    <option value="view">view</option>*/}
                        {/*    <option value="control">control</option>*/}
                        {/*</CFormSelect>*/}
                        <Select
                            onChange={(value) => this.handleCollectionChange(value)}
                            options={this.collectionOption}
                        />
                    </CCol>
                    <CCol md={2}>
                        <div>source</div>
                        {/*<CFormSelect*/}
                        {/*    onChange={(value) => this.handleSourceChange(value)}*/}
                        {/*    defaultValue={this.sourceEnv}*/}
                        {/*>*/}
                        {/*    <option value="local">local</option>*/}
                        {/*    <option value="local2">local2</option>*/}
                        {/*</CFormSelect>*/}
                        <Select
                            onChange={(value) => this.handleSourceChange(value)}
                            options={this.envOption}
                        />
                    </CCol>
                    <CCol md={2}>
                        <div>target</div>
                        <CFormSelect
                            onChange={(value) => this.handleTargetChange(value)}
                            defaultValue={this.targetEnv}
                        >
                            <option value="local">local</option>
                            <option value="local2">local2</option>
                        </CFormSelect>
                        <Select
                            onChange={(value) => this.handleTargetChange(value)}
                            options={this.envOption}
                        />
                    </CCol>
                    <CCol md={2}>
                        <CButton color="secondary" onClick={this.getDiffStatus}>diff status</CButton>
                    </CCol>
                </CRow>

                <MDBDataTableV5
                    striped
                    bordered
                    hover
                    data={this.data}
                    checkbox
                    headCheckboxID='id6'
                    bodyCheckboxID='checkboxes6'
                    getValueCheckBox={(e) => {
                        // showLogs2(e);
                    }}
                    getValueAllCheckBoxes={(e) => {
                        // showLogs2(e);
                    }}
                    multipleCheckboxes
                />
            </CContainer>
        );
    }
}


export default DiffAndTransfer2;
