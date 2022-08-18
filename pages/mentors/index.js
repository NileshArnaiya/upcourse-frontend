import React from 'react';
import LayoutMentors from '../../components/layout-mentors';
import ListMentor from '../../features/list-mentor';

const Mentors = () => {
    return (
        <>
            <ListMentor />
        </>
    );
};
Mentors.getLayout = function getLayout(page) {
    return <LayoutMentors>{page}</LayoutMentors>
}
export default Mentors;