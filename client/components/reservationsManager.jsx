import React, {Component, PropTypes} from 'react';
import ReservationForm from './reservationForm.jsx';
import ReservationStatus from './reservationStatus.jsx';

import {AgGridReact} from 'ag-grid-react';
import {reactCellRendererFactory} from 'ag-grid-react';
import {reactFilterFactory} from 'ag-grid-react';

import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/theme-fresh.css';

export default class ReservationsManager extends Component {
  onGridReady(params) {
    debugger;
    this.api = params.api;
    this.columnApi = params.columnApi;
  }
  render() {
    var columnDefs = [
      {headerName: "Date & Time", field: "dateTime", width: "200" },
      {headerName: "Name", field: "name", width: "100"},
      {headerName: "Number", field: "partyNumber", width: "100"},
      {headerName: "Test", width: "100", cellRenderer: reactCellRendererFactory(ReservationStatus) }
    ];

    var rowData = this.props.reservations;

    return (
      <div className="container">
        <header>
          <h1>Reservations</h1>
          <ReservationForm {...this.props} />
        </header>
        <div className="ag-fresh">
          <AgGridReact
            width="700"
            rowData={rowData}
            columnDefs={columnDefs}
          />
        </div>
      </div>
    );
  }
}
