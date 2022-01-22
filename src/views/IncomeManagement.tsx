import React, {forwardRef, useEffect, useState} from "react";
import CustomTable from "../components/CustomTable";
import {Button, Image, Modal} from "react-bootstrap";
import paymentSlip from "../assets/images/paymentSlip.jpg";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllPayments, selectAllPayments} from "../store/paymentSlice";

const IncomeManagement: React.FC = () => {
    const dispatch = useDispatch()
    const data = useSelector(selectAllPayments)
    const paymentsStatus = useSelector((state: any) => state.payments.status)

    useEffect(() => {
        if (paymentsStatus === 'idle') {
            dispatch(fetchAllPayments());
        }
    }, [paymentsStatus, dispatch])

    const columns = [
        {title: 'Service Supplier', field: 'serviceSupplierId'},
        {title: 'Amount', field: 'amount'},
        {title: 'Description', field: 'description'},
        {title: 'Payment Method', field: 'paymentMethod'},
        {title: 'Time', field: 'createdAt'},
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
            onClick: (event: any, rowData: any) => {
                window.open("mailto:" + rowData.email + "?subject=Welcome to Homepedia");
            },
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
