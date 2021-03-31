const paginate = (followers) => {
  const ItemsPerPage = 9;
  const pages = Math.ceil(followers.length / ItemsPerPage);

  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * ItemsPerPage;
    return followers.slice(start, start + ItemsPerPage);
  });

  return newFollowers;
};

export default paginate;
