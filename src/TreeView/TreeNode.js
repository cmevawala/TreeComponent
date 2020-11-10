import React from "react";
import Checkbox from "./Checkbox";

class TreeNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      open: props.open,
      checked: props.checked,
    };
  }

  toggle(e) {
    this.setState({ open: !this.state.open });
  }

  onCheckBoxChange() {
    this.setState({ open: !this.state.open });
    this.setState({ checked: !this.state.checked }, () => {
      const items = this.state.items.map(item => {
        return <TreeNode  { ...item.props} key={item.key + new Date()}  checked={this.state.checked}  />
      });
      this.setState({ items });
    });

  }

  render() {
    console.log('render');
    return (
      <React.Fragment>
        <div style={{ display: "flex" }}>
          {this.state.items && this.state.items.length && (
            <span id={this.props.children} onClick={(e) => this.toggle(e)}>
              {this.state.open ? "(-)" : "(+)"}
            </span>
          )}
          <Checkbox label={this.props.children} checked={this.state.checked} onChange={this.onCheckBoxChange.bind(this)} />
        </div>
        {this.state.open && <div style={{ marginLeft: "2em" }}>{this.state.items}</div>}
      </React.Fragment>
    );
  }
}

export default TreeNode;
