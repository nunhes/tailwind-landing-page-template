export const metadata = {
  title: "Portfolio",
  description: "Page description",
};

import Link from "next/link";

export default function Portfolio() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
            <h1 className="h1">We made web easier.</h1>
          </div>

          {/* Form */}
          <div className="max-w-3xl mx-auto">
            <div className="gap-0 columns-3">
              <img
                className="w-full mb-0 aspect-video"
                src="https://picsum.photos/500/300?random=1"
              />
              <img
                className="w-full mb-0 aspect-square"
                src="https://picsum.photos/500/300?random=2"
              />
              <img
                className="w-full mb-0 aspect-square"
                src="https://picsum.photos/500/300?random=3"
              />
              <img
                className="w-full mb-0 aspect-square"
                src="https://picsum.photos/500/300?random=4"
              />
              <img
                className="w-full mb-0 aspect-video"
                src="https://picsum.photos/500/300?random=5"
              />
              <img
                className="w-full mb-0 aspect-video"
                src="https://picsum.photos/500/300?random=6"
              />
              <img
                className="w-full mb-0 aspect-square"
                src="https://picsum.photos/500/300?random=7"
              />
              <img
                className="w-full mb-0 aspect-video"
                src="https://picsum.photos/500/300?random=8"
              />
              <img
                className="w-full mb-0 aspect-square"
                src="https://picsum.photos/500/300?random=9"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
