import React, { useState } from "react";
import NavLogo from "../assets/img/svg/NavLogo.svg";
import { Container } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

const NavBar = () => {
  const [show, setShow] = useState(true);
  if (show) {
    document.body.style.overflow = "visible";
  } else {
    document.body.style.overflow = "hidden";
  }
  return (
    <div className="bg-black">
      <Container>
        <nav className="py-3 align-items-center justify-content-between  d-flex">
          <div className="d-flex">
            <a className="me-xxl-5 z_7" href="#">
              <img
                src={NavLogo}
                className="w_md_90"
                width={170}
                alt="NavLogo"
              />
            </a>
            <ul
              className={
                show
                  ? "ps-0 mb-0 d-flex align-items-center openNav"
                  : "ps-0 mb-0 d-flex align-items-center closeNav"
              }
            >
              <li className="my-2 my-xl-0 mx-2">
                <a href="#">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="transparent"
                      className="d-flex align-items-center border-0 text-white gap-1"
                      id="dropdown-basic"
                    >
                      <p className="p-0 text-white mb-0 border-0   fs_sm ff_GilroyRegular fw-normal">
                        WordPress Solution
                      </p>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </a>
              </li>
              <li className="my-2 my-xl-0 mx-2">
                <a href="#">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="transparent"
                      className="d-flex align-items-center border-0 text-white gap-1"
                      id="dropdown-basic"
                    >
                      <p className="p-0 text-white mb-0 border-0  fs_sm ff_GilroyRegular fw-normal">
                        Services
                      </p>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </a>
              </li>
              <li className="my-2 my-xl-0 mx-2">
                <a
                  className="text-white position-relative nav_links border-0  fs_sm ff_GilroyRegular fw-normal"
                  href="#"
                >
                  Portfolio
                </a>
              </li>
              <li className="my-2 my-xl-0 mx-2">
                <a href="#">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="transparent"
                      className="d-flex align-items-center border-0 text-white gap-1"
                      id="dropdown-basic"
                    >
                      <p className="p-0 text-white mb-0 border-0  fs_sm ff_GilroyRegular fw-normal">
                        About
                      </p>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </a>
              </li>
              <li className="my-2 my-xl-0 mx-2">
                <a
                  className="text-white position-relative nav_links border-0  fs_sm ff_GilroyRegular fw-normal"
                  href="#"
                >
                  Blog
                </a>
              </li>
              <li className="my-2 my-xl-0  mx-2 d-md-none">
                <a
                  href="#"
                  className="text-white position-relative nav_links fw-normal fs_xsm ff_inter"
                >
                  1 888 266-6917 (<i>eu?</i>)
                </a>
              </li>
              <li className="my-2 my-xl-0  mx-2 d-md-none d-flex">
                <a
                  href="#"
                  className="Navbtn text-white fw-semibold ff_GilroySemiBold fs_md  "
                >
                  Contact Us
                </a>
              </li>
              <li className="my-2 my-xl-0  mx-2 d-md-none">
                <a href="#">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="transparent"
                      className="d-flex align-items-center border-0 text-white gap-1"
                      id="dropdown-basic"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 0C18.6276 0 24 5.3724 24 12C24 18.6276 18.6276 24 12 24C5.3724 24 0 18.6276 0 12C0 5.3724 5.3724 0 12 0ZM12 1.674C9.26137 1.674 6.63492 2.76191 4.69842 4.69842C2.76191 6.63492 1.674 9.26137 1.674 12C1.674 14.7386 2.76191 17.3651 4.69842 19.3016C6.63492 21.2381 9.26137 22.326 12 22.326C14.7386 22.326 17.3651 21.2381 19.3016 19.3016C21.2381 17.3651 22.326 14.7386 22.326 12C22.326 9.26137 21.2381 6.63492 19.3016 4.69842C17.3651 2.76191 14.7386 1.674 12 1.674ZM14.4576 4.1856C15.2378 4.48059 15.9673 4.89515 16.62 5.4144C16.77 5.5296 16.914 5.652 17.0556 5.7828C17.082 5.8056 17.1048 5.8296 17.13 5.8548C17.5236 6.2184 17.8812 6.6276 18.198 7.0668C18.2424 7.128 18.2892 7.1844 18.33 7.2432C18.4068 7.356 18.4788 7.4736 18.5508 7.5912C18.6746 7.78955 18.7888 7.99379 18.8928 8.2032C18.9564 8.3232 19.0128 8.454 19.0716 8.5812C19.1112 8.6688 19.1556 8.7588 19.1916 8.8524C19.2792 9.0708 19.3572 9.2904 19.428 9.5148C19.4508 9.5892 19.4688 9.6684 19.4904 9.7428C19.6121 10.1698 19.6984 10.606 19.7484 11.0472C19.7568 11.1264 19.7688 11.2104 19.7748 11.2884C19.7988 11.5464 19.8144 11.8068 19.8144 12.0684C19.8129 12.5796 19.7659 13.0896 19.674 13.5924C19.6572 13.68 19.6428 13.7688 19.626 13.8528C19.578 14.0808 19.5228 14.304 19.458 14.5248C18.8472 14.2452 18.1296 13.8336 17.9424 13.3812C17.6016 12.5652 16.6944 12.1572 16.3248 11.106C15.7164 9.366 16.524 9.4116 16.6368 8.3316C16.6896 7.8252 16.3248 7.7196 15.8436 7.926C14.7204 8.3976 14.34 8.2164 14.1132 7.3704C13.8864 6.5268 14.1132 6.2916 14.1132 6.2916C13.3476 6.3756 13.3188 5.4432 13.716 5.208C13.992 5.0496 14.226 4.5636 14.4576 4.1856ZM11.2488 9.3564C11.9568 9.0324 12.6108 8.916 12.5244 8.3592C12.4404 7.8084 12.2412 7.398 11.1348 7.398C10.0284 7.398 10.5108 8.916 9.6036 8.01C8.6964 7.11 9.8016 7.3428 10.2552 7.1376C10.71 6.9312 11.1636 6.0852 10.3692 6.0252C9.576 5.9688 9.7452 6.3756 9.1212 6.1452C8.4972 5.91 8.214 6.96 7.8156 6.8136C7.554 6.7152 6.852 6.1752 6.3864 5.6436C5.43632 6.46996 4.68418 7.49934 4.1856 8.6556C4.3212 10.224 5.1504 11.0472 5.1504 11.0472C5.1504 11.0472 5.5764 12.0684 8.13 13.3236C8.13 13.3236 8.61 13.3524 8.0436 12.7704C7.4772 12.186 6.852 11.4564 7.5612 11.0784C8.2692 10.6956 8.4696 10.728 8.64 11.43C8.8092 12.1308 9.378 11.718 9.4332 11.0472C9.4908 10.3788 10.5396 9.6792 11.2488 9.3552V9.3564ZM10.7088 12.8844C11.9304 12.8844 11.8164 13.2648 12.7812 14.1144C13.7448 14.9592 13.2348 15.8052 12.7512 16.4484C12.27 17.0892 11.844 17.8164 11.6172 19.134C11.3892 20.4468 10.794 19.5108 10.5972 19.1904C10.398 18.8676 10.086 18.5772 10.1724 17.2344C10.2564 15.8928 9.348 16.6824 9.0372 14.9304C8.7252 13.1808 9.4908 12.8856 10.71 12.8856L10.7088 12.8844ZM16.6812 14.0412C17.0064 13.8336 17.7852 14.3748 17.6172 14.9448C17.4456 15.5148 16.908 15.1932 16.638 14.9448C16.368 14.6976 16.3536 14.2452 16.6812 14.0412Z"
                          fill="white"
                        />
                      </svg>
                      <p className="p-0 text-white mb-0 border-0  fs_sm ff_GilroyRegular fw-normal">
                        Eng
                      </p>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </a>
              </li>
            </ul>
          </div>
          <ul className="ps-0 mb-0 d-flex align-items-center">
            <li className="mx-2 d-none d-md-block z_5">
              <a
                href="#"
                className="text-white  position-relative nav_links fw-normal fs_xsm ff_inter"
              >
                1 888 266-6917 (<i>eu?</i>)
              </a>
            </li>
            <li className="mx-2 d-none d-md-block z_5">
              <a
                href="#"
                className="Navbtn text-white fw-semibold ff_GilroySemiBold fs_md "
              >
                Contact Us
              </a>
            </li>
            <li className="mx-2 d-none d-md-block z_5 Navline"></li>
            <li className="mx-2 d-none d-md-block z_5">
              <a href="#">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="transparent"
                    className="d-flex align-items-center border-0 text-white gap-1"
                    id="dropdown-basic"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0C18.6276 0 24 5.3724 24 12C24 18.6276 18.6276 24 12 24C5.3724 24 0 18.6276 0 12C0 5.3724 5.3724 0 12 0ZM12 1.674C9.26137 1.674 6.63492 2.76191 4.69842 4.69842C2.76191 6.63492 1.674 9.26137 1.674 12C1.674 14.7386 2.76191 17.3651 4.69842 19.3016C6.63492 21.2381 9.26137 22.326 12 22.326C14.7386 22.326 17.3651 21.2381 19.3016 19.3016C21.2381 17.3651 22.326 14.7386 22.326 12C22.326 9.26137 21.2381 6.63492 19.3016 4.69842C17.3651 2.76191 14.7386 1.674 12 1.674ZM14.4576 4.1856C15.2378 4.48059 15.9673 4.89515 16.62 5.4144C16.77 5.5296 16.914 5.652 17.0556 5.7828C17.082 5.8056 17.1048 5.8296 17.13 5.8548C17.5236 6.2184 17.8812 6.6276 18.198 7.0668C18.2424 7.128 18.2892 7.1844 18.33 7.2432C18.4068 7.356 18.4788 7.4736 18.5508 7.5912C18.6746 7.78955 18.7888 7.99379 18.8928 8.2032C18.9564 8.3232 19.0128 8.454 19.0716 8.5812C19.1112 8.6688 19.1556 8.7588 19.1916 8.8524C19.2792 9.0708 19.3572 9.2904 19.428 9.5148C19.4508 9.5892 19.4688 9.6684 19.4904 9.7428C19.6121 10.1698 19.6984 10.606 19.7484 11.0472C19.7568 11.1264 19.7688 11.2104 19.7748 11.2884C19.7988 11.5464 19.8144 11.8068 19.8144 12.0684C19.8129 12.5796 19.7659 13.0896 19.674 13.5924C19.6572 13.68 19.6428 13.7688 19.626 13.8528C19.578 14.0808 19.5228 14.304 19.458 14.5248C18.8472 14.2452 18.1296 13.8336 17.9424 13.3812C17.6016 12.5652 16.6944 12.1572 16.3248 11.106C15.7164 9.366 16.524 9.4116 16.6368 8.3316C16.6896 7.8252 16.3248 7.7196 15.8436 7.926C14.7204 8.3976 14.34 8.2164 14.1132 7.3704C13.8864 6.5268 14.1132 6.2916 14.1132 6.2916C13.3476 6.3756 13.3188 5.4432 13.716 5.208C13.992 5.0496 14.226 4.5636 14.4576 4.1856ZM11.2488 9.3564C11.9568 9.0324 12.6108 8.916 12.5244 8.3592C12.4404 7.8084 12.2412 7.398 11.1348 7.398C10.0284 7.398 10.5108 8.916 9.6036 8.01C8.6964 7.11 9.8016 7.3428 10.2552 7.1376C10.71 6.9312 11.1636 6.0852 10.3692 6.0252C9.576 5.9688 9.7452 6.3756 9.1212 6.1452C8.4972 5.91 8.214 6.96 7.8156 6.8136C7.554 6.7152 6.852 6.1752 6.3864 5.6436C5.43632 6.46996 4.68418 7.49934 4.1856 8.6556C4.3212 10.224 5.1504 11.0472 5.1504 11.0472C5.1504 11.0472 5.5764 12.0684 8.13 13.3236C8.13 13.3236 8.61 13.3524 8.0436 12.7704C7.4772 12.186 6.852 11.4564 7.5612 11.0784C8.2692 10.6956 8.4696 10.728 8.64 11.43C8.8092 12.1308 9.378 11.718 9.4332 11.0472C9.4908 10.3788 10.5396 9.6792 11.2488 9.3552V9.3564ZM10.7088 12.8844C11.9304 12.8844 11.8164 13.2648 12.7812 14.1144C13.7448 14.9592 13.2348 15.8052 12.7512 16.4484C12.27 17.0892 11.844 17.8164 11.6172 19.134C11.3892 20.4468 10.794 19.5108 10.5972 19.1904C10.398 18.8676 10.086 18.5772 10.1724 17.2344C10.2564 15.8928 9.348 16.6824 9.0372 14.9304C8.7252 13.1808 9.4908 12.8856 10.71 12.8856L10.7088 12.8844ZM16.6812 14.0412C17.0064 13.8336 17.7852 14.3748 17.6172 14.9448C17.4456 15.5148 16.908 15.1932 16.638 14.9448C16.368 14.6976 16.3536 14.2452 16.6812 14.0412Z"
                        fill="white"
                      />
                    </svg>
                    <p className="p-0 text-white mb-0 border-0  fs_sm ff_GilroyRegular fw-normal">
                      Eng
                    </p>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </a>
            </li>
          </ul>
          <div
            onClick={() => setShow(!show)}
            className="d-flex flex-column justify-content-between z_5 d-xl-none"
          >
            <span className="menuitems"></span>
            <span className="menuitems my-2"></span>
            <span className="menuitems"></span>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default NavBar;
