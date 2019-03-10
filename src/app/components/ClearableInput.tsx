import * as React from 'react';

interface Props {
  onEnter: (value: string) => void;
  placeholder?: string;
  style?: any;
}

type State = {
  value: string;
};

export class ClearableInput extends React.PureComponent<Props, State> {
  state = { value: '' };

  clearState() {
    this.setState({ value: '' });
  }

  onChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ value: event.currentTarget.value });
  };

  onBlur = () => {
    this.clearState();
  };

  onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      this.props.onEnter(this.state.value);
      this.clearState();
    }
  };

  render() {
    const { onEnter, ...props } = this.props;
    return (
      <input
        className="bp3-input clrbl-inp"
        type="text"
        onChange={this.onChange}
        onKeyPress={this.onKeyPress}
        onBlur={this.onBlur}
        value={this.state.value}
        {...props}
      />
    );
  }
}
