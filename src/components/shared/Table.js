import React from 'react';
import PropTypes from 'prop-types';

const Table = ({title, headingData, rowData, rowKeys}) => {
  return (
    <table className="table table-striped table-bordered">
        <caption hidden="true">{title}</caption>
        <thead className="thead-light">
          <tr>
            {
              headingData.map((heading, index) => {
                return(
                  <th key={index}>{heading}</th>
                );
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            rowData.map((data, index) => {
              return(
                <tr key={index}>
                  {
                    rowKeys.map((key, i) => {
                      return(
                        <td key={i}>{data[key]}</td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
  );
};

Table.propTypes = {
  title: PropTypes.string,
  headingData: PropTypes.arrayOf(PropTypes.string),
  rowData: PropTypes.arrayOf(PropTypes.object),
  rowKeys: PropTypes.arrayOf(PropTypes.string)
};
 
export default Table;