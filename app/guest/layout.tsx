'use client'

import React from 'react'
import LoginPage from './login/page'
import RegisterPage from './register/page'
import './layout.css'
import { usePathname } from "next/navigation";


export const guestLayout = () => {
    const pathname = usePathname();
  console.log("pathname :: ", pathname);
  return (
    <div className="container ">
      <section className="gradient-form bg-neutral-200  h-screen w-screen ">
        <div className="container p-10 w-full h-full justify-center">
          <div className=" flex flex-wrap items-center justify-center ">
            <div className="w-full">
              <div className="block rounded-lg bg-white shadow-lg light:bg-neutral-800">
                <div className=" flex flex-wrap">
                  {pathname == "/guest/login" && <LoginPage />}
                  {pathname == "/guest/register" && <RegisterPage />}
                  <div
                    className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                    style={{
                      background:
                        "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                    }}
                  >
                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                      <h4 className="mb-6 text-xl font-semibold">
                        We are more than just a company
                      </h4>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default guestLayout;