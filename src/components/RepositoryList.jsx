import {RepositoryItem} from './RepositoryItem';
import '../styles/repositories.scss';

const repository = {
  name: 'unform2',
  descrition: 'Forms in React',
  link: 'https://github.com/unform/unform'
}

export function RepositoryList() {
  return(
    <section clasname="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}
