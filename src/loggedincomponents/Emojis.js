import React from 'react';
import EmojiPicker from 'emoji-picker-react';

const Emojis = ({onEmojiClick}) => {
  return (
    <div className='fixed bottom-0'>
            <div className="text  mx-auto right-0 ">
                  <EmojiPicker onEmojiClick={onEmojiClick} className='' title='emoji'/>
            </div>
    </div>
  )
}

export default Emojis
