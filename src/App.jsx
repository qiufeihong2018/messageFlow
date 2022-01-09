import React, { PureComponent } from "react";
import { List, Skeleton, Button } from "antd";
import { nanoid } from "nanoid";
import MessageFlow from "./components/MessageFlow";
import MessageBar from "./components/MessageBar";
import MessageOpt from "./components/MessageOpt";
import { MESSAGE_TYPE_ENUMS } from "./constant";
import chatData from "./assets/chatData";
import "./App.css";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      list: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getOtherMessage = () => {
    return <div className="other-message">其他类型的消息流</div>;
  };

  getData = () => {
    this.setState({
      loading: true,
    });
    // 延迟代替从后端获取数据
    let list;
    setTimeout(async () => {
      list = await Promise.resolve(chatData);
      list[5].render = this.getOtherMessage();
      this.setState({
        list,
        loading: false,
      });
    }, 500);
  };

  /**
   * 撤回消息
   * @param {*} item 每项
   */
  handerRecall = (item) => {
    let list = this.state.list.slice();
    list = list.filter((l) => {
      if (l.id !== item.id) {
        return l;
      } else {
        l.type = 2;
        l.text = "您撤回了一条消息";
        return l;
      }
    });
    this.setState({
      list,
    });
  };

  getActionEle = (item) => {
    return item.type !== MESSAGE_TYPE_ENUMS.SYSTEM_INFO.value
      ? [
          <Button type="link" onClick={() => this.handerRecall(item)}>
            撤销
          </Button>,
        ]
      : null;
  };

  handerSubmit = (inputDom) => {
    let list = this.state.list.slice();
    const obj = {
      id: nanoid(10),
      name: "人物 C",
      type: 0,
      text: inputDom.state.value,
    };
    this.setState({
      list: [...list, obj],
    });
  };

  render() {
    const { loading, list } = this.state;

    return (
      <div className="app">
        {/* 头部区域 */}
        <MessageBar />
        {/* 消息流区域 */}
        <List
          className="message-list"
          loading={loading}
          itemLayout="horizontal"
          dataSource={list}
          renderItem={(item) => (
            <List.Item actions={this.getActionEle(item)}>
              <Skeleton avatar title={false} loading={item.loading} active>
                <MessageFlow {...item} />
              </Skeleton>
            </List.Item>
          )}
        />
        {/* 底部操作区域 */}
        <MessageOpt handerSubmit={this.handerSubmit}/>
      </div>
    );
  }
}

export default App;
