import {RepositoryItem} from './RepositoryItem'

const repository = {
  name: 'unform2',
  descrition: 'Forms in React',
  link: 'https://github.com/unform/unform'
}

export default function RepositoryList() {
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
