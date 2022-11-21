import React, { useState, useEffect } from 'react';
import { fetchJobList } from 'services/fetchJobList';
import ErrorMsg from 'components/ErrorMsg/ErrorMsg';
import Loader from '../../components/Loader/Loader';
import Pagination from '../../components/Pagination/Pagination';
import JobCard from 'components/JobCard/JobCard';
import {
  JobsList,
  JobsItem,
} from './JobList.styled';

const ITEMS_PER_PAGE = 10;

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + ITEMS_PER_PAGE;
  const currentJobs = jobs.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(jobs.length / ITEMS_PER_PAGE);



  useEffect(() => {
    setIsLoading(true);
    async function fetch() {
      try {
        const jobs = await fetchJobList();
        setJobs(jobs);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetch();
  }, []);

  if (!jobs) {
    return null;
  }

  const handlePageClick = event => {
    const newOffset = (event.selected * ITEMS_PER_PAGE) % jobs.length;
    setItemOffset(newOffset);
  };

  const JobsOnCurrentPage = ({ currentJobs }) => {
    if (!currentJobs) {
      return null;
    }
  }
  
  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorMsg />}
      <JobsList>
        {jobs.map(job => (
          <JobsItem key={job.id}>
            <JobCard job={job}></JobCard>
          </JobsItem>
        ))}
      </JobsList>
      <JobsOnCurrentPage currentJobs={currentJobs} />
      <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
    </>
  );
};

export default JobList;