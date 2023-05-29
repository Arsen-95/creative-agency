import './App.css';
import {
  Header,
  Questions,
  Service,
  Steps,
  Title,
  Blog,
  Footer,
} from './components';

const App = () => {
  return (
    <>
      <div className='font-inter bg-[url("/images/composition.png")] bg-cover bg-no-repeat pb-[447px]'>
        <Header className="mb-48" />
        <Title />
      </div>
      <Service className="pt-24 " />
      <Steps className="mb-2 pt-24" />
      <Questions />
      <Blog className="mb-[100px]" />
      <Footer />
    </>
  );
};

export default App;
