import { MdOutlineBookmarkAdded } from "react-icons/md";

import img from '../imgs/Screenshot 2024-07-30 221605.png'

const QuizQuestion = () =>
{
  return(
    <>
    <section>
      <div className="d-flex justify-content-between mx-5">
        <div className="QuizQuestion fs-6 ">Question 1</div>
        <div className="QuizQuestionData"><span className="fs-6"><MdOutlineBookmarkAdded /></span><a href="#" className="text-decoration-none ms-2 fs-6">Revisit Later</a></div>
      </div>
      <div className="ms-5 mt-4 fs-4 me-3">
        <p className="QuizQuestion-pera">Three Function are given the same function name in the following Javascript. if a user clic on the submit button ,then what will be the output on console</p>
        <img src={img} className="img-fluid img-section"></img>
      </div>
    </section>
    </>
  );
}
export default QuizQuestion;