import * as React from 'react';
import { Icon } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

export class StepIndicator extends React.PureComponent<{ step: number; length: number }> {
  render() {
    const icons = [];
    for (let i = 0; i < this.props.length; i++) {
      const iconName = i === this.props.step ? IconNames.FULL_CIRCLE : IconNames.CIRCLE;
      icons.push(<Icon icon={iconName} key={i} iconSize={10} />);
    }
    return <div className="step-indicator">{icons}</div>;
  }
}
