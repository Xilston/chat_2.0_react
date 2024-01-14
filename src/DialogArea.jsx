/* eslint-disable */

import classNames from "classnames";
import { MessageForm } from "./MessageForm";
import { MessagesList } from "./MessagesList";
import { batman_ico_url } from "./App";
import { useState } from "react";

export const DialogArea = (props) => {
  const {myId, className, selectedDialog, handleDialog} = props;

  return (

    <section className={classNames('dialog-area', className)}>

      {!selectedDialog && (<p className="default-hint">Choose the chat...</p>)}
      {
       selectedDialog && (
        <>
          <DialogBar
            selectedDialog={selectedDialog}
            handleDialog={handleDialog}
          />
          <MessagesList
            className={classNames('dialog-area__messagesList--height')}
            messagesList={selectedDialog.messagesArray}
            myId={myId}
            selectedDialog={selectedDialog}
          />
          <MessageForm className='dialog-area__message-form--height' />
        </>
        )}
    </section>
  )

}


export const DialogBar = (props)=>{
  const {handleDialog, selectedDialog} = props;
  const [ menuEnable, setMenuEnable ] = useState ( false );
  return (
    selectedDialog && (
      <div className='dialog-bar dialog-area__dialog-bar--height'>
        <button
          className='button dialog-bar__back'
          onClick={() => handleDialog(null)}
        >
          {'<'}
        </button>

        <span className="dialog-bar__dialog-info">
          <img className='dialog-bar__ava' src={selectedDialog.ico}></img>
          <p className='dialog-bar__title'>{selectedDialog.title}</p>
        </span>

        <div className="buttons-block">
          <button className='button'>O</button>
          <button className='button' onClick={()=>setMenuEnable(!menuEnable)}>...</button>
          {menuEnable && (<DialogMenu/>)}
        </div>
      </div>
    )
  )
}



const DialogMenu = (  )   =>   {
  return (
    <div className="dialog-menu">
      <ul>
        <li className="dialog-menu__item">Показать медиа</li>
        <li className="dialog-menu__item">Info</li>
        <li className="dialog-menu__item">Оистить историю</li>
        <li className="dialog-menu__item">Заблокировать</li>
      </ul>
    </div>
  )
 }
