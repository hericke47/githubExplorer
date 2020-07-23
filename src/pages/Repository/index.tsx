import React, { useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
    <Header>
      <img src={logoImg} alt="Github Explorer"/>
      <Link to="/">
        <FiChevronsLeft size={16} />
        Voltar
      </Link>
    </Header>

    <RepositoryInfo>
        <header>
          <img src="https://xesque.rocketseat.dev/users/avatar/profile-c7eda7eb-a900-4af5-af2a-1b38250f7fcd.jpg" alt=""/>
          <div>
            <strong>Rocketseat</strong>
            <p>Descrição do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1800</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues Aberta</span>
          </li>
        </ul>
    </RepositoryInfo>

    <Issues>
          <Link
          to={"adfagad"}>
           <div>
              <strong>adgadg</strong>
              <p>adgadg</p>
           </div>

           <FiChevronRight size={20} />
         </Link>
    </Issues>

    </>
  );
};

export default Repository;



