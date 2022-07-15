import { ReactElement } from "react";
import { UniversalLayout } from "./UniversalLayout";

export const PostLayout = ({ children }: { children: ReactElement }) => {
  return (
    <UniversalLayout>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-8 lg:py-12">
        <main className="relative w-full px-6 py-12 shadow-xl md:mx-auto md:max-w-3xl lg:max-w-4xl lg:pt-16 lg:pb-28">
          <div className="prose prose-zinc mx-auto mt-8 lg:prose-lg">
            {children}
          </div>
        </main>
      </div>
    </UniversalLayout>
  );
};
