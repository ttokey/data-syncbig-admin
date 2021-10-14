import React, {useEffect, useState} from 'react';
import {
    CButton,
    CCol,
    CForm,
    CFormInput,
    CFormLabel,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CRow
} from "@coreui/react";
import {postData, putData} from "../services/dataProvider";


const EnvInfoModal = (props) => {
    const [id, setId] = useState(props.selectedRow.id);
    const [env, setEnv] = useState(props.selectedRow.env);
    const [url, setUrl] = useState(props.selectedRow.url);

    useEffect(() => {
            setId(props.selectedRow.id);
            setEnv(props.selectedRow.env);
            setUrl(props.selectedRow.url);
        }, [props.visible]
    )


    const onClickSave = async () => {
        props.setVisible(false);
        console.log("id : {}", id);
        if (id === undefined) {
            await postData("envInfo", getJsonData());
        } else {
            await putData("envInfo", id, getJsonData());
        }
        props.fetch();
    }

    const getJsonData = () => {
        const json = new Object();
        json.id = document.getElementById('id').value;
        json.env = document.getElementById('env').value;
        json.url = document.getElementById('url').value;
        console.log(json)
        return json;
    }

    return (
        <CModal size="xl" visible={props.visible} onClose={() => props.setVisible(false)}>
            <CModalHeader onClose={() => props.setVisible(false)}>
                <CModalTitle>edit {props.env}</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <CForm>
                    <CRow className="mb-3">
                        <CCol>
                            <CFormLabel>id</CFormLabel>
                        </CCol>
                        <CCol sm={10}>
                            <CFormInput
                                type="text"
                                id="id"
                                defaultValue={props.selectedRow.id}
                                readOnly
                            />
                        </CCol>
                    </CRow>
                    <CRow className="mb-3">
                        <CCol>
                            <CFormLabel>env</CFormLabel>
                        </CCol>
                        <CCol sm={10}>
                            <CFormInput
                                type="text"
                                id="env"
                                defaultValue={props.selectedRow.env}
                            />
                        </CCol>
                    </CRow>

                    <CRow className="mb-3">
                        <CCol>
                            <CFormLabel>env</CFormLabel>
                        </CCol>
                        <CCol sm={10}>
                            <CFormInput
                                type="text"
                                id="url"
                                defaultValue={props.selectedRow.url}
                            />
                        </CCol>
                    </CRow>
                </CForm>
            </CModalBody>
            <CModalFooter>
                <CButton color="secondary" onClick={() => onClickSave()}>
                    save
                </CButton>
            </CModalFooter>
        </CModal>
    )

}
export default EnvInfoModal;