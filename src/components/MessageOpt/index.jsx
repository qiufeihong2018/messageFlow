import React, { Component } from "react";
import { Input, Button } from "antd";
import PropTypes from "prop-types";

class MessageOpt extends Component {
  handerSubmit = () => {
    this.props.handerSubmit(this.inputDom);
  };
  render() {
    return (
      <div>
        <Input.Group compact>
          <Input
            ref={(input) => (this.inputDom = input)}
            style={{ width: "calc(100% - 63px)" }}
            defaultValue="我是前端keep，前来报到"
          />
          <Button onClick={this.handerSubmit} type="primary">
            发送
          </Button>
        </Input.Group>
      </div>
    );
  }
}

MessageOpt.propTypes = {
  handerSubmit: PropTypes.func,
};

export default MessageOpt