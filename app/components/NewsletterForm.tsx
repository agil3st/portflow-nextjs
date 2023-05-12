import Image from "next/image";
import SectionTitle from "./SectionTitle";

export default function NewsletterForm() {
  return (
    <section className="mt-20 pb-10">
      <div className="my-10">
        <SectionTitle className="my-10" text="Waiting For Updates?" />
      </div>

      <Image
        src="https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
        alt="Newsletter Image"
        width={800}
        height={200}
        className="w-full h-28 object-cover lg:rounded-lg"
      />
      <div className="mt-4 lg:mt-8">
        <div className="text-center items-center">
          <h3 className="text-2xl lg:text-3xl font-bold lg:mt-2">
            Subscribe my newsletter!
          </h3>
          <p className="text-sm">
            I will send latest collection shot and post once a week, fresh from
            the oven.
          </p>
          <form className="mt-4 mb-3 space-x-2">
            <input
              type="email"
              className="rounded bg-gray-100 px-4 py-2 border focus:border-indigo-400"
              placeholder="gwen@mail.com"
            />
            <button
              type="button"
              className="px-4 py-2 rounded border border-indigo-600 bg-indigo-600 text-gray-100">
              Subscribe
              <i className="bx bx-right-arrow-alt"></i>
            </button>
          </form>
          <p className="opacity-50 text-sm">No spam. I promise</p>
        </div>
      </div>
    </section>
  );
}
