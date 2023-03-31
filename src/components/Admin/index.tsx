import Footer from './Footer';
import Header from './Header';
import PageContent from './PageContent';
import SideMenu from './SideMenu';
import '../../styled/AdminPage/Index.styled.scss';

function Admin() {
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

export default Admin;
