/* eslint-disable */
import classNames from 'classnames';
import cn from 'classnames';

export const DialogsList = (props) => {
  const { list,  className, selectedDialog, handleDialog } = props;

  return (
    <aside className={classNames("dialogs", className)} >
      <p className="dialogs__title">
        DIALOGS
      </p>

      <ul className="dialogs__list">
        {list.map(
          dialog => (<Dialog
            selectedDialog={selectedDialog}
            handleDialog={handleDialog}
            dialog={dialog}
          />)
        )}
      </ul>
    </aside>
  );
};

const Dialog = (props) => {
  const {dialog, handleDialog, selectedDialog } = props;

  return (
    <li
      className={cn('dialogs__dialog', {'dialogs__dialog--active': selectedDialog===dialog})}
      onClick={() => {
        console.log(`LI CLICKEDDDD`);
        handleDialog(dialog)
      }}
    >
      <img
        src={dialog.ico}
        alt={`${dialog.title}'s dialog`}
        className='dialogs__icon'
      />
      <p>{dialog.title}</p>
    </li>
  );
};
