import React from 'react';

type myProps = {
  label: string;
};

class Link extends React.Component<myProps> {
  render() {
    const url = '/' + this.props.label.toLowerCase().trim().replace(' ', '-');
    return (
      <div>
        <a href={url}>{this.props.label}</a>
        <br />
      </div>
    );
  }
}

export default Link;
