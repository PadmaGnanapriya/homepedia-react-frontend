import React, {forwardRef} from "react";
import MaterialTable from "material-table";
import {Container} from "react-bootstrap";

type CustomTableProps = {
  title: string;
  columns: any;
  data: any;
  actions: any;
}

const CustomTable: React.FC<CustomTableProps> = (props) => {

  const tableIcons: any = {
    Add: forwardRef((props, ref) => <span className="icon-add" {...props}  />),
    Check: forwardRef((props, ref) => <span className="icon-check" {...props}  />),
    Clear: forwardRef((props, ref) => <span className="icon-add" {...props}  />),
    Delete: forwardRef((props, ref) => <span className="icon-clear" {...props}  />),
    DetailPanel: forwardRef((props, ref) => <span className="icon-delete" {...props}  />),
    Edit: forwardRef((props, ref) => <span className="icon-edit" {...props}  />),
    ResetSearch: forwardRef((props, ref) => <span className="icon-refresh" {...props}  />),
    Search: forwardRef((props, ref) => <span className="icon-search" {...props}  />),
    Export: forwardRef((props, ref) => <span className="" {...props}  />),
    Filter: forwardRef((props, ref) => <span className="icon-filter_list" {...props}  />),
    FirstPage: forwardRef((props, ref) => <span className="icon-skip_previous" {...props}  />),
    LastPage: forwardRef((props, ref) => <span className="icon-skip_next" {...props}  />),
    PreviousPage: forwardRef((props, ref) => <span className="icon-keyboard_arrow_left" {...props}  />),
    SortArrow: forwardRef((props, ref) => <span className="icon-sort-amount-asc" {...props}  />),
    ThirdStateCheck: forwardRef((props, ref) => <span className="" {...props}  />),
    ViewColumn: forwardRef((props, ref) => <span className="icon-view_column" {...props}  />),
    NextPage: forwardRef((props, ref) => <span className="icon-keyboard_arrow_right" {...props}  />),
  };

  const tableRef = React.createRef();

  const editable = props.data.map((o: any) => ({ ...o }));


  return (
    <Container className="py-5">
      <MaterialTable
        icons={tableIcons}
        title={props.title}
        tableRef={tableRef}
        options={{
          actionsColumnIndex: -1,
          addRowPosition: 'first'
        }}
        columns={props.columns}
        data={editable}
        actions={props.actions}
      />
    </Container>
  )
}

export default CustomTable;
