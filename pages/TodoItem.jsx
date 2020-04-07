import React from "react";
import { Button } from "antd";
import { map } from "lodash";

export default class TodoItem extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <ul>
        {map(items, (item) => (
          <li key={item.id}>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    );
  }
}
