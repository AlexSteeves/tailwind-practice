import { CodeIcon } from "@heroicons/react/solid";
import React from "react";

import Carousel from './Carousel'

export default function Projects() {
  return (
    <section id="projects" className="text-gray-800 body-font bg-gray-900">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40 bg-gray-900">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-bg-800">
            Personal Projects
          </h1>
        </div>

        <div>
            <Carousel />
        </div>
       
      </div>
    </section>
  );
}
