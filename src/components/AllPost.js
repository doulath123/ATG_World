import React, { useState } from "react";
import Forest from "./Image/forest.png"
import Post from "./Image/Post2.png"
import Car from "./Image/Car.png"
import Profile_1 from "./Image/Profile1.png"
import Profile_2 from "./Image/Profile2.png"
import Profile_3 from "./Image/Profile3.png"
import Profile_4 from "./Image/Profile4.png"
import Profile_5 from "./Image/Profile5.png"
import Profile_6 from "./Image/Profile6.png"
import Profile_7 from "./Image/Profile7.png"
import Profile_8 from "./Image/Profile8.png"
import {GoTriangleDown} from "react-icons/go"
import {MdLocationOn, MdModeEdit, MdOutlineErrorOutline,MdThumbUp} from 'react-icons/md'
import {FaUserGroup} from "react-icons/fa6"
import {PiPencilThin} from "react-icons/pi"
import {TbBriefcase2} from "react-icons/tb"
import {BsFillShareFill, BsEye, BsThreeDots, BsCalendar4Event} from "react-icons/bs"


import SignUp from "./SignUp";
import SignIn from "./SignIn";
const allPost = [
  {
    _id: 1,
    postImg: Forest,
    postType: "✍️ Article",
    postTitle: "What if famous brands had regular fonts? Meet RegulaBrands!",
    postMessage:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    postUserImg:Profile_4,
    postUserName: "Sarthak Kamra",
    postView: "1.4k views",
  },
  {
    _id: 2,
    postImg: Post,
    postType: "🔬️ Education",
    postTitle:
      "Tax Benefits for Investment under National Pension Scheme launched by Government",
    postMessage:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    postUserImg: Profile_1,
    postUserName: "Sarah West",
    postView: "1.4k views",
  },
  {
    _id: 3,
    postImg: Car,
    postType: "🗓️ Meetup",
    postTitle: "Finance & Investment Elite Social Mixer @Lujiazui",
    postDate: "Fri, 12 Oct, 2018",
    postLocation: "Ahmedabad, India",
    postUserImg: Profile_2,
    postUserName: "Ronal Jones",
    postView: "1.4k views",
    button: "Visit Website",
  },
  {
    _id: 4,
    postType: "💼️ Job",
    postTitle: "Software Developer",
    postCompany: "Innovaccer Analytics Private Ltd.",
    postLocation: "Noida, India",
    postUserImg: Profile_3,
    postUserName: "Joseph Gray",
    postView: "1.4k views",
    button: "Apply on Timesjobs",
  },
];
const fakeGroupData = [
  {
    _id: 1,
    groupImg: Profile_7,
    groupName: "Leisure",
  },
  {
    _id: 2,
    groupImg: Profile_8,
    groupName: "Activism",
  },
  {
    _id: 3,
    groupImg: Profile_6,
    groupName: "MBA",
  },
  {
    _id: 4,
    groupImg: Profile_5,
    groupName: "Philosophy",
  },
];
const AllPost = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="container px-lg-4">
      <div className="row p-md-0">
        <div className="">
          <div className="d-flex align-items-center justify-content-between p-3">
            <div>
              <a className="nav-link fw-bold fs-6" href="">
                Posts(368)
              </a>
            </div>
            <div>
              <button className="filter-btn btn border-0">
                Filter:All <GoTriangleDown className="fs-4"/>
              </button>
            </div>
          </div>
        </div>
        <div className="d-none d-lg-block">
          <div className="d-flex align-items-center justify-content-between pt-4 ">
            <ul className="nav">
              <li className="nav-item border-bottom border-4 border-dark pb-2">
                <a className="nav-link text-dark fs-5 " href="#">
                  All Posts(32)
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary fs-5" href="#">
                  Article
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary fs-5" href="#">
                  Event
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary fs-5" href="#">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary fs-5" href="#">
                  Job
                </a>
              </li>
            </ul>
            <div className="pb-2">
              <button className=" me-3 btn-post">
                Write a Post <GoTriangleDown className="fs-4"/>
              </button>
              <button className=" btn-join ">
                +<FaUserGroup className="fs-5"/> Join Group
              </button>
            </div>
          </div>
          <div style={{ transform: "translateY(-18px)" }}>
            <hr style={{ height: "2px" }} />
          </div>
        </div>
        <div className="col-md-8">
          {allPost.map((post) => (
            <div className="card mt-3" key={post._id}>
              {post.postImg && (
                <img src={post.postImg} className="card-img-top" alt="..." />
              )}
              <div className="card-body">
                <h5 className="card-title fs-4 my-3">{post.postType}</h5>
                <div className="d-flex justify-content-between">
                  <h3 className="post-title fw-bold">{post.postTitle}</h3>
                  <div className="px-2 position-relative">
                    <button
                      onClick={() => setShow(!show)}
                      className="btn border-0 "
                    >
                      <BsThreeDots className="fs-3"/>
                    </button>
                    {show && (
                      <ul className="menu-dropdown position-absolute shadow ">
                        <li>
                          <a href="">Edit</a>
                        </li>
                        <li>
                          <a href="">Report</a>
                        </li>
                        <li>
                          <a href="">Option 3</a>
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
                <div className="d-flex align-items-center my-2">
                  {post.postDate && (
                    <h6 className="me-5">
                      <BsCalendar4Event/>{" "}
                      {post.postDate}
                    </h6>
                  )}
                  {post.postCompany && (
                    <>
                      <h6 className="me-5 d-lg-none">
                        <TbBriefcase2 className="me-1"/>
                        {post.postCompany.slice(0, 20) + "..."}
                      </h6>
                      <h6 className="me-5 d-none d-lg-block">
                        <TbBriefcase2 className="me-1"/>
                        {post.postCompany}
                      </h6>
                    </>
                  )}
                  {post.postLocation && (
                    <h6>
                      <MdLocationOn/>{" "}
                      {post.postLocation}
                    </h6>
                  )}
                </div>
                {post.button && (
                  <div>
                    <button
                      className={`btn w-100 border border-secondary fw-bold py-2 ${
                        post.button === "Visit Website"
                          ? "text-danger"
                          : "text-other"
                      }`}
                    >
                      {" "}
                      {post.button}
                    </button>
                  </div>
                )}
                {post.postMessage && (
                  <h5 className=" card-text post-message text-secondary my-1">
                    {post.postMessage}
                  </h5>
                )}

                {/* POST NOW BUTTON */}
                <div className="d-lg-none">
                <a href="" id="post-now">
                  <PiPencilThin className="fs-2"/>
                </a>
                </div>
                {/* SIGN UP MODAL */}
                <div
                  className="modal fade"
                  id="signUpModal"
                  tabIndex="-1"
                  aria-labelledby="signUpModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered modal-lg">
                    <SignUp />
                  </div>
                </div>
                {/* SIGN IN MODAL */}
                <div
                  className="modal fade"
                  id="signInModal"
                  tabIndex="-1"
                  aria-labelledby="signInModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered modal-lg">
                    <SignIn />
                  </div>
                </div>

                <div className="pt-4 pb-1 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={post.postUserImg} className="img-fluid" alt="" />
                    <div className="ms-2">
                      <h5 className=" fw-bold">{post.postUserName}</h5>
                      <p className="p-0 m-0 d-lg-none">{post.postView}</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center ">
                    <div className="d-none d-lg-block">
                      <BsEye className="me-2"/> {post.postView}
                    </div>
                    <button className="share-btn ms-5 me-2">
                      <BsFillShareFill/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4 ps-5 d-none d-lg-block">
          <div className="d-flex align-items-center justify-content-between mt-5">
            <div>
              <h5>
                <MdLocationOn className="fs-3"/> Noida, India
              </h5>
            </div>
            <div>
              <MdModeEdit className="fs-3"/>
            </div>
          </div>
          <div>
            <hr />
          </div>
          <div className="d-flex mt-5">
            <div className="me-2">
              <MdOutlineErrorOutline className="text-secondary"/>
            </div>
            <div>
              <p className="m-0 text-secondary">
                Your location will help us serve better and extend a
                personalised experience.
              </p>
            </div>
          </div>
          <div>
            <h5 className="mt-5">
              <MdThumbUp className="fs-2 pb-2"/> RECOMMENDED GROUPS
            </h5>
            <div className="mt-3">
              {fakeGroupData.map((group) => (
                <div
                  key={group._id}
                  className="d-flex align-items-center justify-content-between mt-4"
                >
                  <div className="d-flex align-items-center">
                    <img src={group.groupImg} className="img-fluid" alt="" />
                    <h5 className="ms-3">{group.groupName}</h5>
                  </div>
                  <div>
                    <button className=" follow-btn">Follow</button>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-end mt-5">
              <a className="text-decoration-none" href="">
                See More...
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPost;
