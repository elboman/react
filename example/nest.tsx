import * as React from "react";

export interface IProps {
  foo: string;
}
export class Nest extends React.Component<IProps,any> {
  constructor (props) {
    super(props);
  }
  uiCanExit = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }
  render() {
    return (
        <div>
          <h2>Nested</h2>
          <p>Resolved foo is: {this.props.foo}</p>
        </div> 
    );
  }
}
