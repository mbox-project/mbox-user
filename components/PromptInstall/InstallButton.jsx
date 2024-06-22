import React from "react";
import useInstallPrompt from ".";

const InstallButton = () => {
  const { promptInstall, deferredPrompt } = useInstallPrompt();

  const handleInstructionsClick = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    if (isIOS) {
      // Provide instructions on how to add the app to the home screen for iOS users
      alert(
        "To add this app to your home screen, tap the 'Share' button and then select 'Add to Home Screen'."
      );
    } else {
      // Trigger installation prompt for Android or PC users
      promptInstall();
    }
  };

  return (
    <button
      onClick={handleInstructionsClick}
      className={`fixed bottom-6 right-6 p-2 px-4 bg-brightRed hover:bg-brightRed/50 text-white rounded-md shadow-md ${
        deferredPrompt ? "block" : "hidden"
      }`}
    >
      {/iPad|iPhone|iPod/.test(navigator.userAgent)
        ? "Add to Home Screen"
        : "Install App"}
    </button>
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
//       className={`fixed bottom-4 right-4 p-2 bg-brightRed hover:bg-brightRed/50 text-white rounded-md shadow-md ${
//         deferredPrompt ? "block" : "hidden"
//       }`}
//     >
//       Install App
//     </button>
//   );
// };

// export default InstallButton;
