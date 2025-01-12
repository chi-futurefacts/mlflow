import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LegacyTable } from '@databricks/design-system';
import './HtmlTableView.css';

export class HtmlTableView extends Component {
  static propTypes = {
    columns: PropTypes.array.isRequired,
    values: PropTypes.array.isRequired,
    styles: PropTypes.object,
    testId: PropTypes.string,
    scroll: PropTypes.object,
  };

  render() {
    const styles = this.props.styles || {};

    return (
      <LegacyTable
        className='html-table-view'
        data-test-id={this.props.testId}
        dataSource={this.props.values}
        columns={this.props.columns}
        scroll={this.props.scroll}
        size='middle'
        pagination={false}
        style={styles}
      />
    );
  }
}
