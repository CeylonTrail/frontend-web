import React from "react";
import "./Chat.css";

const Chat = () => {
  return (
    <div className="container">
      <div className="row chat-clearfix">
        <div className="col-lg-12">
          <div className="chat-card chat-app">
            <div id="plist" className="chat-people-list">
              <div className="flex flex-1 justify-center px-2 lg:ml-7 lg:justify-end ">
                <div className="max-w-lg w-full lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="flex items-center gap-1 px-2 border border-secondary rounded-lg bg-SecondaryLight ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-secondary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full px-2 py-2 text-secondary bg-transparent rounded-md outline-none bg-SecondaryLight placeholder-secondary"
                    />
                  </div>
                </div>
              </div>
              <ul className="list-unstyled chat-list mt-2 mb-0">
                <li className="chat-clearfix">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    alt="avatar"
                  />
                  <div className="about">
                    <div className="name">Vincent Porter</div>
                    <div className="status">
                      {" "}
                      <i className="fa fa-circle chat-offline"></i> left 7 mins
                      ago{" "}
                    </div>
                  </div>
                </li>
                <li className="chat-clearfix active">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                    alt="avatar"
                  />
                  <div className="about">
                    <div className="name">Aiden Chavez</div>
                    <div className="status">
                      {" "}
                      <i className="fa fa-circle chat-online"></i> online{" "}
                    </div>
                  </div>
                </li>
                <li className="chat-clearfix">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                    alt="avatar"
                  />
                  <div className="about">
                    <div className="name">Mike Thomas</div>
                    <div className="status">
                      {" "}
                      <i className="fa fa-circle chat-online"></i> online{" "}
                    </div>
                  </div>
                </li>
                <li className="chat-clearfix">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="avatar"
                  />
                  <div className="about">
                    <div className="name">Christian Kelly</div>
                    <div className="status">
                      {" "}
                      <i className="fa fa-circle chat-offline"></i> left 10
                      hours ago{" "}
                    </div>
                  </div>
                </li>
                <li className="chat-clearfix">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar8.png"
                    alt="avatar"
                  />
                  <div className="about">
                    <div className="name">Monica Ward</div>
                    <div className="status">
                      {" "}
                      <i className="fa fa-circle chat-online"></i> online{" "}
                    </div>
                  </div>
                </li>
                <li className="chat-clearfix">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                    alt="avatar"
                  />
                  <div className="about">
                    <div className="name">Dean Henry</div>
                    <div className="status">
                      {" "}
                      <i className="fa fa-circle chat-offline"></i> offline
                      since Oct 28{" "}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="chat">
              <div className="chat-header chat-clearfix">
                <div className="row">
                  <div className="col-lg-6">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#view_info"
                    >
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                        alt="avatar"
                      />
                    </a>
                    <div className="chat-about">
                      <h6 className="m-b-0">Aiden Chavez</h6>
                      <small>Last seen: 2 hours ago</small>
                    </div>
                  </div>
                  <div className="col-lg-6 hidden-sm text-right">
                    <a
                      href="javascript:void(0);"
                      className="btn btn-outline-secondary"
                    >
                      <i className="fa fa-camera"></i>
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="btn btn-outline-primary"
                    >
                      <i className="fa fa-image"></i>
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="btn btn-outline-info"
                    >
                      <i className="fa fa-cogs"></i>
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="btn btn-outline-warning"
                    >
                      <i className="fa fa-question"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="chat-history">
                <ul className="m-b-0">
                  <li className="chat-clearfix">
                    <div className="message-data text-right">
                      <span className="message-data-time">10:10 AM, Today</span>
                    </div>
                    <div className="message other-message float-right">
                      Hi Aiden, how are you? How is the project coming along?
                    </div>
                  </li>
                  <li className="chat-clearfix">
                    <div className="message-data">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                        alt="avatar"
                      />
                      <span className="message-data-time">10:12 AM, Today</span>
                    </div>
                    <div className="message my-message">
                      Are we meeting today?
                    </div>
                  </li>
                  <li className="chat-clearfix">
                    <div className="message-data text-right">
                      <span className="message-data-time">10:15 AM, Today</span>
                    </div>
                    <div className="message other-message float-right">
                      Project has been already finished and I have results to
                      show you.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="chat-message chat-clearfix">
                <div className="input-group mb-0">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-send"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter text here..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
