import { toast } from "react-toastify";

export const toastify = {
  //Consists of different objects that are seperate functions on their own
  alertSuccess: (message, duration, Close) => {
    toast.success(message, {
      icon: true,
      autoClose: duration,
      onClose: Close,
    });
  },

  alertError: (message, duration) => {
    toast.error(message, {
      icon: true,
      autoClose: duration,
    });
  },

  alertWarning: (message, duration) => {
    toast.warning(message, {
      icon: false,
      autoClose: duration,
    });
  },
};
