import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { format } from 'date-fns';
import { getUserRequest } from '~/store/modules/users/actions';
import { getRepositoriesRequest } from '~/store/modules/repositories/actions';

import Loading from '~/components/Loading';
import ReposList from '~/components/DataList/repos';

import {
  Container,
  ContainerHeader,
  Title,
  BackButton,
  ColLeft,
  ColRight,
  ProfileCard,
  Avatar,
} from './styles';

function Profile({ match }) {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.users.loading);
  const profile = useSelector(state => state.users.profile);
  const repositories = useSelector(state => state.repositories.list);
  const loadingRepos = useSelector(state => state.repositories.loading);

  useEffect(() => {
    const { username } = match.params;
    dispatch(getUserRequest(username));
    dispatch(getRepositoriesRequest(username));
  }, []);

  return (
    <>
      <ContainerHeader>
        <BackButton to="/">
          <img alt="Back Button" src="/images/back.svg" width="38" />
        </BackButton>
        <Title>Profile</Title>
      </ContainerHeader>
      <Container>
        <ColLeft>
          {loading && <Loading />}
          {!loading && profile && (
            <ProfileCard>
              <Avatar src={profile.avatar_url} alt={profile.name} />
              <h3>
                #{profile.id} - {profile.name}
              </h3>
              <p>
                Member since:{' '}
                {format(new Date(profile.created_at), 'MM-dd-yyyy HH:mm')}
              </p>
              <p>{profile.html_url}</p>
            </ProfileCard>
          )}
        </ColLeft>

        <ColRight>
          {loadingRepos && <Loading />}
          {!loadingRepos && <ReposList data={repositories} />}
        </ColRight>
      </Container>
    </>
  );
}

Profile.defaultProps = {
  match: {
    params: {
      username: '',
    },
  },
};

Profile.propTypes = {
  match: PropTypes.any,
};

export default Profile;
