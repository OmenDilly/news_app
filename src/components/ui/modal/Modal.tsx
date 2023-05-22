import React, {FC, HTMLAttributes} from 'react'
import classes from './modal.module.css'
import Button from '../button/Button';

// type ModalProps = HTMLAttributes<HTMLDivElement>;

export type ModalAction = {title: string, icon: string, onClick: () => void}

interface ModalProps {
  title?: string;
  children: React.ReactNode;
  actions?: ModalAction[]
}

const Modal: FC<ModalProps> = ({title, children, actions}) => {
  return (
    <div
      className={[classes.modal, classes.active].join(' ')}
    >
      <div className={classes.modalContent}>
        <h3 className={classes.modalHeader}>
          {title && title}
        </h3>
        <div className={classes.modalBody}>
          {children}
        </div>
        <div className={classes.modalActions}>
          {
            actions && actions.map((action, index) => 
              <Button
                onClick={action.onClick}
              >
                <span className="material-cions">
                  {action.icon}
                </span>
                {action.title}
              </Button>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Modal