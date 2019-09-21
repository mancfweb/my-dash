import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsersRequest } from '~/store/modules/users/actions';

import Loading from '~/components/Loading';
import UsersList from '~/components/DataList/users';

import { Title } from './styles';

function Dashboard() {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.users.loading);
  const users = useSelector(state => state.users.list);
  const nextSince = useSelector(state => state.users.nextSince);
  // const get_fail = useSelector(state => state.users.fail);

  const [since, setSince] = useState(0);
  const [sinceList, setSinceList] = useState([]);
  const [currentPage, setCurrentePage] = useState(0);

  function handlePrevPage() {
    const prevPage = currentPage - 1;
    setSince(sinceList[prevPage]);
    setCurrentePage(prevPage);
    setTimeout(() => {
      const since_list = sinceList;
      since_list.pop();
      setSinceList(since_list);
    }, 300);
  }

  function handleNextPage() {
    setSinceList([...sinceList, users[0].id - 1]);
    setTimeout(() => {
      setCurrentePage(currentPage + 1);
      setSince(nextSince);
    }, 300);
  }

  useEffect(() => {
    dispatch(getUsersRequest(since));
  }, [since]);

  return (
    <>
      <Title>Users</Title>
      {loading && <Loading />}
      {!loading && (
        <UsersList
          data={users}
          prevPage={() => handlePrevPage()}
          nextPage={() => handleNextPage()}
        />
      )}
    </>
  );
}

export default Dashboard;
