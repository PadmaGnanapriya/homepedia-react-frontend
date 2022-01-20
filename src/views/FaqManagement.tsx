import CustomTable from "../components/CustomTable";
import React, {forwardRef, useEffect, useState} from "react";
import {Button, Container, Form, Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {deleteFAQ, fetchFAQs, selectAllFAQs, updateFAQ} from "../store/faqSlice";
import {toast} from "react-toastify";

const FaqManagement: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectAllFAQs);
  const faqStatus = useSelector((state: any) => state.faqs.status);
  const faqError = useSelector((state: any) => state.faqs.error);
  const [showPreviewIndex, setShowPreviewIndex] = useState(-1);
  const [showFormIndex, setShowFormIndex] = useState(-1);
  const columns = [{title: 'Question', field: 'question'}];
  const [selectedData, setSelectedData] = useState({_id: '', question: '', answer: ''})
  const [updatedQuestion, setUpdatedQuestion] = useState('');
  const [updatedAnswer, setUpdatedAnswer] = useState('');

  useEffect(() => {
    if (faqStatus === 'idle') {
      dispatch(fetchFAQs());
    }
    if (faqError) {
      toast.error(faqError);
    }
  }, [faqStatus, dispatch])

  const handleUpdate = (e: any) => {
    e.preventDefault();
    dispatch(updateFAQ({_id: selectedData._id, question: updatedQuestion, answer: updatedAnswer}));
  }

  const actions: any = [
    {
      icon: forwardRef((props, ref) => <span className="icon-delete" {...props}  />),
      tooltip: 'Delete',
      onClick: (event: any, rowData: any) => dispatch(deleteFAQ(rowData._id))
    },
    {
      icon: forwardRef((props, ref) => <span className="icon-popout" {...props}  />),
      tooltip: 'View',
      onClick: (event: any, rowData: any) => {
        setSelectedData(rowData);
        setShowPreviewIndex(rowData.index)
      }
    },
    {
      icon: forwardRef((props, ref) => <span className="icon-create" {...props}  />),
      tooltip: 'Edit',
      onClick: (event: any, rowData: any) => setShowFormIndex(rowData.index)
    },
  ]

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
            <h4 className="text-center">FAQ Edit Form</h4>
            <Form onSubmit={handleUpdate}>
              <Form.Group className="mb-3" controlId="formGroupQuestion">
                <Form.Label>FAQ Question</Form.Label>
                <Form.Control type="text" placeholder={selectedData.question}
                              onChange={e => setUpdatedQuestion(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupAnswer">
                <Form.Label>FAQ Answer</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder={selectedData.answer}
                              onChange={e => setUpdatedAnswer(e.target.value)}/>
              </Form.Group>
              <Button className="btn-secondary py-2 my-3 w-50 h3"
                      onClick={() => setShowFormIndex(-1)}>Close</Button>
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
            <h5 className="mb-0 mt-3">Question</h5>
            <small>{selectedData.question}</small>
            <h5 className="mb-0 mt-3">Answer</h5>
            <small>{selectedData.answer}</small>
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
