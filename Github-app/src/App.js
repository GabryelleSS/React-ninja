'use strict';

import React, { Component } from 'react';
import ajax from '@fdaciuk/ajax';
import AppContent from './components/AppContent';

class App extends Component {

  constructor () {
    super();

    this.state = {
      userInfo: null,
      repos: [],
      starred: []
    }
  }

  handleSearch(evt) {
    const value = evt.target.value;
    const keyCode = evt.which || evt.keyCode;
    const ENTER = 13;

    if (keyCode === ENTER) {
      ajax().get(`https://api.github.com/users/${value}`)
        .then((result) => {
          this.setState({
            userInfo: {
              userName: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            }
          });

          console.log(result)
        });
    }
  }

  getRepos(type) {
    return(e) => {
      ajax().get(`https://api.github.com/users/GabryelleSS/${type}`)
      .then(result => {
        this.setState({
          [type]: [{
            name: result[0].name,
            link: result[0].html_url 
          }]
        })
      })
    }
  }

  render() {
    return (
      <AppContent 
        userInfo={this.state.userInfo} 
        repos={this.state.repos}   
        starred={this.state.starred}   
        handleSearch={evt => this.handleSearch(evt)}
        getRepos={this.getRepos('repos')}
        getStarred={this.getRepos('starred')}
      />
    );
  }
};

export default App;