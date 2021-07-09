import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
// import LoginForm from './components/LoginForm';
import './App.css';

const App = () => (
  <ChatEngine
    height="100vh"
    projectID="0c358338-add6-4d73-859b-07aee3f0a2db"
    userName="shreyanshdube"
    userSecret="123456789"
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
  />
);

// infinite scroll, logout, more customizations...

export default App;
