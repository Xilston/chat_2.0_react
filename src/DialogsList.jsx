/* eslint-disable */
import cn from 'classnames';

export const DialogsList = (props) => {
  const { list, isDialogSelected, handleDialog } = props;

  return (
    <aside className="dialogs">
      <p className="dialogs__title">
        DIALOGS
      </p>

      <ul className="dialogs__list">
        {list.map(
          dialog => (<Dialog
            dialog={dialog}
            isDialogSelected={isDialogSelected}
            handleDialog={handleDialog}
          />)
        )}
      </ul>
    </aside>
  );
};

const Dialog = (props) => {
  const {dialog, isDialogSelected, handleDialog } = props;

  return (
    <li
      className={cn('dialogs__dialog', {'dialogs__dialog--active': dialog.active})}
      onClick={() => {
        console.log(`LI CLICKEDDDD`);
        handleDialog(!isDialogSelected)
      }}
    >
      <img
        src={dialog.ico}
        alt={`${dialog.title}'s dialog`}
        className='dialogs__icon'
      />
      <p>{dialog.title}</p>
      <button
        onClick={() => {
          console.log(`LI CLICKEDDDD`);
          handleDialog(!isDialogSelected)
        }}
      >
        clo
      </button>
    </li>
  );
};
