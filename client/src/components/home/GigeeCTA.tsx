import React from "react";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

export default function GigeeCTA() {
  return (
    <div className="relative py-24 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute top-0 left-0 w-full h-full dark:opacity-30 opacity-10 overflow-hidden">
        <div
          className="absolute inset-0 bg-grid-gray-900/[0.1] bg-[center_calc(50%-0.5px)_calc(50%-0.5px)] dark:bg-grid-white/[0.05] -z-10"
          style={{
            maskImage: "radial-gradient(rgba(0, 0, 0, 1.0) 20%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(rgba(0, 0, 0, 1.0) 20%, transparent 80%)",
          }}
        ></div>
      </div>

      <div className="relative z-10 container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <span className="bg-white dark:bg-gray-800 px-3 py-1 text-xs rounded-full mb-2 inline-block dark:text-white text-black border border-slate-200 dark:border-slate-700">
              Beyond Service Excellence
            </span>
            <h2 className="text-3xl mt-2 font-bold tracking-tighter leading-tight md:text-4xl lg:text-5xl text-gray-900 dark:text-white">
              We Don't Just Deliver Services, We Transform Organizations
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 md:text-xl">
              Discover how GIGEEConsult's comprehensive approach delivers lasting impact across private and public sectors.
            </p>
            <div className="mt-6">
              <Button
                className="bg-primary text-white hover:bg-primary/90 block sm:inline-block mb-4 sm:mb-0 sm:mr-4"
                size="lg"
              >
                Start your transformation
              </Button>
            </div>
          </div>

          <div className="space-y-8 bg-slate-50 dark:bg-slate-900/50 p-8 rounded-lg border border-slate-200 dark:border-slate-800">
            <div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                Ready to elevate your organization?
              </h3>
              <div className="flex items-center text-blue-500 dark:text-blue-400">
                <a
                  href="#"
                  className="group inline-flex items-center hover:underline"
                >
                  Explore career opportunities
                  <span className="relative ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                Have a project in mind?
              </h3>
              <div className="flex items-center text-blue-500 dark:text-blue-400">
                <a
                  href="#contact"
                  className="group inline-flex items-center hover:underline"
                >
                  Schedule a consultation today
                  <span className="relative ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 