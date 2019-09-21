import React from 'react';
import PropTypes from 'prop-types';

import {
  ListContent,
  ListTable,
  Button,
  ButtonLink,
  PaginationContent,
} from './styles';

function UsersList({ data, prevPage, nextPage }) {
  return (
    <ListContent>
      <ListTable>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Login</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.login}</td>
              <td width="150">
                <ButtonLink to={`/profile/${item.login}`}>
                  View profile
                </ButtonLink>
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan="3">
              <PaginationContent>
                <Button type="button" onClick={() => prevPage()}>
                  {'<'}
                </Button>
                <Button type="button" onClick={() => nextPage()}>
                  {'>'}
                </Button>
              </PaginationContent>
            </td>
          </tr>
        </tfoot>
      </ListTable>
    </ListContent>
  );
}

UsersList.propTypes = {
  data: PropTypes.array.isRequired,
  prevPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
};

export default UsersList;
