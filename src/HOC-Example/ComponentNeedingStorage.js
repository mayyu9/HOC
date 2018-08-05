import React from 'react';
import withStorage from './withStorage';
/*
  this component will fetch username and favoriteMovie details, those details needs to be stored in the local storage.
  we create a HOC component and pass those details to the HOC component.
  HOC component returns a wrapped component having save and load function as props.
*/
class ComponentNeddingStorage extends React.Component {
  state = {
    username: '',
    favoriteMovie:'',
  }

  componentDidMount(){
    const username = this.props.load('username');
    const favoriteMovie = this.props.load('favoriteMovie');

    if(!username || !favoriteMovie) {
      // This will come from the parent component
      // and would be passed when we spread props {...this.props}

      const user = {
        username: 'msd',
        favoriteMovie: 'loading'
      };

      this.props.save('username', user.username) || '';
      this.props.save('favoriteMovie', user.favoriteMovie) || '';
      this.setState({
        username: user.username,
        favoriteMovie: user.favoriteMovie,
      });
      // this.props.reallyLongApiCall()
      //   .then((user) => {
      //     this.props.save('username', user.username) || '';
      //     this.props.save('favoriteMovie', user.favoriteMovie) || '';
      //     this.setState({
      //       username: user.username,
      //       favoriteMovie: user.favoriteMovie,
      //     });
      //   });
    }
    else{
      this.setState({username, favoriteMovie});
    }
  }

  render(){
    const {username, favoriteMovie } = this.state;

    if(!username || !favoriteMovie){
      return <div>Lading.....</div>
    }

    return(
      <div>
      my username is {username} and I love to watch {favoriteMovie}.
      </div>
    );
  }
};

const WComponent = withStorage(ComponentNeddingStorage);

export default WComponent;
