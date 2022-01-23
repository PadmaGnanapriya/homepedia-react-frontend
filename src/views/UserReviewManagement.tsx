import React, {forwardRef, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  approveUserReview,
  deleteUserReview,
  fetchAllUserReviews,
  selectAllUserReviews
} from "../store/userReviewsSlice";
import CustomTable from "../components/CustomTable";

const UserReviewManagement: React.FC = () => {
  const dispatch = useDispatch()
  const data = useSelector(selectAllUserReviews)
  const UserReviewStatus = useSelector((state: any) => state.userReviews.status)

  useEffect(() => {
    if (UserReviewStatus === 'idle') {
      dispatch(fetchAllUserReviews());
    }
  }, [UserReviewStatus, dispatch])

  const columns = [
    {title: 'Service S. Id', field: 'serviceSupplierId'},
    {title: 'Reviewer Email', field: 'reviewerEmail'},
    {title: 'Rate', field: 'rate'},
    {title: 'User Review Message', field: 'commit'},
  ];

  // TODO : Create function for onClick event. remove dummy console log
  const actions: any = [
    {
      icon: forwardRef((props, ref) =>
        <span className="icon-send" {...props}  />),
      tooltip: 'Reply email',
      onClick: (event: any, rowData: any) => window.open("mailto:" + rowData.reviewerEmail +
        "?subject=Response From Homepedia for your review"),
    },
    {
      icon: forwardRef((props, ref) =>
        <span className="icon-check" {...props}  />),
      tooltip: 'Approve',
      onClick: (event: any, rowData: any) => dispatch((approveUserReview(rowData._id)))
    },
    {
      icon: forwardRef((props, ref) =>
        <span className="icon-delete" {...props}  />),
      tooltip: 'Delete',
      onClick: (event: any, rowData: any) => dispatch((deleteUserReview(rowData._id)))
    }
  ]

  return (
    <CustomTable title={'User Review Management'} data={data} columns={columns} actions={actions}/>
  )
}

export default UserReviewManagement;