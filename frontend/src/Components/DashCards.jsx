import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
} from "@chakra-ui/react";
import {
  AiFillCaretDown,
  AiFillQuestionCircle,
  AiOutlineSearch,
  AiFillEye,
  AiFillLike,
  AiOutlinePlusCircle
} from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";
import {
  BsThreeDots,
  BsFillPinAngleFill,
  BsChevronRight,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const DashCards = () => {
  let date = new Date();
  return (
    <div className="dashcard">
      <div className="dashcard-left">
        <div className="dleft-card">
          <Tabs className="tab">
            <TabList>
              <Tab>MESSAGE</Tab>
              <Tab>TASK</Tab>
              <Tab>EVENT</Tab>
              <Tab>POLL</Tab>
              <Tab>
                <Menu>
                  <MenuButton>
                    <p className="dashcard-more">
                      <p>MORE</p>
                      <p>
                        <AiFillCaretDown />
                      </p>
                    </p>
                  </MenuButton>
                  <MenuList>
                    <MenuItem>File</MenuItem>
                    <MenuItem>Appreciation</MenuItem>
                    <MenuItem>Announcement</MenuItem>
                  </MenuList>
                </Menu>
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <p className="msg">Send message...</p>
              </TabPanel>
              <TabPanel>
                <p>Task</p>
              </TabPanel>
              <TabPanel>
                <p>Event</p>
              </TabPanel>
              <TabPanel>
                <p>Poll</p>
              </TabPanel>
              <TabPanel></TabPanel>
            </TabPanels>
          </Tabs>
        </div>

        <div className="dashcard-middle">
          <div className="dm-left">
            <p>Feed</p>
          </div>
          <div className="dm-right">
            <div className="dm-search">
              <div className="search">
                <input type="text" placeholder="Filter and search" />
                <AiOutlineSearch />
              </div>
            </div>
            <div className="settings">
              <IoIosSettings />
            </div>
          </div>
        </div>
        <Box borderRadius="lg" className="dashcard-down">
          <div className="dash-down-up">
            <div className="dd-left">
              <img
                src="https://www.kindpng.com/picc/m/21-214439_free-high-quality-person-icon-default-profile-picture.png"
                alt="profile"
              />
            </div>
            <div className="dd-right">
              <div>
                <div className="dd-l">
                  <p>
                    <Link href="#">
                      <p>abc@gmail.com</p>
                      <p>
                        <BsChevronRight />
                      </p>
                      <p>To all employees</p>
                    </Link>
                  </p>
                  <p>
                    {date.getDate() +
                      " " +
                      date.toLocaleString("default", { month: "long" }) +
                      " " +
                      date.getHours() +
                      ":" +
                      date.getMinutes()}
                  </p>
                  <p>Welcometo Bitrix24!</p>
                </div>
                <div className="ddr-r">
                  <div>
                    <p>
                      <BsThreeDots />
                    </p>
                    <p>
                      <BsFillPinAngleFill />
                    </p>
                  </div>
                </div>
              </div>
              <iframe
                width="585"
                height="298"
                src="https://www.youtube.com/embed/tAMiCw-5MJE"
                title="First steps in Bitrix24"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p className="desc">
                Hurray! You are about to get 1000% more productive with
                Bitrix24. Please watch this 1-minute video to learn what
                Bitrix24 is about, how to invite your colleagues and where to
                find help, if you need it.
              </p>
              <p className="tat">
                <b>Tags: </b>Advice,Tips
              </p>
              <hr />
              <div className="cmt">
                <p>Like</p>
                <p>Comment</p>
                <p>Unfollow</p>
                <p>More</p>
                <p>
                  <b><AiFillEye /></b>
                  <b>1</b>
                </p>
              </div>
              <div className="like">
                <p>
                  <AiFillLike />
                </p>
                You
              </div>
              <div className="addc">
                <img
                  src="https://www.kindpng.com/picc/m/21-214439_free-high-quality-person-icon-default-profile-picture.png"
                  alt="profile"
                />
                <input type="text" placeholder="Add comment" className="add-cmt" />
              </div>
            </div>
          </div>
        </Box>
      </div>
      <div className="dashcard-right">
        <Box borderRadius="lg" bg="white" color="gray" >
          <div className="right-card1">
            <div className="card1-left">
              <div className="card1-live">LIVE</div>
              <div className="card1-active">
                <img
                  src="https://b24-zu0uxk.bitrix24.in/bitrix/components/bitrix/intranet.ustat.online/templates/.default/images/intranet-ustat-online-circle.gif"
                  alt="gif"
                />
                <p className="card1-p">1</p>
              </div>
              <div className="card1-profile">
                <img
                  src="https://www.kindpng.com/picc/m/21-214439_free-high-quality-person-icon-default-profile-picture.png"
                  alt="profile"
                />
              </div>
            </div>
            <div className="card1-right">
              <AiFillQuestionCircle />
            </div>
          </div>
        </Box>
        <Box
          borderRadius="lg"
          bg="#2fc7f7"
          color="white"
          className="c-p"
        >
          <div className="cp-card">
            <div className="cp-left">
              <p>COMPANY PULSE</p>
            </div>
            <div className="cp-right">
              <p>0</p>
              <div className="vertical-line"></div>
              <p>0%</p>
            </div>
          </div>
        </Box>
        <Box borderRadius="lg" bg="white" className="card3" color="gray">
            <div className="card3-head">
                <p>MY TASKS</p>
                <p><AiOutlinePlusCircle/></p>
            </div>
            <div className="card3-item">
                <span>Ongoing</span>
                <span>0</span>
                <span>0</span>      
            </div>
            <hr />
            <div className="card3-item">
                <span>Assisting</span>
                <span>0</span>
                <span>0</span>      
            </div>
            <hr />
            <div className="card3-item">
                <span>Set by me</span>
                <span>0</span>
                <span>0</span>      
            </div>
            <hr/>
            <div className="card3-item">
                <span>Following</span>
                <span>0</span>
                <span>0</span>      
            </div>
        </Box>
      </div>
    </div>
  );
};

export default DashCards;
