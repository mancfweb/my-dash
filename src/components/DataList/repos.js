import React from 'react';
import PropTypes from 'prop-types';

import { ListContent, ListTable } from './styles';

function ReposList({ data }) {
  return (
    <ListContent>
      <ListTable>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Name</th>
            <th>URL</th>
          </tr>
        </thead>

        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.html_url}</td>
            </tr>
          ))}
        </tbody>
      </ListTable>
    </ListContent>
  );
}

ReposList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ReposList;
