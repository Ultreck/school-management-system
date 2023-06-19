import React from 'react';
import EmojiPicker from 'emoji-picker-react';

const Emojis = ({onEmojiClick}) => {
  return (
    <div className='fixed bottom-0  w-full'>
            <div className="text  mx-auto right-0 w-full">
                  <EmojiPicker onEmojiClick={onEmojiClick} width={'100%'} className='' title='emoji'/>
            </div>
    </div>
  )
}

export default Emojis
