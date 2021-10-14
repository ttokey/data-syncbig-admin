import * as React from 'react';
import {CButton, CCol, CContainer, CRow} from "@coreui/react";
import Select from "react-select";
import {getAllList} from "../services/dataProvider";
import {MDBDataTable} from "mdbreact";


class DiffAndTransfer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSource: "dev",
            selectedTarget: "dev",
            envInfos: [],
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

    getDiffStatus = async () => {
        const response = await getAllList("envInfo");
        console.log(`getData : `, response);
        this.setState({envInfos: response}, () =>
            console.log(`envInfo : `, this.state.envInfos)
        );
        console.log(`size : `, this.state.envInfos.length);
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
            <div>
                <CContainer>
                    <CRow xs={{gutter: 2}}>
                        <CCol xs={{span: 6}}>
                            <div>source</div>
                        </CCol>
                        <CCol xs={{span: 6}}>
                            <Select
                                onChange={this.handleSourceChange}
                                options={options}
                            />
                        </CCol>
                        <CCol xs={{span: 6}}>
                            <div>target</div>
                        </CCol>
                        <CCol xs={{span: 6}}>
                            <Select
                                onChange={this.handleTargetChange}
                                options={options}
                            />
                        </CCol>
                        <CCol xs={{span: 6}}>
                            <CButton color="secondary" onClick={this.getDiffStatus}>diff status</CButton>
                        </CCol>
                    </CRow>
                </CContainer>

                <MDBDataTable
                    striped
                    bordered
                    small
                    data={data}
                />
            </div>
        );
    }
}

const options = [
    {value: "dev", label: "dev"},
    {value: "test", label: "test"},
    {value: "prod", label: "prod"},
]

export default DiffAndTransfer;
