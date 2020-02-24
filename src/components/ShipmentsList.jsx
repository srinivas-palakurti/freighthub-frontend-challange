import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchShipments } from "../actions/shipmentsActions";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { TableSortLabel } from "@material-ui/core";
import orderBy from 'lodash/orderBy';

class ShipmentsList extends Component {
  columns = [
    {
      label: "ShipmentID",
      field: "id",
      sort: "asc",
      width: 100
    },
    {
      label: "Shipment Name",
      field: "name",
      sort: "asc",
      width: 270
    },
    {
      label: "Destination",
      field: "destination",
      sort: "asc",
      width: 270
    },
    {
      label: "Origin",
      field: "origin",
      sort: "asc",
      width: 270
    },
    {
      label: "Total",
      field: "total",
      sort: "asc",
      width: 100
    },
    {
      label: "Status",
      field: "status",
      sort: "asc",
      width: 100
    },
    {
      label: "Mode",
      field: "mode",
      sort: "asc",
      width: 100
    },
    {
      label: "Type",
      field: "type",
      sort: "asc",
      width: 100
    }
  ];

  invertDirection = {
    'asc': 'desc',
    'desc': 'asc'
  }

  useStyles = makeStyles({
    table: {
      minWidth: 650
    }
  });

  constructor(props) {
    super(props);
    // props.state.columns = { attribute : "value" }; 
    console.log('state',this.props.columns);

    this.state = {
      shipment: this.props.shipments
    };

    this.setState({
      columns:  this.columns
    });
    console.log('props',props);
    console.log('state',this.props.columns);

  }
  
  componentWillMount() {
    this.props.fetchShipments();

    this.setState({
        shipments: this.props.shipments
      }
    );
    // console.log(this.props);
  }

  shipmentSelected(row) {
    console.log(row);
  }
  columnToSort = '';
  sortDirection = '';

  handlesort = prop => {
    console.log(prop);

    // this.setState(state => ({
      this.sortDirection = this.columnToSort === prop.field ? this.invertDirection: 'asc';
      this.columnToSort = prop.field;

    // }));

    console.log(orderBy(
      this.props.shipments, 
      prop.field, 
      this.columnToSort === prop.field ? this.invertDirection[this.columnToSort]: 'asc'));
      
    this.setState({
      shipments: orderBy(
        this.props.shipments, 
        prop.field, 
        this.columnToSort === prop.field ? this.invertDirection[this.columnToSort]: 'asc')
    }
  )

      // this.props.shipments = 
      //    orderBy(
      //     this.props.shipments, 
      //     prop.field, 
      //     this.columnToSort === prop.field ? this.invertDirection[this.columnToSort]: 'asc');

    // this.state.props.shipments = orderBy(
    //                         this.props.shipments, 
    //                         prop.field, 
    //                         this.columnToSort === prop.field ? this.invertDirection: 'asc');
  }

  componentWillReceiveProps(nextProps) {

    this.setState({
      shipments: nextProps.showModal
   });
    console.log('next Props', nextProps);
  }

  // static getDerivedStateFromProps(nextProps, prevState) {

  //   console.log('next Props', nextProps, prevState);

  //   return {
  //     shipments: nextProps,
  //   };
  //  }

  render() {
    console.log(this.props);

    const tableRows = this.props.shipments.map(shipment => (
      <TableRow
        hover
        key={shipment["id"]}
        onClick={() => this.shipmentSelected(shipment)}
      >
        {this.columns.map(col => (
          <TableCell component="th" scope="row">
            {shipment[col.field]}
          </TableCell>
        ))}
      </TableRow>
    ));

    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {this.columns.map(col => (
                <TableCell component="th" scope="column">
                  {col.label}

                  <TableSortLabel
                    active
                    // direction="desc"
                    onClick={() => this.handlesort(col)}
                  ></TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>{tableRows}</TableBody>
        </Table>
      </TableContainer>
    );
  }
}

const mapStateToProps = state => ({
  shipments: state.shipments.shipments,
  columns: [],
  columnToSort: '',
  sortDirection: ''
});

export default connect(mapStateToProps, { fetchShipments })(ShipmentsList);
