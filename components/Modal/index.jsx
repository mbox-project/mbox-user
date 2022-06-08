import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";

const Modal = ({
  title,
  className,
  buttonTitle,
  titleClassName,
  titleShow,
  children,
  footerShow,
  footerResponseButton,
  footerResponseButtonClassName,
  footerCloseButton,
  footerCloseButtonClassName,
}) => {
  Modal.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    buttonTitle: PropTypes.string.isRequired,
    titleClassName: PropTypes.string.isRequired,
    titleShow: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    footerShow: PropTypes.bool.isRequired,
    footerResponseButton: PropTypes.string,
    footerResponseButtonClassName: PropTypes.string,
    footerCloseButton: PropTypes.string,
    footerCloseButtonClassName: PropTypes.string,
  };

  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <Button className={className} onClick={() => setShowModal(true)}>
        {buttonTitle}
      </Button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                {titleShow ? (
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className={titleClassName}>{title}</h3>
                  </div>
                ) : null}
                {/*body*/}
                {children}
                {/*footer*/}
                {footerShow ? (
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <Button
                      className={footerResponseButtonClassName}
                      onClick={() => setShowModal(false)}
                    >
                      {footerResponseButton}
                    </Button>
                    <Button
                      className={footerCloseButtonClassName}
                      onClick={() => setShowModal(false)}
                    >
                      {footerCloseButton}
                    </Button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
