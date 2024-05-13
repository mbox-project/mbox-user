"use client";

import React, { useState } from "react";
import useInstallPrompt from ".";
import { PwaPrompt } from "react-ios-pwa-prompt-ts";

const InstallButton = () => {
  const { promptInstall, deferredPrompt } = useInstallPrompt();
  const [isOpen, setIsOpen] = useState(false);

  const openPrompt = () => {
    setIsOpen(true);
    promptInstall();
  };

  return (
    <>
      <button
        onClick={openPrompt}
        className={`fixed bottom-6 right-6 p-2 px-4 bg-brightRed hover:bg-brightRed/50 text-white rounded-md shadow-md ${
          deferredPrompt ? "block" : "hidden"
        }`}
      >
        Install App
      </button>
      {isOpen && (
        <PwaPrompt
          promptInstall={promptInstall}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
    </>
  );
};

export default InstallButton;

// import React from "react";
// import useInstallPrompt from ".";

// const InstallButton = () => {
//   const { promptInstall, deferredPrompt } = useInstallPrompt();

//   return (
//     <button
//       onClick={promptInstall}
//       className={`fixed bottom-6 right-6 p-2 px-4 bg-brightRed hover:bg-brightRed/50 text-white rounded-md shadow-md ${
//         deferredPrompt ? "block" : "hidden"
//       }`}
//     >
//       Install App
//     </button>
//   );
// };

// export default InstallButton;
