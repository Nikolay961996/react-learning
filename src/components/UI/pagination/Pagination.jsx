import React from 'react';
import {usePagination} from "../../../hooks/usePagination";

const Pagination = ({totalPages, page, changePage}) => {
    const pagesArray = usePagination(totalPages);

    return (
        <div className="page__wrapper">
            {
                pagesArray.map(p =>
                    <span
                        key={p}
                        onClick={() => changePage(p)}
                        className={page === p ? 'page page__current' : 'page'}>
                        {p}
                    </span>
                )
            }
        </div>
    );
};

export default Pagination;