import React from "react";

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: props.checked,
      label: props.label,
    };
  }

  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });

    if (this.props.onChange) {
        this.props.onChange(this.state.isChecked);
    }
  };

  render() {
    return (
      <label>
        <input type="checkbox" checked={this.state.isChecked} onChange={this.toggleChange} />
        {this.state.label}
      </label>
    );
  }
}

export default Checkbox;
