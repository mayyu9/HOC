import React from 'react';
/*
this HOC component receives a parameter, which is a component,
we return a wrapped function with some data.

refer: https://levelup.gitconnected.com/understanding-react-higher-order-components-by-example-95e8c47c8006
*/

const withSecretToLife = (WrappedComponent, data) => {
  console.log('withSecretToLife:');
  class HOC extends React.Component{
    constructor(props){
      super(props);
      this.state={str:data};
    }

    render(){
      console.log('str:'+this.state.str); // data is passed from the component and collected here
      console.log('HOC:'+JSON.stringify(this.props));
      return(
        <WrappedComponent
          {...this.props}
          secretToLife={26} />
      );
    }
  }
  return HOC;
};

export default withSecretToLife;
