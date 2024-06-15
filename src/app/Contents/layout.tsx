import React from "react";

interface Props {
  children: React.ReactNode;
}

const ContentLayout = ({ children }: Props) => {
  return <div className="w-full h-[100vh] bg-blue-100 flex items-center justify-center">{children}</div>;
};

export default ContentLayout;
