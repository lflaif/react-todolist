import React from "react";
import { Form, Input, Button } from "antd";
import { concat, filter } from "lodash";
import TodoItem from "./TodoItem";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: "",
    };
    this.handleTaskAdd = this.handleTaskAdd.bind(this);
    this.handleTaskTextChange = this.handleTaskTextChange.bind(this);
  }

  handleTaskTextChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  handleTaskAdd(e) {
    e.preventDefault();
    const { text } = this.state;
    if (text.length === 0) {
      return;
    }
    const newItem = {
      text: text,
      id: new Date(),
    };
    this.setState(({ items }) => ({
      items: concat(items, newItem),
      text: "",
    }));
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <h1>Task List</h1>
        <TodoItem items={items} handleItemDelete={this.onItemDelete} />
        <Form>
          <Form.Item label="NewTask" name="newTask">
            <Input onChange={this.handleTaskTextChange} />
          </Form.Item>
          <Form.Item>
            <Button onClick={this.handleTaskAdd}>
              Add #{items.length + 1}
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
