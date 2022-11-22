import React, { ReactNode } from 'react';
import * as ReactDOM from 'react-dom';

type myProps = typeof Tooltip.defaultProps & {
  children: ReactNode;
  allowToggleWithClick: boolean;
  allowToggleWithMouseInteraction: boolean;
  positionWhereShowText: 'top' | 'bottom';
  text: string;
};

type myState = {
  opacity: boolean;
  top: number;
  left: number;
};

class Tooltip extends React.Component<myProps, myState> {
  static defaultProps = {
    allowToggleWithClick: false,
    allowToggleWithMouseInteraction: true,
    positionWhereShowText: 'bottom',
  };

  constructor(props: myProps) {
    super(props);
    this.state = { opacity: false, top: 0, left: 0 };
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseInteraction = this.handleMouseInteraction.bind(this);
  }

  handleClick() {
    if (!this.props.allowToggleWithClick) {
      return false;
    }

    this.toggle();
  }

  handleMouseInteraction() {
    if (!this.props.allowToggleWithMouseInteraction) {
      return false;
    }

    this.toggle();
  }

  toggle() {
    const tooltipNode = ReactDOM.findDOMNode(this) as HTMLDivElement;

    if (tooltipNode) {
      this.setState({
        opacity: !this.state.opacity,
        top: tooltipNode.offsetTop,
        left: tooltipNode.offsetLeft,
      });
    }
  }

  render() {
    const top = this.state.top || 0;
    const style = {
      zIndex: this.state.opacity ? 1000 : -1000,
      opacity: +this.state.opacity,
      top: top + (this.props.positionWhereShowText === 'bottom' ? +20 : -60),
      left: (this.state.left || 0) - 30,
    };

    const toolTipClasses = 'tooltip ' + this.props.positionWhereShowText;

    return (
      <div style={{ display: 'inline' }}>
        <span
          style={{ color: 'blue' }}
          onClick={this.handleClick}
          onMouseEnter={this.handleMouseInteraction}
          onMouseOut={this.handleMouseInteraction}
        >
          {this.props.children}
        </span>
        <div className={toolTipClasses} style={style} role='tooltip'>
          <div className='tooltip-arrow'></div>
          <div className='tooltip-inner'>{this.props.text}</div>
        </div>
      </div>
    );
  }
}

export default Tooltip;
