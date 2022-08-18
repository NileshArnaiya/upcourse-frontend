import React from 'react';
import Link from 'next/link';

const Pagination = ({ pg, setPage, isPreviousData }) => {
    return (
        <>
            <Link href="#!">
                <a onClick={() => setPage(pg)} disabled={isPreviousData}>{pg}</a>
            </Link>
        </>
    );
};

export default Pagination;