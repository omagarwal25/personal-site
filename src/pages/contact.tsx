import { Icon } from "@iconify/react";
import { UniversalLayout } from "~src/layouts/UniversalLayout";
import { NextPageWithLayout } from "./_app";
// todo more general about me page
const ContactPage: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col p-2">
      <div className="flex flex-col items-center">
        <h1 className="mt-5 text-center text-2xl font-bold">
          Amazing and smart people
        </h1>
        <div className="flex items-center gap-2">
          <div className="card bg-base-200 shadow-md">
            <div className="card-body">
              <h5 className="card-title">Theo</h5>
              <p className="card-text">
                <a href="https://twitter.com/t3dotgg" className="link">
                  <Icon icon="logos:twitter" /> twitter
                </a>
              </p>
            </div>
          </div>
          <div className="card bg-base-200 shadow-md">
            <div className="card-body">
              <h5 className="card-title">Alex / KATT</h5>
              <p className="card-text">
                <a
                  href="https://twitter.com/alexdotjs"
                  className="link flex items-center gap-2"
                >
                  <Icon icon="logos:twitter" /> twitter
                </a>
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-center text-4xl font-bold">Contact</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quidem, quisquam.
          </p>
        </div>
      </div>
    </div>
  );
};

ContactPage.getLayout = (page) => <UniversalLayout>{page}</UniversalLayout>;

export default ContactPage;
