import React from 'react';
/*
  this component returns a wrapped component.
  wrapped component is responsible setting the localStorage and it returns load, save and remove functions
  any component which consume this component, gets three functions oad, save andd remove.
  this three functions will set data local storage.
*/

const withStorage = (WrappedComponent) => {
  class HOC extends React.Component {
    state = {
      localStorageAvailable: false
    };
    componentDidMount() {
      this.checkLocalStorageExists();
    }

    checkLocalStorageExists(){
      const testKey = 'test123';

      try{
        localStorage.setItem(testKey,testKey);
        console.log('check:'+localStorage.getItem(testKey));
        localStorage.removeItem(testKey);
        this.setState({localStorageAvailable: true});
      }
      catch(e){
        this.setState({localStorageAvailable: false});
      }
      console.log('check2:'+localStorage.getItem(testKey));
    };

    load = (key) => {
      console.log('load:'+this.state.localStorageAvailable+' '+localStorage.getItem(key));
      if(this.state.localStorageAvailable){
        return localStorage.getItem(key);
      }
        return null;
    }

    save = (key, data) => {
      console.log('save:'+this.state.localStorageAvailable+' '+key+' '+data);
      if(this.state.localStorageAvailable){
        localStorage.setItem(key, data);
      }
    }

    remove = (key) => {
      console.log('remove');
      if(this.state.localStorageAvailable){
        localStorage.removeItem(key);
      }
    }

    render(){
      return(
        <WrappedComponent
        load={this.load}
        save={this.save}
        remove={this.remove}
        {...this.props}
        />
      );
    };

  }
  return HOC;
}

export default withStorage;
