import QuizAnswer from "./QuizAnswer";
import QuizHeader from "./QuizHeader";
import QuizQuestion from "./QuizQuestion";

const QuizBody = () =>
{
  return (
    <>
  <section>
    <div className="container border pb-5" >
        <QuizHeader></QuizHeader>
     
        <div className="row px-0 border-top">
          <div className="col-6 py-0 mt-4 ">
            <QuizQuestion></QuizQuestion>
          </div>
          <div className="col-6 py-0 mt-4">
            <QuizAnswer></QuizAnswer>
          </div>
      </div>
    </div>
  </section>
    </>
  );
}
export default QuizBody;