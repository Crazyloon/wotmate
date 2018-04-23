import React from 'react';
import PropTypes from 'prop-types';

const Table = ({title, exercises, containerClass}) => {
  return(
    <div className={containerClass}>
      {
        exercises.map((exercise, index) =>{
          return(
            <table className="table table-striped table-bordered" key={index}>
              <caption hidden="true">{title}</caption>
              <thead className="thead-light">
                <tr>
                  <th>{exercise.type.labels[0]}</th>
                  <th>{exercise.type.labels[1]}</th>
                  <th>{exercise.type.labels[2]}</th>
                </tr>
              </thead>
              <tbody>
                {
                  exercises[index].sets.map((set, idx) => {
                    return(
                      <tr key={idx}>
                        {
                          Object.keys(set).map((key, i) =>{
                            return(
                              <td key={i}>{set[key]}</td>
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
        })
      }
    </div>
    );
};

Table.propTypes = {
  containerClass: PropTypes.string,
  title: PropTypes.string,
  exercises: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.shape({
        id: PropTypes.number.isRequired,
        labels: PropTypes.objectOf(PropTypes.string)
      }),
    sets: PropTypes.array
  }))
};
 
export default Table;