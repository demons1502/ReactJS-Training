import React from 'react';

import Link from '../Link/';

type myProps = {};

type myState = {
  menus: string[];
};

class Menu extends React.Component<myProps, myState> {
  constructor(props: myProps) {
    super(props);
    this.state = {
      menus: [],
    };
  }

  componentDidMount() {
    fetch('../src/mock/menus.json')
      .then((response) => {
        return response.json();
      })
      .then((menus: string[]) => {
        this.setState({
          menus: menus,
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.menus.map((v, i) => {
          return (
            <div key={i}>
              <Link label={v} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Menu;
