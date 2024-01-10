/* eslint-disable */
export const MessageForm = () => {
  return (
    <form className="message-form">
      <textarea
        name="userMessage"
        id="userMessage"
        className="message__input"
      ></textarea>
      <button className="message-send">Send</button>
    </form>
  );
};
