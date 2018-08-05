import React from 'react';
import withSecretToLife from './BasicHOCComponent';

const BasicComponent = (props) => {
  console.log('basic:'+JSON.stringify(this.props));
  return(
    <div>
      <p>this component is passed as parameter to hoc component, from hoc component we will pass the props
      receive it and use that value.</p>
      <p>The secret to life is {props.secretToLife}.</p>
    </div>
  );
};

const WrappedComponent = withSecretToLife(BasicComponent, 'ms');

export default WrappedComponent;
