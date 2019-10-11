import React, { Component } from 'react';
import { FormGroup, FormLabel, FormControl, Row } from 'react-bootstrap';

function FieldGroup({ label, ...props }) {
  return (
    <FormGroup>
      <FormLabel>{label}</FormLabel>
      <FormControl {...props} />
    </FormGroup>
  );
}

export class FormInputs extends Component<any, any> {
  render() {
    const row = [];
    for (let i = 0; i < this.props.ncols.length; i++) {
      row.push(
        <div key={i} className={this.props.ncols[i]}>
          <FieldGroup {...this.props.properties[i]} />
        </div>,
      );
    }
    return <Row>{row}</Row>;
  }
}

export default FormInputs;
