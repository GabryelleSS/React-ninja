'use strinct';

import React from 'react';
import PropTypes from 'prop-types';
import Search from '../Search';
import UserInfo from '../UserInfo';
import Actions from '../Actions';
import Repos from '../Repos';

const AppContent = ({ 
    userInfo, 
    repos, 
    starred, 
    handleSearch, 
    getRepos, 
    getStarred 
  }) => (
    <div className='app'>
      <Search handleSearch={handleSearch} />

      {!!userInfo && <UserInfo userInfo={userInfo} />}
      {!!userInfo && <Actions getRepos={getRepos} getStarred={getStarred} />}


      {!!repos.length && 
        <Repos 
          className='repos'
          title='Repositórios:' 
          repos={repos} 
        />
      }

      {!!starred.length && 
        <Repos 
          className='starred' 
          title='Favoritos:' 
          repos={starred} 
        />
      }
    </div>
);

AppContent.propTypes = {
  userInfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired
}

export default AppContent;