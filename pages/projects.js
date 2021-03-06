import Head from 'next/head';
import { useState } from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import usePortfolio from '../hooks/usePortfolio';
import PortfolioList from '../components/PortfolioList';
import Pagination from '../components/Pagination';

const Portfolio = () => {
  const [page, setPage] = useState(0);
  const { data, error } = usePortfolio(page);

  if (error) return <div>failed to load</div>;
  return (
    <>
      <Head>
        <title>Projects Page</title>
      </Head>
      <section className="page-title" style={{ backgroundColor: 'black' }}>
        <div className="container">
          <h1 className="font-alt">Portfolio List</h1>
        </div>
        {/* container */}
      </section>

      <section id="portfolio" className="section">
        <div className="container">
          <div className="row">
            <PortfolioList data={data} />
          </div>
          <If condition={!!data?.totalcount}>
            <Pagination page={page} totalcount={data.totalcount} changePage={setPage} />
          </If>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
