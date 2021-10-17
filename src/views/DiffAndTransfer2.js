import * as React from 'react';
import {CButton, CCol, CContainer, CFormSelect, CRow} from "@coreui/react";
import Select from "react-select";
import {getAllList, getDiffStatusList} from "../services/dataProvider";
import {MDBDataTable, MDBDataTableV5} from "mdbreact";


class DiffAndTransfer2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            diffStatus: [],
            collection: "",
            sourceEnv: "",
            targetEnv: "",
            checkbox1: [],
        }
    };

    handleCollectionChange = (value) => {
        this.setState({collection: value.realValue}, () =>
            console.log(`selectedSource : {}, {}, {}`, this.state.collection, this.state.sourceEnv, this.state.targetEnv)
        );
    };

    handleSourceChange = (value) => {
        this.setState({sourceEnv: value.realValue}, () =>
            console.log(`selectedSource : {}, {}, {} `, this.state.collection, this.state.sourceEnv, this.state.targetEnv)
        );
    };

    handleTargetChange = (value) => {
        this.setState({targetEnv: value.realValue}, () =>
            console.log(`selectedSource : {}, {}, {} `, this.state.collection, this.state.sourceEnv, this.state.targetEnv)
        );
    };

    getDiffStatus = async () => {
        const response = await getDiffStatusList(
            this.state.collection,
            this.state.sourceEnv,
            this.state.targetEnv,
        );
        this.setState({diffStatus: response}, () =>
            console.log(`diffStatus : `, this.state.diffStatus)
        );
        this.setState({
                data: {
                    columns: [
                        {
                            label: 'id',
                            field: 'id',
                            sort: 'asc',
                            width: 200,
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
                    rows: response
                }
            }, () =>
                console.log(`data : `, this.state.data)
        );
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
                        <Select
                            onChange={(value) => this.handleCollectionChange(value)}
                            options={this.collectionOption}
                        />
                    </CCol>
                    <CCol md={2}>
                        <div>source</div>
                        <Select
                            onChange={(value) => this.handleSourceChange(value)}
                            options={this.envOption}
                        />
                    </CCol>
                    <CCol md={2}>
                        <div>target</div>
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
                    hover
                    entriesOptions={[5, 20, 25]}
                    entries={5}
                    pagesAmount={4}
                    data={this.state.data}
                    checkbox

                    headCheckboxID='id6'
                    bodyCheckboxID='checkboxes6'
                    // getValueCheckBox={(e) => {
                    //     // showLogs2(e);
                    // }}
                    // getValueAllCheckBoxes={(e) => {
                    //     // showLogs2(e);
                    // }}
                    multipleCheckboxes
                />
            </CContainer>
        );
    }
}


export default DiffAndTransfer2;
