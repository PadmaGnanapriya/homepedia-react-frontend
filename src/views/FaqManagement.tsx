import CustomTable from "../components/CustomTable";
import React, {forwardRef, useState} from "react";
import {Button, Container, Form, Modal} from "react-bootstrap";

const FaqManagement: React.FC = () => {
  const data = [
    {
      index: 1,
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
      answer: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.`
    },
    {
      index: 2,
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
      answer: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.`
    },
    {
      index: 3,
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
      answer: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.`
    }
  ];

  const columns = [
    // {title: 'Index', field: 'index'},
    {title: 'Question', field: 'question'},

  ];

  // TODO : Create function for onClick event. remove dummy console log
  const actions: any = [
    {
      icon: forwardRef((props, ref) => <span className="icon-delete" {...props}  />),
      tooltip: 'Delete',
      onClick: (event: any, rowData: any) => console.log("You saved ", rowData)
    },
    {
      icon: forwardRef((props, ref) => <span className="icon-popout" {...props}  />),
      tooltip: 'View',
      onClick: (event: any, rowData: any) => setShowPreviewIndex(rowData.index)
    },
    {
      icon: forwardRef((props, ref) => <span className="icon-create" {...props}  />),
      tooltip: 'Edit',
      onClick: (event: any, rowData: any) => setShowFormIndex(rowData.index)
    },
  ]
  const [showPreviewIndex, setShowPreviewIndex] = useState(-1);
  const [showFormIndex, setShowFormIndex] = useState(-1);

  return (
    <React.Fragment>
      <CustomTable title={'FAQ Management'} data={data} columns={columns} actions={actions}/>

      <Modal
        show={showFormIndex !== -1}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <Container>
            <h4 className="text-center">FAQ Create|Edit Form</h4>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupIndex">
                <Form.Label>FAQ Index</Form.Label>
                <Form.Control type="number" placeholder="Enter FAQ Index"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupQuestion">
                <Form.Label>FAQ Question</Form.Label>
                <Form.Control type="text" placeholder="Enter FAQ Question"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupAnswer">
                <Form.Label>FAQ Answer</Form.Label>
                <Form.Control as="textarea" rows={3}/>
              </Form.Group>
              <Button className="btn-secondary py-2 my-3 w-50 h3" onClick={() => setShowFormIndex(-1)}>Close</Button>
              <Button type="submit" className="py-2 my-3 w-50 h3">
                <span className="h5">Submit</span>
              </Button>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showPreviewIndex !== -1}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <Container>
            <h4 className="text-center">FAQ Overview</h4>
            <h5 className="mb-0 mt-3">Index</h5>
            <small>{data[showPreviewIndex]?.index || ''}</small>
            <h5 className="mb-0 mt-3">Question</h5>
            <small>{data[showPreviewIndex]?.question || ''}</small>
            <h5 className="mb-0 mt-3">Answer</h5>
            <small>{data[showPreviewIndex]?.answer || ''}</small>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShowPreviewIndex(-1)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  )
}

export default FaqManagement;
