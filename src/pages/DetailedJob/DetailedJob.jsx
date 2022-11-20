import { Main } from './DetailedJob.styled';
import DetailedStructure from 'components/DetailedStructure/DetailedStructure';

const DetailedJob = ({ job }) => {
  return (
    <Main>
      <DetailedStructure job={job} />
    </Main>
  );
};

export default DetailedJob;