import React from "react";
import Header from "./header";
import Navigation from "./navigation";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <Navigation />
      {children}
    </div>
  );
}
