import { MdErrorOutline } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { SiWindows } from "react-icons/si";
import '../scss/Quiz.scss'
const QuizHeader = () =>
{
  return (
    <>
    
   <section>
    <div className="container-fluid ">
    <div className="row px-0 justify-content-between pt-3">
    <div className="col-lg-3 col-md-3 col-sm-auto">
            <div className="d-flex gap-2 align-items-center  Quiz-section-header ms-2">
              <select class="form-select fs-7 w-75" aria-label="Default select example">
                <option value="1">1. Section#1</option>
                <option value="2">2. Section#1</option>
                <option value="3">3. Section#1</option>
              </select>
              <div className=" fs-7 pagination page-link rounded icon-section"><span><MdErrorOutline /></span></div>
            </div>
          </div>

          {/* second column start */}

      <div className="col-lg-6 col-md-6 col-sm-auto">
        <div className="d-flex gap-2 align-items-center ms-5 ">
            <div className="pagination  Quiz-A ms-5">
                <a className="page-link fs-7" href="#"><span><FaChevronRight /></span></a>
                <a className="page-link fs-7" href="#">1</a>
                <a className="page-link fs-7" href="#">2</a>
                <a className="page-link fs-7" href="#">3</a>
                <a className="page-link fs-7" href="#">4</a>
                <a className="page-link fs-7" href="#">5</a>
                <a className="page-link fs-7" href="#">6</a>
                <a className="page-link fs-7" href="#">7</a>
                <a className="page-link fs-7" href="#">8</a>
                <a className="page-link fs-7" href="#"><span><FaChevronRight /></span></a>
            </div>
            <div className=" fs-7 pagination page-link rounded icon-section"><span><SiWindows /></span></div>
          </div>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-auto align-items-center justify-content-end">
      <div className="Quiz-btn"><button type="submit" className="btn btn-outline-primary fs-7 px-3 Quiz-button">Next</button></div>
    </div>
  </div>
  <p className="text-center Quiz-pera">Attempted: 0/9</p>
</div>
   </section>
  
    </>
  );
}
export default QuizHeader;