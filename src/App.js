import logo from './logo.svg';
import './App.css';
import { Filters, Hand_burger, Lable, Logo, Mic, Search_bar, Side_bar_icon, Toggle_component, Top_bar_icon, Video_card } from './component/component';
function App() {
  //dslkjlkdsjf
  return (
    <div className="App">
      <Top_bar_icon Name='handburger'></Top_bar_icon>

      <Logo></Logo>
      <Top_bar_icon Name='create'></Top_bar_icon>

      <Search_bar></Search_bar>
      <Mic></Mic>
      <Top_bar_icon Name='notification'></Top_bar_icon>
      <Side_bar_icon Name='subscription'></Side_bar_icon>
      <Side_bar_icon Name='home'></Side_bar_icon>
      <Side_bar_icon Name='help'></Side_bar_icon>
      <Filters Name='All' ></Filters>
      <Filters Name='Computer Programing' ></Filters>
      <Filters Name='Intelligence' ></Filters>
      <Toggle_component Name='Home' src='/assets/home.png'></Toggle_component>
      <Lable Name='Explore' size='20px'></Lable>
      <Video_card Video_src='/assets/image_netfix.png' Profile_src='/assets/Avatar-2.png' Video_title='How to makeCake' Channel_name='Kitchen' Views='2k' Date='10/02/2024'></Video_card>



    </div>
  );
}

export default App;
