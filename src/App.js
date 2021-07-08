import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return (
        <ChatEngine
            height = "100vh"
            projectID = "0c358338-add6-4d73-859b-07aee3f0a2db"
            userName = "shreyanshdube"
            userSecret = "123456789"
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} /> }
        />
    )
};

export default App;