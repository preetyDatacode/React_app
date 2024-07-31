import { RiEraserLine } from "react-icons/ri";

const QuizAnswer = () =>
{
  return (
    <>
    <section>
      <div className="d-flex justify-content-between mx-5">
        <div className="QuizAnswer fs-6 ">Select an option</div>
        <div className="QuizAnswerData"><span className="fs-6"><RiEraserLine /></span><a href="#" className="text-decoration-none ms-2 fs-6">clear Response</a></div>
      </div>
       {/* option start */}

       <div className="options-container mx-5 mt-4">
                    <div className="py-3">
                    <div className="form-check border rounded py-2 align-items-center">
                       <div className="ps-2"> <input className="form-check-input" type="radio" name="options" id="option1"/></div>
                        <label className="form-check-label ps-3" for="option1">
                            function one called 
                            <br/>function two called.. function three called..
                        </label>
                    </div>
                    </div>
                    <div className="pb-3">
                    <div className="form-check border rounded py-2 align-items-center">
                        <div className="ps-2"><input className="form-check-input" type="radio" name="options" id="option2"/></div>
                        <label className="form-check-label ps-3" for="option2">
                            function two called..
                        </label>
                    </div>
                    </div>
                    <div className="pb-3">
                    <div className="form-check border rounded py-2 align-items-center">
                        <div className="ps-2"><input className="form-check-input" type="radio" name="options" id="option3"/></div>
                        <label className="form-check-label ps-3" for="option3">
                            function one called..
                        </label>
                    </div>
                    </div>
                    <div className="pb-3">
                    <div className="form-check border rounded py-2 align-items-center">
                        <div className="ps-2"><input className="form-check-input" type="radio" name="options" id="option4"/></div>
                        <label className="form-check-label ps-3" for="option4">
                            function three called..
                        </label>
                    </div>
                    </div>
                </div>
               
    </section>
    </>
  );
}
export default QuizAnswer;