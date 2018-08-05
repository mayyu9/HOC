import React from 'react';

/*
  here in this HOC component we are fetching some data from github url. once we get that data same is Passed
  to wrapping component.
  there we can create any number of components which we need what ever the data.
*/
const withGists = (PassedComponent) => {
  class WithGists extends React.Component{
    state={
      gits: []
    };

    componentDidMount(){
      fetch("https://api.github.com/gists/public")
        .then(result=>result.json())
        .then(gits=>this.setState({gits:gits}))
    }

    render(){
      return(
        <PassedComponent
          {...this.props}
          gists={this.state.gits}
          />
      );
    };
  }
  return WithGists;
}

export default withGists;
