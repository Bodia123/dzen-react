import React from "react";

interface IProps {
  isVisible: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  footerActions?: React.ReactNode;
  outsideClickClose?: boolean;
}

const ModalInstance: React.FC<IProps> = ({
  isVisible,
  title,
  onClose,
  children,
  footerActions,
  outsideClickClose = true,
}: IProps) => {
  const outsideModalClick = (e: React.MouseEvent) => {
    if (outsideClickClose && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal fade bg-dark bg-opacity-50 ${
        isVisible ? "show d-block" : ""
      } `}
      tabIndex={-1}
      role="dialog"
      onClick={outsideModalClick}>
      <div
        className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
        role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"></button>
          </div>
          <div className="modal-body">{children}</div>
          {footerActions && (
            <div className="modal-footer bg-success">{footerActions}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalInstance;
