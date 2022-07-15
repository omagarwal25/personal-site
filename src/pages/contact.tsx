import { UniversalLayout } from "~src/layouts/UniversalLayout";
import { NextPageWithLayout } from "./_app";

const ContactPage: NextPageWithLayout = () => {
  return (
    <div className="p-2">
      <h1 className="text-center text-4xl font-bold">Contact</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        quidem, quisquam.
      </p>
    </div>
  );
};

ContactPage.getLayout = (page) => <UniversalLayout>{page}</UniversalLayout>;

export default ContactPage;
