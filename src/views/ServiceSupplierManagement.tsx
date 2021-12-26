import React, {forwardRef} from "react";
import CustomTable from "../components/CustomTable";

const ServiceSupplierManagement: React.FC = () => {
    const data = [

        {
            username: "Padma Gnanapriya",
            nic: '9705523232V',
            gender: 'Male',
            email: 'padmaisuru@gmail.com',
            contactNo: '0766328189',
            serviceArea: 'Galle',
            serviceTypes: ["Electrical", "Masons"],
            workingTime: '8.30AM - 5.30PM',
            certification: 'none',
            workingExperience: '5 years',
            selectedPackage: '12 months'
        },
        {
            username: "Padma Gnanapriya",
            nic: '9705523232V',
            gender: 'Male',
            email: 'padmaisuru@gmail.com',
            contactNo: '0766328189',
            serviceArea: 'Galle',
            serviceTypes: ["Electrical", "Masons"],
            workingTime: '8.30AM - 5.30PM',
            certification: 'none',
            workingExperience: '5 years',
            selectedPackage: '12 months'
        },
        {
            username: "Padma Gnanapriya",
            nic: '9705523232V',
            gender: 'Male',
            email: 'padmaisuru@gmail.com',
            contactNo: '0766328189',
            serviceArea: 'Galle',
            serviceTypes: ["Electrical", "Masons"],
            workingTime: '8.30AM - 5.30PM',
            certification: 'none',
            workingExperience: '5 years',
            selectedPackage: '12 months'
        },
        {
            username: "Padma Gnanapriya",
            nic: '9705523232V',
            gender: 'Male',
            email: 'padmaisuru@gmail.com',
            contactNo: '0766328189',
            serviceArea: 'Galle',
            serviceTypes: ["Electrical", "Masons"],
            workingTime: '8.30AM - 5.30PM',
            certification: 'none',
            workingExperience: '5 years',
            selectedPackage: '12 months'
        },
        {
            username: "Padma Gnanapriya",
            nic: '9705523232V',
            gender: 'Male',
            email: 'padmaisuru@gmail.com',
            contactNo: '0766328189',
            serviceArea: 'Galle',
            serviceTypes: ["Electrical", "Masons"],
            workingTime: '8.30AM - 5.30PM',
            certification: 'none',
            workingExperience: '5 years',
            selectedPackage: '12 months'
        },
        {
            username: "Padma Gnanapriya",
            nic: '9705523232V',
            gender: 'Male',
            email: 'padmaisuru@gmail.com',
            contactNo: '0766328189',
            serviceArea: 'Galle',
            serviceTypes: ["Electrical", "Masons"],
            workingTime: '8.30AM - 5.30PM',
            certification: 'none',
            workingExperience: '5 years',
            selectedPackage: '12 months'
        },
        {
            username: "Padma Gnanapriya",
            nic: '9705523232V',
            gender: 'Male',
            email: 'padmaisuru@gmail.com',
            contactNo: '0766328189',
            serviceArea: 'Galle',
            serviceTypes: ["Electrical", "Masons"],
            workingTime: '8.30AM - 5.30PM',
            certification: 'none',
            workingExperience: '5 years',
            selectedPackage: '12 months'
        }

    ];

    const columns = [
        {title: 'Username', field: 'username'},
        // {title: 'NIC', field: 'nic'},
        {title: 'Gender', field: 'gender'},
        {title: 'Email', field: 'email'},
        {title: 'Contact No', field: 'contactNo'},
        {title: 'Service Area', field: 'serviceArea'},
        // {title: 'Service Types', field: 'serviceTypes'},
        // {title: 'Working Time', field: 'workingTime'},
        // {title: 'Certificates', field: 'certificates'},
        // {title: 'Working Experience', field: 'workingExperience'},
        {title: 'selectedPackage', field: 'selectedPackage'},

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
            icon: forwardRef((props, ref) => <span className="icon-delete" {...props}  />),
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
