import React from 'react';
import Navbar from '../Componets/Navbar';
import { NavLink } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div>
        
        <div className="mx-auto max-w-7xl px-4 bg-green-50">
          <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
            <div className="mx-auto max-w-max rounded-full border bg-green-50 p-1 px-3">
              <p className="text-center text-xs font-semibold leading-normal md:text-sm">
                Share your thoughts
              </p>
            </div>
            <p className="text-center text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
              Contact to hear from you
            </p>
            <p className="mx-auto max-w-4xl text-center text-base text-gray-600 md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              veritatis voluptates neque itaque repudiandae sint, explicabo
              assumenda quam ratione placeat?
            </p>
          </div>
          <div className="mx-auto max-w-7xl py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex items-center justify-center">
              <div className="px-2 md:px-12">
                <p className="text-2xl font-bold text-gray-900 md:text-4xl">
                  Get in touch
                </p>
                <p className="mt-4 text-lg text-gray-600">
                  Our friendly team would love to hear from you.
                </p>
                <form action="" className="mt-8 space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="text-sm font-medium leading-none text-gray-700"
                        htmlFor="first_name"
                      >
                        First Name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="first_name"
                        placeholder="First Name"
                      />
                    </div>
                    <div>
                      <label
                        className="text-sm font-medium leading-none text-gray-700"
                        htmlFor="last_name"
                      >
                        Last Name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="last_name"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="text-sm font-medium leading-none text-gray-700"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="text"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <label
                      className="text-sm font-medium leading-none text-gray-700"
                      htmlFor="phone_number"
                    >
                      Phone number
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="tel"
                      id="phone_number"
                      placeholder="Phone number"
                    />
                  </div>
                  <div>
                    <label
                      className="text-sm font-medium leading-none text-gray-700"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="flex h-20 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      id="message"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <button className="bg-green-300 hover:bg-green-500 text-white font-semibold py-2 px-36 rounded-md">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&h=800&q=80"
                alt="Contact Us"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
          </div>
        </div>
      </div>
      <hr className="mt-6" />
      {/* footer */}
      <section className="relative overflow-hidden bg-white py-8">
        <div className="container relative z-10 mx-auto px-4">
          <div className="-m-8 flex flex-wrap items-center justify-between">
            <div className="w-auto p-8">
              <a href="#">
                <div className="inline-flex items-center">
                  <svg
                    width="40"
                    height="46"
                    viewBox="0 0 50 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M500.344 126.925c-.047.047-.047.086-.109.141l-30.938 24.993c-18.578 14.961-42.124 23.946-67.796 23.946-19.453 0-37.594-5.289-53.375-14.282l-43.343-26.243.031-.039c-5.219-2.672-8.812-8.016-8.812-14.258 0-8.868 7.188-16.055 16.078-16.055 2.703 0 5.203.734 7.438 1.914l.062-.109 46.421 27.868c10.844 5.969 23.25 9.454 36.5 9.454 16.672 0 32.016-5.492 44.53-14.602l24.844-19.329c1.594-1.453 2.625-3.516 2.625-5.828 0-2.672-1.375-4.969-3.375-6.422l-93.03-62.018C373.563 33.508 368.392 32 362.829 32c-7.672 0-14.641 2.781-20.094 7.359l-54.733 48.635-31.988 17.938-92.101 55.775c-15.75 9.024-33.96 14.297-53.406 14.297-25.578 0-49.078-8.938-67.578-23.805L11.75 127.026c-.055-.031-.031-.07-.086-.102C4.578 121.417 0 112.799 0 103.111c0-9.914 4.898-18.657 12.328-24.141l100.835-67.705c.164-.109.32-.18.484-.289C123.874 4.03 136.217-.001 149.506-.001c16.093 0 30.75 5.953 42 15.727l22.391 19.5-.023.023c3.43 3.008 5.633 7.391 5.633 12.305 0 9.079-7.352 16.43-16.43 16.43-4.758 0-9.008-2.039-12-5.258l-21.797-19.39C163.827 34.766 156.843 32 149.187 32c-5.562 0-10.742 1.508-15.266 4.055L40.882 98.072c-2.008 1.453-3.367 3.75-3.367 6.422 0 2.312 1.023 4.375 2.617 5.812l24.992 19.43c12.484 9.04 27.766 14.516 44.382 14.516 13.312 0 25.758-3.516 36.609-9.508l77.28-46.376 32.617-16.438 64.535-56.236c11.218-9.782 25.89-15.696 41.952-15.696 13.297 0 25.641 4.031 35.859 10.977.188.125.344.195.516.305l100.749 67.65C507.094 84.423 512 93.158 512 103.111c0 9.688-4.562 18.306-11.656 23.814zM11.664 241.069c.031-.031.055-.047.086-.086l31.414-25.384c18.445-14.766 41.875-23.594 67.343-23.594 19.391 0 37.547 5.242 53.265 14.211l44.125 26.712v.016c4.844 2.766 8.109 7.898 8.109 13.867 0 8.868-7.188 16.055-16.07 16.055-2.852 0-5.469-.805-7.805-2.117l-.055.094-45.812-27.5c-10.891-6.063-23.398-9.602-36.758-9.602-16.671 0-32.007 5.492-44.507 14.586l-24.867 19.344c-1.594 1.469-2.617 3.516-2.617 5.828 0 2.688 1.359 4.984 3.367 6.422l92.89 61.924c4.562 2.602 9.797 4.165 15.414 4.165 7.695 0 14.742-2.821 20.179-7.431L224.006 280l31.957-17.888.051-.051 9.332-5.648 1.156-.664-.031-.016 81.812-49.556c15.719-8.954 33.844-14.172 53.219-14.172 25.562 0 49.015 8.922 67.53 23.735l31.203 25.204c.062.039.062.094.109.125 7.094 5.508 11.656 14.125 11.656 23.813 0 9.915-4.875 18.649-12.281 24.142l-100.843 67.689c-.172.109-.328.18-.516.305-10.219 6.945-22.562 10.977-35.859 10.977-16.062 0-30.75-5.922-41.999-15.711l-20.891-18.228c-4.359-2.961-7.234-7.953-7.234-13.617 0-9.078 7.359-16.438 16.438-16.438 4.625 0 8.797 1.907 11.781 4.993l22.015 19.555c5.453 4.641 12.5 7.462 20.219 7.462 5.609 0 10.844-1.563 15.406-4.165l92.89-61.924c2-1.438 3.375-3.734 3.375-6.422 0-2.336-1.031-4.359-2.625-5.828l-24.828-19.305c-12.515-9.118-27.858-14.625-44.546-14.625-13.328 0-25.781 3.539-36.688 9.563L288.002 280l-31.988 16.055-64.507 56.205c-11.25 9.797-25.922 15.734-42 15.734-13.289 0-25.633-4.031-35.859-10.977-.164-.109-.32-.18-.484-.289l-100.905-67.76C4.883 283.461 0 274.766 0 264.882c0-9.688 4.578-18.305 11.664-23.813zm100.351 142.926c8.828 0 15.984 7.18 15.984 16.009v3.75c0 2.672 1.414 4.93 3.43 6.383l101.226 63.291c.234.125.469.164.703.305a43.78 43.78 0 0 0 22.656 6.281 43.84 43.84 0 0 0 23.238-6.641c.219-.141.422-.18.656-.305l60.499-37.813c2.922-2.031 6.453-3.251 10.297-3.251 9.969 0 18.062 8.095 18.062 18.063 0 6.586-3.531 12.289-8.812 15.454l.047.086-54.28 32.563c-.156.086-.297.156-.469.25-14.406 8.625-31.25 13.578-49.238 13.578-18.172 0-35.14-5.039-49.617-13.797-.219-.125-.398-.211-.609-.336l-93.828-56.299c-9.578-6.461-15.945-17.368-15.945-29.813v-11.75c0-8.828 7.156-16.008 16-16.008zm288.002 0c8.828 0 15.984 7.18 15.984 16.009 0 8.844-7.156 16-15.984 16-8.844 0-16-7.156-16-16 0-8.829 7.156-16.009 16-16.009z"
                      fill="black"
                    />
                  </svg>
                  
                  <span className="ml-4 text-lg font-bold">Logo
                  </span>
                </div>
              </a>
            </div>
            <div className="w-auto p-8">
              <ul className="-m-5 flex flex-wrap items-center">
                <li className="p-5">
                  <a className="font-medium text-gray-600 hover:text-gray-700" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li className="p-5">
                  <a className="font-medium text-gray-600 hover:text-gray-700" href="#">
                    Terms of Service
                  </a>
                </li>
                <li className="p-5">
                  <a className="font-medium text-gray-600 hover:text-gray-700" href="#">
                    Return Policy
                  </a>
                </li>
                <li className="p-5">
                  <a className="font-medium text-gray-600 hover:text-gray-700" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-auto p-8">
              <div className="-m-1.5 flex flex-wrap">
                <div className="w-auto p-1.5">
                  <a href="https://www.facebook.com/" target='_self'>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                      <svg
                        width="8"
                        height="14"
                        viewBox="0 0 8 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.55736 5.2L5.55736 3.88C5.55736 3.308 5.69631 3 6.66894 3H7.87315V0.800003L6.02052 0.800003C3.70473 0.800003 2.77841 2.252 2.77841 3.88V5.2H0.925781L0.925781 7.4H2.77841L2.77841 14H5.55736L5.55736 7.4H7.59526L7.87315 5.2H5.55736Z"
                          fill="#27272A"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="w-auto p-1.5">
                  <a href="https://x.com/i/flow/login" target='_self'>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                      <svg
                        width="14"
                        height="11"
                        viewBox="0 0 14 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.6655 1.39641C13.1901 1.60149 12.6728 1.74907 12.1399 1.80656C12.6931 1.47788 13.1074 0.958619 13.3051 0.346204C12.7859 0.655036 12.2172 0.871595 11.6241 0.986274C11.3762 0.721276 11.0764 0.510168 10.7434 0.366102C10.4104 0.222036 10.0512 0.1481 9.68836 0.148902C8.22024 0.148902 7.03953 1.33893 7.03953 2.79928C7.03953 3.00436 7.06439 3.20943 7.10478 3.40673C4.90649 3.29177 2.94589 2.24155 1.64246 0.633614C1.40495 1.03927 1.2805 1.50117 1.28203 1.97123C1.28203 2.89094 1.74965 3.70191 2.46274 4.17885C2.0425 4.1623 1.63211 4.0468 1.26494 3.84173V3.87435C1.26494 5.16226 2.17533 6.22956 3.38866 6.47502C3.16084 6.5342 2.92649 6.56447 2.69111 6.56513C2.51866 6.56513 2.35554 6.54804 2.19086 6.52474C2.52643 7.57495 3.50362 8.33775 4.66724 8.3626C3.75685 9.07569 2.61654 9.49515 1.37835 9.49515C1.15619 9.49515 0.951119 9.48738 0.738281 9.46253C1.91278 10.216 3.30632 10.651 4.80706 10.651C9.67904 10.651 12.345 6.61484 12.345 3.11155C12.345 2.99659 12.345 2.88162 12.3372 2.76666C12.853 2.38914 13.3051 1.92152 13.6655 1.39641Z"
                          fill="#27272A"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="w-auto p-1.5">
                  <a href="https://www.instagram.com/accounts/login/?hl=en" target='_blank'>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.00094 0.360001C6.09046 0.360001 5.85022 0.368801 5.09958 0.402241C4.34894 0.437441 3.83766 0.555361 3.38974 0.729601C2.9199 0.906321 2.49433 1.18353 2.14278 1.54184C1.78468 1.89357 1.50751 2.31909 1.33054 2.7888C1.1563 3.23584 1.0375 3.748 1.00318 4.496C0.969738 5.2484 0.960937 5.48776 0.960937 7.40088C0.960937 9.31224 0.969738 9.5516 1.00318 10.3022C1.03838 11.052 1.1563 11.5633 1.33054 12.0112C1.51094 12.4741 1.75118 12.8666 2.14278 13.2582C2.5335 13.6498 2.92598 13.8909 3.38886 14.0704C3.83766 14.2446 4.34806 14.3634 5.09782 14.3978C5.84934 14.4312 6.0887 14.44 8.00094 14.44C9.91318 14.44 10.1517 14.4312 10.9032 14.3978C11.6521 14.3626 12.1651 14.2446 12.613 14.0704C13.0826 13.8936 13.5078 13.6164 13.8591 13.2582C14.2507 12.8666 14.4909 12.4741 14.6713 12.0112C14.8447 11.5633 14.9635 11.052 14.9987 10.3022C15.0321 9.5516 15.0409 9.31224 15.0409 7.4C15.0409 5.48776 15.0321 5.2484 14.9987 4.49688C14.9635 3.748 14.8447 3.23584 14.6713 2.7888C14.4944 2.31908 14.2172 1.89356 13.8591 1.54184C13.5077 1.1834 13.0821 0.906169 12.6121 0.729601C12.1633 0.555361 11.6512 0.436561 10.9023 0.402241C10.1508 0.368801 9.9123 0.360001 7.99918 0.360001H8.00182H8.00094ZM7.36998 1.62896H8.00182C9.8815 1.62896 10.1041 1.63512 10.846 1.66944C11.5324 1.70024 11.9055 1.81552 12.1537 1.91144C12.4819 2.03904 12.7169 2.19216 12.9633 2.43856C13.2097 2.68496 13.3619 2.91904 13.4895 3.24816C13.5863 3.49544 13.7007 3.86856 13.7315 4.55496C13.7658 5.2968 13.7729 5.51944 13.7729 7.39824C13.7729 9.27704 13.7658 9.50056 13.7315 10.2424C13.7007 10.9288 13.5854 11.301 13.4895 11.5492C13.3766 11.8549 13.1965 12.1313 12.9624 12.3579C12.716 12.6043 12.4819 12.7566 12.1528 12.8842C11.9064 12.981 11.5333 13.0954 10.846 13.127C10.1041 13.1605 9.8815 13.1684 8.00182 13.1684C6.12214 13.1684 5.89862 13.1605 5.15678 13.127C4.47038 13.0954 4.09814 12.981 3.84998 12.8842C3.54418 12.7715 3.26753 12.5916 3.04038 12.3579C2.80608 12.1309 2.62565 11.8543 2.51238 11.5483C2.41646 11.301 2.30118 10.9279 2.27038 10.2415C2.23694 9.49968 2.2299 9.27704 2.2299 7.39648C2.2299 5.5168 2.23694 5.29504 2.27038 4.5532C2.30206 3.8668 2.41646 3.49368 2.51326 3.24552C2.64086 2.91728 2.79398 2.68232 3.04038 2.43592C3.28678 2.18952 3.52086 2.03728 3.84998 1.90968C4.09814 1.81288 4.47038 1.69848 5.15678 1.6668C5.80622 1.63688 6.0579 1.62808 7.36998 1.6272V1.62896ZM11.7594 2.7976C11.6485 2.7976 11.5386 2.81945 11.4361 2.86191C11.3336 2.90436 11.2405 2.96659 11.1621 3.04504C11.0836 3.12348 11.0214 3.21661 10.9789 3.31911C10.9365 3.42161 10.9146 3.53146 10.9146 3.6424C10.9146 3.75334 10.9365 3.8632 10.9789 3.96569C11.0214 4.06819 11.0836 4.16132 11.1621 4.23976C11.2405 4.31821 11.3336 4.38044 11.4361 4.42289C11.5386 4.46535 11.6485 4.4872 11.7594 4.4872C11.9835 4.4872 12.1984 4.3982 12.3568 4.23976C12.5152 4.08133 12.6042 3.86646 12.6042 3.6424C12.6042 3.41835 12.5152 3.20347 12.3568 3.04504C12.1984 2.88661 11.9835 2.7976 11.7594 2.7976ZM8.00182 3.78496C7.52228 3.77748 7.04604 3.86547 6.60084 4.0438C6.15563 4.22214 5.75035 4.48726 5.40859 4.82373C5.06683 5.1602 4.79542 5.5613 4.61016 6.00367C4.4249 6.44604 4.32949 6.92084 4.32949 7.40044C4.32949 7.88004 4.4249 8.35484 4.61016 8.79721C4.79542 9.23958 5.06683 9.64068 5.40859 9.97715C5.75035 10.3136 6.15563 10.5787 6.60084 10.7571C7.04604 10.9354 7.52228 11.0234 8.00182 11.0159C8.95093 11.0011 9.85616 10.6137 10.5221 9.93726C11.1881 9.26084 11.5613 8.34967 11.5613 7.40044C11.5613 6.45121 11.1881 5.54004 10.5221 4.86362C9.85616 4.1872 8.95093 3.79977 8.00182 3.78496ZM8.00182 5.05304C8.62427 5.05304 9.22123 5.30031 9.66137 5.74045C10.1015 6.18059 10.3488 6.77755 10.3488 7.4C10.3488 8.02245 10.1015 8.61941 9.66137 9.05955C9.22123 9.49969 8.62427 9.74696 8.00182 9.74696C7.37937 9.74696 6.78241 9.49969 6.34227 9.05955C5.90213 8.61941 5.65486 8.02245 5.65486 7.4C5.65486 6.77755 5.90213 6.18059 6.34227 5.74045C6.78241 5.30031 7.37937 5.05304 8.00182 5.05304Z"
                          fill="#27272A"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  );
};

export default Contact;
