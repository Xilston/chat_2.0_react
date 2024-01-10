/* eslint-disable */

import classNames from "classnames";
import { MessageForm } from "./MessageForm";
import { MessagesList } from "./MessagesList";

export const DialogArea = (props) => {
  const { messages, myId, isDialogSelected, handleDialog } = props;

  return (
    <section className={classNames('dialog-area', {'mobileOn':isDialogSelected})}>
      <MessagesList messagesList={messages} myId={myId} />
      <MessageForm />
    </section>
  );
}
