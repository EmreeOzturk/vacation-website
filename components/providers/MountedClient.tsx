"use client";
import { ReactNode, useEffect, useState } from "react";

const MountedClient = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return <>{mounted && children}</>;
};

export default MountedClient;
