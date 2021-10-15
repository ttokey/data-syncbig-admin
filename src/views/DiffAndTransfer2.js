import * as React from 'react';
import {CButton, CCol, CContainer, CFormSelect, CRow} from "@coreui/react";
import Select from "react-select";
import {getAllList, getDiffStatusList} from "../services/dataProvider";
import {MDBDataTable} from "mdbreact";


class DiffAndTransfer2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            envInfos: [],
            diffStatus: [],
        }
    };

    handleSourceChange = (value) => {
        this.setState({selectedSource: value.value}, () =>
            console.log(`selectedSource : `, this.state.selectedSource, this.state.selectedTarget)
        );
    };

    handleTargetChange = (value) => {
        this.setState({selectedTarget: value.value}, () =>
            console.log(`selectedSource : `, this.state.selectedSource, this.state.selectedTarget)
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

    render() {
        const data = {
            columns: [
                {
                    label: 'id',
                    field: 'id',
                    sort: 'asc',
                    width: 300
                },
                {
                    label: 'env',
                    field: 'env',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'url',
                    field: 'url',
                    sort: 'asc',
                    width: 200
                }
            ],
            rows: this.state.envInfos
        }

        return (
            <CContainer>
                <CRow>
                    <CCol md={2}>
                        <div>collection</div>
                        <CFormSelect
                            options={collectionOption}
                        />
                    </CCol>
                    <CCol md={2}>
                        <div>source</div>
                        <CFormSelect
                            id="sourceOption"
                            options={envOption}
                        />
                    </CCol>
                    <CCol md={2}>
                        <div>target</div>
                        <CFormSelect
                            id="targetOption"
                            options={envOption}
                        />
                    </CCol>
                    <CCol md={2}>>
                        <CButton color="secondary" onClick={this.getDiffStatus}>diff status</CButton>
                    </CCol>
                </CRow>

                <MDBDataTable
                    striped
                    bordered
                    small
                    data={data}
                />
            </CContainer>
        );
    }
}


const collectionOption = [
    {value: "nlu", label: "nlu"},
    {value: "view", label: "view"},
    {value: "control", label: "control"},
]

const envOption = [
    {value: "local", label: "local"},
    {value: "local2", label: "local2"},
    {value: "dev", label: "dev"},
    {value: "test", label: "test"},
    {value: "prod", label: "prod"},
]


export default DiffAndTransfer2;
