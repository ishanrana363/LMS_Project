import React from 'react';
import Layout from "../component/layout/Layout.jsx";
import CourseDetails from "../component/CourseDetails.jsx";

const CourseDetailsPage = () => {
    return (
        <div>
            <Layout>
                <CourseDetails/>
            </Layout>
        </div>
    );
};

export default CourseDetailsPage;