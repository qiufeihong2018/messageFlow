import React, { Component } from "react";
import { LeftOutlined, UserOutlined } from "@ant-design/icons";
import "./index.css";
export default class index extends Component {
  render() {
    return (
      <div>
        <div className="message-bar">
          <span>
            <LeftOutlined />
            微信(666)
          </span>
          <span>
            <UserOutlined />
          </span>
        </div>
      </div>
    );
  }
}
