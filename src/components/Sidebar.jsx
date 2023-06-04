import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Sidebar = () => {
  return (
    <div
      style={{ width: "113px", height: "100vh", backgroundColor: "black" }}
      className="text-[#A5C0C4] ml-6 mr-[-5%] nav"
    >
      <div>
        <button style={{ width: "40px" }}>
          <Link to="/app">
            <svg
              width="29"
              height="33"
              viewBox="0 0 29 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 16.1097C2 13.6562 2 12.4295 2.49746 11.3512C2.99492 10.2729 3.92916 9.47454 5.79764 7.87785L7.61014 6.329C10.9874 3.443 12.676 2 14.6875 2C16.699 2 18.3876 3.443 21.7649 6.329L23.5774 7.87785C25.4458 9.47454 26.3801 10.2729 26.8775 11.3512C27.375 12.4295 27.375 13.6562 27.375 16.1097V23.772C27.375 27.1793 27.375 28.883 26.3133 29.9415C25.2515 31 23.5427 31 20.125 31H9.25C5.83232 31 4.12348 31 3.06174 29.9415C2 28.883 2 27.1793 2 23.772V16.1097Z"
                stroke="#A5C0C4"
                stroke-width="2.41667"
              />
              <path
                d="M18.9166 31V21.3333C18.9166 20.666 18.3757 20.125 17.7083 20.125H11.6666C10.9993 20.125 10.4583 20.666 10.4583 21.3333V31"
                stroke="#A5C0C4"
                stroke-width="2.41667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </button>
      </div>

      {/* <div className="navBottom">
        <button>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.56036 18.9317C5.56036 18.6421 5.68393 18.3643 5.90389 18.1594C6.12385 17.9546 6.42218 17.8395 6.73324 17.8395H9.07901C9.39007 17.8395 9.6884 17.9546 9.90836 18.1594C10.1283 18.3643 10.2519 18.6421 10.2519 18.9317V24.3928C10.2519 24.6824 10.1283 24.9603 9.90836 25.1651C9.6884 25.3699 9.39007 25.485 9.07901 25.485H6.73324C6.42218 25.485 6.12385 25.3699 5.90389 25.1651C5.68393 24.9603 5.56036 24.6824 5.56036 24.3928V18.9317ZM12.5976 14.5629C12.5976 14.2732 12.7212 13.9954 12.9412 13.7906C13.1611 13.5858 13.4595 13.4707 13.7705 13.4707H16.1163C16.4274 13.4707 16.7257 13.5858 16.9456 13.7906C17.1656 13.9954 17.2892 14.2732 17.2892 14.5629V24.3928C17.2892 24.6824 17.1656 24.9603 16.9456 25.1651C16.7257 25.3699 16.4274 25.485 16.1163 25.485H13.7705C13.4595 25.485 13.1611 25.3699 12.9412 25.1651C12.7212 24.9603 12.5976 24.6824 12.5976 24.3928V14.5629ZM19.6349 11.2863C19.6349 10.9966 19.7585 10.7188 19.9785 10.514C20.1984 10.3092 20.4967 10.1941 20.8078 10.1941H23.1536C23.4646 10.1941 23.763 10.3092 23.9829 10.514C24.2029 10.7188 24.3265 10.9966 24.3265 11.2863V24.3928C24.3265 24.6824 24.2029 24.9603 23.9829 25.1651C23.763 25.3699 23.4646 25.485 23.1536 25.485H20.8078C20.4967 25.485 20.1984 25.3699 19.9785 25.1651C19.7585 24.9603 19.6349 24.6824 19.6349 24.3928V11.2863Z"
              fill="#A5C0C4"
            />
            <path
              d="M22.2413 4.45996L15.5844 10.5622C15.306 10.8174 14.8787 10.8174 14.6003 10.5622L12.0099 8.1876C11.7315 7.93241 11.3042 7.93241 11.0258 8.1876L5.56037 13.1976"
              stroke="#A5C0C4"
              stroke-width="1.91136"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <rect
              x="0.95568"
              y="0.95568"
              width="27.9754"
              height="28.0333"
              rx="6.68976"
              stroke="#A5C0C4"
              stroke-width="1.91136"
            />
          </svg>
        </button> */}

      {/* <button>
          <svg
            width="39"
            height="34"
            viewBox="0 0 39 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="19.7038"
              cy="7.24855"
              r="5.30397"
              stroke="#BCDEE9"
              stroke-width="2.65199"
              stroke-linecap="round"
            />
            <path
              d="M27.3885 23.7533C26.9352 22.0615 25.9364 20.5667 24.5469 19.5005C23.1575 18.4343 21.455 17.8564 19.7036 17.8564C17.9523 17.8564 16.2498 18.4343 14.8604 19.5005C13.4709 20.5667 12.4721 22.0615 12.0188 23.7532"
              stroke="#BCDEE9"
              stroke-width="2.65199"
              stroke-linecap="round"
            />
            <circle
              cx="8.08109"
              cy="8.63236"
              r="4.19705"
              stroke="#BCDEE9"
              stroke-width="2.09853"
              stroke-linecap="round"
            />
            <circle
              cx="4.19705"
              cy="4.19705"
              r="4.19705"
              transform="matrix(-1 0 0 1 35.8 4.4353)"
              stroke="#BCDEE9"
              stroke-width="2.09853"
              stroke-linecap="round"
            />
            <path
              d="M13.8232 20.624C13.4645 19.2853 13.0131 19.171 11.9136 18.3273C10.8141 17.4837 9.46694 17.0264 8.08107 17.0264C6.69519 17.0264 5.34805 17.4837 4.24856 18.3273C3.14907 19.171 2.35869 20.3539 2 21.6925"
              stroke="#BCDEE9"
              stroke-width="2.09853"
              stroke-linecap="round"
            />
            <path
              d="M25.8609 20.624C26.2196 19.2853 26.671 19.171 27.7705 18.3273C28.87 17.4837 30.2171 17.0264 31.603 17.0264C32.9889 17.0264 34.336 17.4837 35.4355 18.3273C36.535 19.171 37.3254 20.3539 37.6841 21.6925"
              stroke="#BCDEE9"
              stroke-width="2.09853"
              stroke-linecap="round"
            />
          </svg>
        </button>

        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>

        <button>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.1016 5.20549H5.17188C4.33065 5.20549 3.52387 5.53967 2.92902 6.13451C2.33418 6.72936 2 7.53614 2 8.37737V25.8227C2 26.664 2.33418 27.4708 2.92902 28.0656C3.52387 28.6604 4.33065 28.9946 5.17188 28.9946H22.6173C23.4585 28.9946 24.2653 28.6604 24.8601 28.0656C25.455 27.4708 25.7891 26.664 25.7891 25.8227V17.893M23.5466 2.96297C23.8392 2.66002 24.1892 2.41838 24.5762 2.25214C24.9632 2.08591 25.3794 1.99841 25.8006 1.99475C26.2217 1.99109 26.6394 2.07134 27.0292 2.23083C27.419 2.39031 27.7732 2.62584 28.071 2.92365C28.3688 3.22147 28.6043 3.57562 28.7638 3.96543C28.9233 4.35524 29.0035 4.77292 28.9999 5.19408C28.9962 5.61524 28.9087 6.03145 28.7425 6.41843C28.5762 6.80542 28.3346 7.15542 28.0317 7.44801L14.4148 21.0649H9.92971V16.5799L23.5466 2.96297Z"
              stroke="#A5C0C4"
              stroke-width="3.17188"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
        </button> */}
      {/* </div> */}
    </div>
  );
};

export default Sidebar;
