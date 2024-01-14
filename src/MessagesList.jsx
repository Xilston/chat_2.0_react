import classNames from 'classnames';

/* eslint-disable */
export const MessagesList = (props) => {
  const { messagesList, myId, className, selectedDialog } = props;

  return (
    <section className={classNames("messages-area", className)}>
      <ul className="messagesList">
        {!messagesList && (
          <p className="default-hint">No messages yet. Send it first!</p>
        )}

        {messagesList && messagesList.map(message => {
          const { author } = message;

          return (
          <li className={classNames('message',
          {'message--ownMessage': author.id === myId}
          )}>
            {(selectedDialog && selectedDialog.dialogType === 'room') && (<div className="message__author">
              <img
               src={author.ava}
               alt={`${author.name}'s avatar`}
               className="message__author-ava"
              />
            </div>)}

            <div className="message__content">
              <p className="message__author-name">
                <span>{author.name}</span>
                <span className='message__time'>{message.time}</span>
              </p>
              <p className="message__text">{message.body}</p>
            </div>
          </li>
        );
        })}
      </ul>
    </section>
  );
};
