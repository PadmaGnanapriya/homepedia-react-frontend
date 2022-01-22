import React, {forwardRef, useEffect} from "react";
import CustomTable from "../components/CustomTable";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllServiceSuppliers, selectAllServiceSuppliersForAdmin} from "../store/ServiceSupplierSlice";

const ServiceSupplierManagement: React.FC = () => {
    const dispatch = useDispatch()
    const data = useSelector(selectAllServiceSuppliersForAdmin)
    const MessageStatus = useSelector((state: any) => state.messages.status)

    useEffect(() => {
        if (MessageStatus === 'idle') {
            dispatch(fetchAllServiceSuppliers());
        }
    }, [MessageStatus, dispatch])

    const columns = [
        {title: 'Full Name', field: 'fullName'},
        {title: 'Gender', field: 'gender'},
        {title: 'Email', field: 'email'},
        {title: 'Contact No', field: 'contactNumber'},
        {title: 'Service Area', field: 'workingArea'},
        {title: 'selectedPackage', field: 'selectedPlan'},
    ];

    // TODO : Create function for onClick event. remove dummy console log
    const actions: any = [
        {
            icon: forwardRef((props, ref) => <span className="icon-dashboard" {...props}  />),
            tooltip: 'Overview',
            onClick: (event: any, rowData: any) => console.log("You saved 1", rowData)
        },
        {
            icon: forwardRef((props, ref) => <span className="icon-check" {...props}  />),
            tooltip: 'Approve',
            onClick: (event: any, rowData: any) => console.log("You saved 1", rowData)
        },
        {
            icon: forwardRef((props, ref) => <span className="icon-block" {...props}  />),
            tooltip: 'Block for temporally',
            onClick: (event: any, rowData: any) => console.log("You saved 1", rowData)
        },
        {
            icon: forwardRef((props, ref) => <span  className="icon-delete" {...props}  />),
            tooltip: 'Delete Permanently',
            onClick: (event: any, rowData: any) => console.log("You saved 1", rowData)
        },
        {
            icon: forwardRef((props, ref) => <span className="icon-email" {...props}  />),
            tooltip: 'Message via Mail',
            onClick: (event: any, rowData: any) => console.log("You saved 2", rowData)
        }
    ]

    return (
      <CustomTable title={'Service Supplier Management'} data={data} columns={columns} actions={actions}/>
    )
}

export default ServiceSupplierManagement;
