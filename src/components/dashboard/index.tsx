import Footer from './Footer';
import Header from './Header';
import PageContent from './PageContent';
import SideMenu from './SideMenu';
import '../../styled/Dashboard/Index.styled.scss';

function Dashboard() {
  return (
    <div className="main">
      <Header />
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
