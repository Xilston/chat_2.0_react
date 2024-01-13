/* eslint-disable */

import classNames from "classnames";
import { DialogArea } from "./DialogArea";
import { DialogsList } from "./DialogsList";

export const Main = (props) => {
  const {
    messages,
    dialogs,
    myId,
    handleDialog,
    selectedDialog,
  } = props;

  return (
    <main className="main">
      <div className="main__content container">
        <DialogsList
          selectedDialog={selectedDialog}
          list={props.dialogs}
          myId={myId}
          handleDialog={handleDialog}
          className={classNames('main__dialogs')}
        />
        <DialogArea
          selectedDialog={selectedDialog}
          messages={props.messages}
          myId={myId}
          handleDialog={handleDialog}
          className={classNames('main__dialog', {'main__dialog--active': selectedDialog})}
        />
      </div>
    </main>
  );
};

