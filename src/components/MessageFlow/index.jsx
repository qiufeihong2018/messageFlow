import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Avatar, Image } from "antd";
import { MESSAGE_TYPE_ENUMS, MESSAGE_TYPE_LIST } from "../../constant";
import "./index.css";

class MessageFlow extends PureComponent {
  // 文本类型
  renderText = () => {
    const { text } = this.props;

    return <section className="text-message">{text}</section>;
  };

  // 图片类型
  renderImage = () => {
    const { url } = this.props;

    return (
      <div className="img-message">
        <Image width={200} src={url} alt="图片消息" />
      </div>
    );
  };

  // 系统消息类型
  renderSystemMessage = () => {
    const { text } = this.props;

    return <div className="system-message">我是系统消息： {text}</div>;
  };

  renderMessageInfo = () => {
    const { type, render } = this.props;

    let ele = null;
    switch (type) {
      case MESSAGE_TYPE_ENUMS.TEXT.value:
        ele = this.renderText();
        break;
      case MESSAGE_TYPE_ENUMS.IMAGE.value:
        ele = this.renderImage();
        break;
      case MESSAGE_TYPE_ENUMS.SYSTEM_INFO.value:
        ele = this.renderSystemMessage();
        break;
      default:
        ele = render;
    }

    return ele;
  };

  render() {
    const { type, name } = this.props;
    const isSystemInfo = MESSAGE_TYPE_ENUMS.SYSTEM_INFO.value;

    return (
      <div className="message-wrap">
        {type !== isSystemInfo  ? (
          <div className="message-avatar">
            <Avatar
              src={
                <Image
                  src="https://joeschmoe.io/api/v1/random"
                  style={{
                    width: 40,
                  }}
                />
              }
            />
            {name}
          </div>
        ) : null}
        <div>{this.renderMessageInfo()}</div>
      </div>
    );
  }
}

MessageFlow.propTypes = {
  type: PropTypes.oneOf(MESSAGE_TYPE_LIST.map((i) => i.value)),
  text: PropTypes.node,
  url: PropTypes.string,
  render: PropTypes.node,
};

MessageFlow.defaultProps = {
  type: MESSAGE_TYPE_ENUMS.TEXT.value,
  text: "我是文本",
};

export default MessageFlow;
