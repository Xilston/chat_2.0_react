import classNames from 'classnames';

/* eslint-disable */
export const MessagesList = (props) => {
  const { messagesList, myId, className, selectedDialog } = props;

  return (
    <section className={classNames("messages-area", className)}>
      <ul className="messagesList">
        {messagesList.map(message => {
          const { author } = message;

          return (
          <li className={classNames('message',
          {'message--ownMessage': author.id === myId}
          )}>
            {(selectedDialog && selectedDialog.dialogType === 'room') && (<div className="message__author">
              <img
               src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-1024.png"
               alt={`${author.name}'s avatar`}
               className="message__author-ava"
              />
            </div>)}

            <div className="message__content">
              <p className="message__author-name">{author.name}</p>
              <p className="message__text">{message.body}</p>
              <p className='message__time'>{message.time}</p>
            </div>
          </li>
        );
        })}


      </ul>
    </section>
  );
};
