import React from "react";
import TreeNode from "./TreeNode";

class TreeViewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    setTimeout(async () => {
      const response = await fetch("http://www.mocky.io/v2/5cff79fc3200007100eac68f");
      const respnseJson = await response.json();

      this.setState({ data: [respnseJson.responseData] });
    }, 0);
  }
 
  render() {
    const loop = (data) => {
        return data.map((item) => (
            <TreeNode key={item.source} items={item.children && item.children.length ? loop(item.children) : null} open={item.open} 
            checked={false}>
              {item.source}
            </TreeNode>
          ));
    }

    if (this.state.data) {
      {
        return loop(this.state.data);
      }
    }

    return "Loading...";
  }
}

export default TreeViewComponent;
