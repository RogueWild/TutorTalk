import React from 'react';
import Chat from '../comps/Chat';

export default {
    title: 'Chat/Chat',
    component: Chat
};

export const BasicChat = () => <div>
    <Chat username="Matt" chatText="Can someone explain nested for loops?" time="Yesterday at 5:42 PM" />
    <Chat username="Chris Young" chatText="Sure. Nested for loops are..... and here’s an example:" time="Today at 5:42 PM" />
    <Chat indent="100px" username="Tutor: Sarah Lee" chatText="Great job answering Matt’s question, Chris. @Matt if you’re
still stuck on it, we can schedule a zoom meeting this week.
Just let me know!" time="Just now" />
    <Chat username="Matt" chatText="Can someone explain nested for loops?" time="Yesterday at 5:42 PM" />
    <Chat username="Chris Young" chatText="Sure. Nested for loops are..... and here’s an example:" time="Today at 5:42 PM" />
</div>;
