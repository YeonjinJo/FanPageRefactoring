const Jobs = () => {
  const jobList = [
    "Ph.D",
    "Artist",
    "Self-management Coach",
    "Psychologist",
    "Developer",
  ];

  const path = jobList.map((_, index) => {
    return "/job" + index;
  });

  return {
    jobList,
    path,
  };
}

export default Jobs;
