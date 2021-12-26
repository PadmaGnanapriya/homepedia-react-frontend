import React, {forwardRef} from "react";
import CustomTable from "../components/CustomTable";

const NotificationManagement: React.FC = () => {
    const data = [
        {
            time: '23/11/2021 2.00PM',
            email: 'padmaisuru@gmail.com',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat bibendum metus. Quisque sed nisi accumsan'
        },
        {
            time: '23/11/2021 2.00PM',
            email: 'padmaisuru@gmail.com',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. . Ut placerat bibendum metus. Quisque sed nisi accumsan'
        },
        {
            time: '23/11/2021 2.00PM',
            email: 'padmaisuru@gmail.com',
            message: 'Ut placerat bibendum metus. Quisque sed nisi accumsan'
        },
        {
            time: '23/11/2021 2.00PM',
            email: 'padmaisuru@gmail.com',
            message: 'Lorem ipsum dolor sit amet, iam, vitae semper tellus luctus eget. Ut placerat bibendum metus. Quisque sed nisi accumsan'
        },
        {
            time: '23/11/2021 2.00PM',
            email: 'padmaisuru@gmail.com',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat bibendum metus. Quisque sed nisi accumsan'
        },
        {
            time: '23/11/2021 2.00PM',
            email: 'padmaisuru@gmail.com',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit tin. Ut placerat bibendum metus. Quisque sed nisi accumsan'
        },
        {
            time: '23/11/2021 2.00PM',
            email: 'padmaisuru@gmail.com',
            message: 'Demo test Message'
        },

    ];

    const columns = [
        {title: 'Time', field: 'time'},
        {title: 'Email', field: 'email'},
        {title: 'Message', field: 'message'},

    ];

    // TODO : Create function for onClick event. remove dummy console log
    const actions: any = [
        {
            icon: forwardRef((props, ref) => <span className="icon-send" {...props}  />),
            tooltip: 'Delete this Notification',
            onClick: (event: any, rowData: any) => console.log("You saved ", rowData)
        },
        {
            icon: forwardRef((props, ref) => <span className="icon-delete" {...props}  />),
            tooltip: 'Delete this Notification',
            onClick: (event: any, rowData: any) => console.log("You saved ", rowData)
        }
    ]

    return (
      <CustomTable title={'Notification Management'} data={data} columns={columns} actions={actions}/>
    )
}

export default NotificationManagement;
