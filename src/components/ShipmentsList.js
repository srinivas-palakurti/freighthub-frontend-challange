import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchShipments } from "../actions/shipmentsActions";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import { makeStyles } from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableSortLabel from '@material-ui/core/TableSortLabel';


class ShipmentsList extends Component {

    columns = [
        {
            dataField: "id",
            text: 'Shipment ID',
            sort: true
        },
        {
            dataField: "name",
            text: 'Shipment Name',
            sort: true,
            formatter: (cell, row) => this.props.shipments[row],
  sortValue: (cell, row) => this.props.shipments[row]
        },
        {
            dataField: "mode",
            text: 'Shipment Mode',
            sort: true
        },
        {
            dataField: "destination",
            text: 'Shipment Destination',
            sort: true
        },
        {
            dataField: "origin",
            text: 'Shipment Origin',
            sort: true
        },
        {
            dataField: "total",
            text: 'Total',
            sort: true
        },
        {
            dataField: "status",
            text: 'Status',
            sort: true
        },
        {
            dataField: "userId",
            text: 'Shipment UserId'
        },
        {
            dataField: "type",
            text: 'Shipment type'
        }
    ];

    defaultSorted = [{
        dataField: 'name',
        order: 'desc'
    }]

    sortFunc = (a, b, order, dataField) => {
        if (order === 'asc') {
          return b - a;
        }
        return a - b; // desc
      }
    componentWillMount() {
        this.props.fetchShipments();
        console.log(this.props);
    }

    basicTable = () => {
        return (
            <BootstrapTable 
                keyField='id'
                data={this.props.shipments}
                columns={this.columns}
                striped
                hover
                condensed

            />
        )
    }

    render() {

        const basicTable = <BootstrapTable 
            keyField = 'id'
            data = {this.props.shipments}
            columns = {this.columns}
            defaultSorted = {this.defaultSorted}
            
        />


        function stableSort(array, comparator) {
            const stabilizedThis = array.map((el, index) => [el, index]);
            stabilizedThis.sort((a, b) => {
              const order = comparator(a[0], b[0]);
              if (order !== 0) return order;
              return a[1] - b[1];
            });
            return stabilizedThis.map(el => el[0]);
          }
        
        /* return(
            <div>
                {basicTable}
            </div>
        ) */

        return (
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.props.shipments.map(row => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.total}</TableCell>
                      <TableCell align="right">{row.mode}</TableCell>
                      <TableCell align="right">{row.type}</TableCell>
                      <TableCell align="right">{row.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          );
    }
}

const mapStateToProps = state => ({
    shipments: state.shipments.shipments
});

export default connect(mapStateToProps, {fetchShipments})(ShipmentsList);