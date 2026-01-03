import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-wrapper">
      <div className="app-card">
        <h1>Contact Management App</h1>
        <ContactForm />
        <ContactList />
      </div>
    </div>
  );
};

export default App;
