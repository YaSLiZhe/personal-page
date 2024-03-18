import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import React, { useEffect } from "react";
import image1 from "/assets/images/1.jpg";
import image2 from "/assets/images/2.jpg";
import image3 from "/assets/images/3.jpg";
import image4 from "/assets/images/4.jpg";

function Homepage() {
  useEffect(() => {
    document.title = "Homepage";
  }, []);

  return (
    <div>
      <PageNav />
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        {/* Display images */}
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-center mt-8">
            <div className="w-40 h-40 bg-gray-300 rounded-full mr-4">
              <img
                src={image1}
                alt="Photo 1"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="w-40 h-40 bg-gray-300 rounded-full mr-4">
              <img
                src={image2}
                alt="Photo 2"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="w-40 h-40 bg-gray-300 rounded-full mr-4">
              <img
                src={image3}
                alt="Photo 3"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="w-40 h-40 bg-gray-300 rounded-full">
              <img
                src={image4}
                alt="Photo 4"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="max-w-5xl px-4 py-8 bg-white shadow-lg rounded-lg mt-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Hello, I'm Mi Luo!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Welcome to my corner of the internet. 👋 I'm currently pursuing my
            Master of Science in Computer Science at the University of Delaware.
            I'm passionate about software development and enjoy building
            innovative solutions to solve real-world problems.
          </p>
          <div className="border-b border-gray-300 mb-8"></div>
          <div className="text-lg text-gray-800 mb-8">
            <h2 className="text-xl font-semibold mb-4">What I Do</h2>
            <p>
              As a Computer Science student, I specialize in Website development
              using Javascript. I enjoy developing software solutions that
              address User's needs and enhance user experiences.
            </p>
          </div>
          <div className="text-lg text-gray-800">
            <h2 className="text-xl font-semibold mb-4">Let's Connect</h2>
            <p>
              I'm always eager to collaborate and learn from others in the field
              of software development. If you'd like to connect or discuss
              potential opportunities, feel free to reach out to me via{" "}
              <a href="/personal-page/about" className="underline">
                About page
              </a>
              . Let's build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
