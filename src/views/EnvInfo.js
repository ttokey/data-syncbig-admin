import React, {useEffect, useState} from 'react';
import {getAllList} from "../services/dataProvider";
import {MDBDataTableV5} from "mdbreact";

const EnvInfo = (effect, deps) => {
    const [envInfos, setEnvInfos] = useState([]);
    const [data, setData] = useState({});
    const [checkbox1, setCheckbox1] = React.useState([]);


    // const [loading, setLoading] = useState(true);

    const fetchEnvInfos = async () => {
        const response = await getAllList("envInfo");
        setEnvInfos(response);

    }

    useEffect(() => {
        fetchEnvInfos();
        console.log("fetch EnvInfo", envInfos)
    }, [])

    const fetchData = () => {
        setData({
                columns: [
                    {
                        label: 'id',
                        field: 'id',
                        sort: 'asc',
                        attributes: {
                            'aria-controls': 'DataTable',
                            'aria-label': 'Name',
                        },
                    },
                    {
                        label: 'env',
                        field: 'env',
                        sort: 'asc',
                    },
                    {
                        label: 'url',
                        field: 'url',
                        sort: 'asc',
                    },
                ],
                rows: envInfos
            },
        );
    }

    const showLogs2 = (e) => {
        setCheckbox1(e);
    };

    useEffect((e) => {
            fetchData();
            console.log("fetch data", data)
        }, [envInfos]
    )

    return (
        <div>
            <MDBDataTableV5
                autoWidth
                hover
                entriesOptions={[5, 20, 25]}
                entries={10}
                pagesAmount={4}
                data={data}
                checkbox
                headCheckboxID="1"
                bodyCheckboxID="2"
                getValueCheckBox={(value) => (e) => {
                    showLogs2(e);
                }}
                getValueAllCheckBoxes={(e) => {
                    showLogs2(e);
                }}
                multipleCheckboxes
            />
            {/*<MDBDataTable*/}
            {/*    striped*/}
            {/*    bordered*/}
            {/*    small*/}
            {/*    data={data}*/}
            {/*/>*/}
        </div>
    )
}
export default EnvInfo;