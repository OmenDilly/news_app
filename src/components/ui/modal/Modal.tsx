import React, {FC, HTMLAttributes, SetStateAction} from 'react'
import classes from './modal.module.css'
import Button, {ButtonMode, ButtonModes} from '../button/Button';

export type ModalAction = {title: string, icon: string, onClick: () => void}

interface ModalProps {
  title?: string;
  children: React.ReactNode;
  actions?: ModalAction[];
  visible: boolean;
  setVisible: React.Dispatch<SetStateAction<boolean>>;
}

const Modal: FC<ModalProps> = ({title, children, actions, visible, setVisible}) => {

  const rootClasses = [classes.modal]
  if (visible) {
    rootClasses.push(classes.active)
  }
  
  return (
    <div
      className={rootClasses.join(' ')}
      onClick={() => setVisible(false)}
    >
      <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
        <h3 className={classes.modalHeader}>
          {title && title}
          <Button
            mode={ButtonModes.TEXT}
            onClick={() => setVisible(false)}
          >
            <span className="material-icons md-18">
              close
            </span>
          </Button>

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