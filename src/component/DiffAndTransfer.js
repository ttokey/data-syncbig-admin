import * as React from 'react';
import {
    CButton,
    CCol,
    CContainer,
    CPagination,
    CPaginationItem,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow
} from "@coreui/react";
import Select from "react-select";

class DiffAndTransfer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSource: "dev",
            selectedTarget: "dev",
            data: {},
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
        this.setState({data: {123: 123}}, () =>
            console.log(`data : `, this.state.data)
        );
    }


    render() {
        return (
            <CContainer>
                <CRow xs={{gutter: 2}}>
                    <CCol xs={{span: 6}}>
                        <div>source</div>
                    </CCol>
                    <CCol xs={{span: 6}}>
                        <Select
                            onChange={this.handleSourceChange}
                            options={options}/>
                    </CCol>
                    <CCol xs={{span: 6}}>
                        <div>target</div>
                    </CCol>
                    <CCol xs={{span: 6}}>
                        <Select
                            onChange={this.handleTargetChange}
                            options={options}/>
                    </CCol>
                    <CCol xs={{span: 6}}>
                        <CButton color="secondary" onClick={this.getDiffStatus}>Secondary</CButton>
                    </CCol>
                </CRow>
                <CRow>
                    <CTable>
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            <CTableRow>
                                <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                <CTableDataCell>Mark</CTableDataCell>
                                <CTableDataCell>Otto</CTableDataCell>
                                <CTableDataCell>@mdo</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                <CTableDataCell>Jacob</CTableDataCell>
                                <CTableDataCell>Thornton</CTableDataCell>
                                <CTableDataCell>@fat</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                <CTableDataCell colSpan="2">Larry the Bird</CTableDataCell>
                                <CTableDataCell>@twitter</CTableDataCell>
                            </CTableRow>
                        </CTableBody>

                    </CTable>
                </CRow>
                <CRow>
                    <CPagination aria-label="Page navigation example">
                        <CPaginationItem aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </CPaginationItem>
                        <CPaginationItem>1</CPaginationItem>
                        <CPaginationItem>2</CPaginationItem>
                        <CPaginationItem>3</CPaginationItem>
                        <CPaginationItem aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </CPaginationItem>
                    </CPagination>
                </CRow>
            </CContainer>
        );
    }
}

const options = [
    {value: "dev", label: "dev"},
    {value: "test", label: "test"},
    {value: "prod", label: "prod"},
]

export default DiffAndTransfer;
