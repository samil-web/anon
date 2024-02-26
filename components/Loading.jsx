'use client'

import React, { useEffect } from "react";

function Loading() {
  useEffect(() => {
    const delay = async () => {
      await new Promise(resolve => setTimeout(resolve, 3000));
      // Additional asynchronous operations can be added here if needed
    };

    delay();
  }, []);

  return (
    <div>
      <p>Main Content</p>
    </div>
  );
}

export default Loading;
