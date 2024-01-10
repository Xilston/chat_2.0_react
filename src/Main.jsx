/* eslint-disable */

import { DialogArea } from "./DialogArea";
import { DialogsList } from "./DialogsList";

export const Main = (props) => {
  const { messages, dialogs, myId, isDialogSelected, handleDialog  } = props;

  return (
    <main className="main">
      <div className="main__content container">
        <DialogsList
          list={props.dialogs}
          myId={myId}
          isDialogSelected={isDialogSelected}
          handleDialog={handleDialog}
        />
        <DialogArea
          messages={props.messages}
          myId={myId}
          isDialogSelected={isDialogSelected}
          handleDialog={handleDialog}
        />
      </div>
    </main>
  );
};

