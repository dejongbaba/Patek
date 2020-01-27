import React from 'react';
import {useGetDirectors} from "../../Effects/Effects";


// const WithAboutAndDirectors = (component) => {
//
//     const withAboutAndDirectors = (props) => {
//         const RenderComponent = component;
//         const [directors, isDirectorsLoading] = useGetDirectors();
//         return <RenderComponent
//             directors={directors}
//             isDirectorsLoading={isDirectorsLoading}
//             {...props}
//         />;
//     };
//     return withAboutAndDirectors
// };
//
// export default WithAboutAndDirectors;