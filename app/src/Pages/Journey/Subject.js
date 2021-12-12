import { Link } from "react-router-dom";

import { AiFillStar } from 'react-icons/ai'

const Subject = ({imgSrc, subjectTitle, subjectPath, completed }) => {
    return (
        <Link to={subjectPath}>
            <div className="subject-card">
                <img src={imgSrc} />
                <span>{subjectTitle}</span>
            </div>
        </Link>
    );
}

export default Subject