export const metadata = {
  title: 'Contact',
  description: 'Page description',
}

import Link from 'next/link'

export default function Contact() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
            <h1 className="h1">Hire me.</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
            <div className="flex flex-wrap mb-4 -mx-3">
                <div className="w-full px-3">
                  <label className="block mb-1 text-sm font-medium text-gray-800" htmlFor="email">Name</label>
                  <input id="name" type="text" className="w-full text-gray-800 form-input" placeholder="Enter your name" required />
                </div>
              </div>
              <div className="flex flex-wrap mb-4 -mx-3">
                <div className="w-full px-3">
                  <label className="block mb-1 text-sm font-medium text-gray-800" htmlFor="email">Company</label>
                  <input id="company" type="text" className="w-full text-gray-800 form-input" placeholder="Enter your company name" />
                </div>
              </div>
              <div className="flex flex-wrap mb-4 -mx-3">
                <div className="w-full px-3">
                  <label className="block mb-1 text-sm font-medium text-gray-800" htmlFor="email">Phone</label>
                  <input id="phone" type="phone" className="w-full text-gray-800 form-input" placeholder="Enter your contact phone" required />
                </div>
              </div>
              <div className="flex flex-wrap mb-4 -mx-3">
                <div className="w-full px-3">
                  <label className="block mb-1 text-sm font-medium text-gray-800" htmlFor="email">Email</label>
                  <input id="email" type="email" className="w-full text-gray-800 form-input" placeholder="Enter your email address" required />
                </div>
              </div>               
              <div className="flex flex-wrap mt-6 -mx-3">
                <div className="w-full px-3">
                  <button className="w-full text-white bg-blue-600 btn hover:bg-blue-700">Send</button>
                </div>
              </div>
            </form>
            <div className="flex items-center my-6">
              <div className="mr-3 border-t border-gray-300 grow" aria-hidden="true"></div>
              <div className="italic text-gray-600">and</div>
              <div className="ml-3 border-t border-gray-300 grow" aria-hidden="true"></div>
            </div>
            <div className="mt-6 text-center text-gray-600">
              Don't forget come back later!
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
