import classNames from "classnames";

/* eslint-disable */
export const MessageForm = (props) => {
  const {className} = props;

  return (
    <form className={classNames("message-form", className)}>
      <textarea
        name="userMessage"
        id="userMessage"
        className="message__input"
      ></textarea>
      <button className="button">Send</button>
    </form>
  );
};
