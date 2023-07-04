import { useCallback, useState } from "react";
export type WithPaginationProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  nextPage: () => void;
  prevPage: () => void;
};
const withPagination =
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
    <P extends unknown>(
      Component: (props: P & WithPaginationProps) => JSX.Element,
      initialStep = 1
    ) =>
    (props: P) => {
      const [page, setPage] = useState(initialStep);
      const nextPage = useCallback(() => {
        setPage((page) => page + 1);
      }, []);
      const prevPage = useCallback(() => {
        if (page === 1) return;
        setPage((page) => page - 1);
      }, [page]);
      return (
        <Component
          page={page}
          nextPage={nextPage}
          prevPage={prevPage}
          setPage={setPage}
          {...(props as any)}
        />
      );
    };
export default withPagination;
