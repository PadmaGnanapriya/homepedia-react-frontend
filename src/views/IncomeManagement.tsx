import React, {forwardRef, useState} from "react";
import CustomTable from "../components/CustomTable";
import {Button, Modal, Image} from "react-bootstrap";
import paymentSlip from "../assets/images/paymentSlip.jpg";

const IncomeManagement: React.FC = () => {
    const data = [
        {
            time: '23/11/2021 2.00PM',
            fromAccountNo: 'XXXX XXXX 1516',
            transferAmount: 'LKR 4,000.00',
            description: 'from Sunimal to 6 month membership',
            paymentMethod: 'Online Banking',
            status: 'Authorized'
        },
        {
            time: '23/11/2021 2.00PM',
            fromAccountNo: 'XXXX XXXX 1516',
            transferAmount: 'LKR 4,000.00',
            description: 'from Kamal to 6 month membership',
            paymentMethod: 'Online Banking',
            status: 'Authorized'
        },
        {
            time: '23/11/2021 2.00PM',
            fromAccountNo: 'XXXX XXXX 1516',
            transferAmount: 'LKR 7,000.00',
            description: 'from Nimal to 12 month membership',
            paymentMethod: 'Online Banking',
            status: 'Authorized'
        },
        {
            time: '23/11/2021 2.00PM',
            fromAccountNo: 'XXXX XXXX 1516',
            transferAmount: 'LKR 13,000.00',
            description: 'from Amal to 24 month membership',
            paymentMethod: 'Online Banking',
            status: 'Authorized'
        },


    ];

    const columns = [
        {title: 'Time', field: 'time'},
        {title: 'From', field: 'fromAccountNo'},
        {title: 'Amount', field: 'transferAmount'},
        {title: 'Description', field: 'description'},
        {title: 'Payment Method', field: 'paymentMethod'},
        {title: 'Status', field: 'status'}

    ];

    // TODO : Create function for onClick event. remove dummy console log
    const actions: any = [
        {
            icon: forwardRef((props, ref) => <span className="icon-attach_file" {...props}  />),
            tooltip: 'Preview Payment',
            onClick: (event: any, rowData: any) => setModalShow(true)
        },
        {
            icon: forwardRef((props, ref) => <span className="icon-send" {...props}  />),
            tooltip: 'Send activation Message',
            onClick: (event: any, rowData: any) => console.log("You saved ", rowData)
        },
    ];
    const [modalShow, setModalShow] = useState(false);


    return (
      <React.Fragment>
          <CustomTable title={'Income Management'} data={data} columns={columns} actions={actions}/>

          <Modal
            show={modalShow}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
              <Modal.Body>
                  <h4 className="text-center">Payment Overview</h4>

                  <Image className="img-fluid" src={paymentSlip}/>
              </Modal.Body>
              <Modal.Footer>
                  <Button onClick={() => setModalShow(false)}>Close</Button>
              </Modal.Footer>
          </Modal>
      </React.Fragment>
    )
}

export default IncomeManagement;
