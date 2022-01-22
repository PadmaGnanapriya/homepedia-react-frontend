import React, {forwardRef, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteMessage, fetchMessages, selectAllMessages} from "../store/messagesSlice";
import CustomTable from "../components/CustomTable";

const MessageManagement: React.FC = () => {
  const dispatch = useDispatch()
  const data = useSelector(selectAllMessages)
  const MessageStatus = useSelector((state: any) => state.messages.status)

  useEffect(() => {
    if (MessageStatus === 'idle') {
      dispatch(fetchMessages());
    }
  }, [MessageStatus, dispatch])

  const columns = [
    {title: 'Name', field: 'name'},
    {title: 'Email', field: 'email'},
    {title: 'Message', field: 'message'},
  ];

  // TODO : Create function for onClick event. remove dummy console log
  const actions: any = [
    {
      icon: forwardRef((props, ref) => <span className="icon-send" {...props}  />),
      tooltip: 'Reply email',
      onClick: (event: any, rowData: any) => window.open("mailto:" + rowData.email + "?subject=Response From Homepedia"),
    },
    {
      icon: forwardRef((props, ref) => <span className="icon-delete" {...props}  />),
      tooltip: 'Delete',
      onClick: (event: any, rowData: any) => dispatch((deleteMessage(rowData._id)))
    }
  ]

  return (
    <CustomTable title={'Message Management'} data={data} columns={columns} actions={actions}/>
  )
}

export default MessageManagement;