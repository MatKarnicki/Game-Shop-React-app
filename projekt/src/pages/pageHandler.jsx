export default function PageHandler({ pageNumber, maxPages, setPage }) {
  const handleNextPage = () => {
    if (pageNumber < maxPages) {
      setPage(parseInt(pageNumber) + 1);
    }
  };
  const handlePreviousPage = () => {
    if (pageNumber > 1) {
      setPage(pageNumber - 1);
    }
  };
  return (
    <>
      {pageNumber !== 1 && (
        <button onClick={handlePreviousPage}>Poprzednia strona</button>
      )}
      {pageNumber} / {maxPages}
      {pageNumber !== maxPages && (
        <button onClick={handleNextPage}>Nastepna strona</button>
      )}
    </>
  );
}
