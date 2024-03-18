import PageNav from "../components/PageNav";
import React from "react";

function About() {
  return (
    <div>
      <PageNav />
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Contact Me</h1>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                <i className="fa fa-github"></i> Github
              </h2>
              <a
                href="https://github.com/luomi16"
                className="text-blue-500 hover:underline"
              >{`https://github.com/luomi16`}</a>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                <i className="fa fa-linkedin"></i> Linkedin
              </h2>
              <a
                href="https://www.linkedin.com/in/mi-luo/"
                className="text-blue-500 hover:underline"
              >{`https://www.linkedin.com/in/mi-luo/`}</a>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                <i className="fa fa-envelope"></i> Email
              </h2>
              <p className="text-gray-600">luomi2001@gmail.com</p>
              <p className="text-gray-600">miluo@udel.edu</p>
            </div>
            <div className="">
              <h2 className="text-xl font-semibold text-gray-800">
                <i className="fa fa-phone"></i> Phone Number
              </h2>
              <p className="text-gray-600">+1 302-561-8100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
