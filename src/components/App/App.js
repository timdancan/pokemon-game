import Header from '../Header/Header.js'
import Layout from '../Layout/Layout.js'
import Footer from '../Footer/Footer.js'
import BackgroundImage from '../../assets/bg.jpg'

const App = () => {
  return (
    <>
      <Header title="This is title" descr="This is Description!"/>
      <Layout id="1" title="Какой-то титуль" descr="Какой-то описание" urlBg={ BackgroundImage } />
      <Layout id="2" title="Какой-то титуль" descr="Какой-то описание" colorBg={ "#fd9206" }/>
      <Layout id="3" title="Какой-то титуль" descr="Какой-то описание" urlBg={ BackgroundImage } />
      <Footer />
    </>
  );
};

export default App