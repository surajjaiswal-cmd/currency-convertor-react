import { useQuery } from "@tanstack/react-query";
import { getPost } from "../api/ApiData";
import From from "./From";
import To from "./To";
import MoreInfo from "./MoreInfo";

const Convertor = () => {
  const { data } = useQuery({
    queryKey: ["data"],
    queryFn: getPost,
    staleTime: 3600000,
    cacheTime: 3600000,
  });
  return (
    <>
      <div className="main-box-folder ">
        <h1 className="container text-white healding">
          Currency <br /> Convertor
        </h1>
        <div className="main-box">
          {data && (
            <>
              <From data={data} />
              <i className="fa-solid fa-arrow-right-arrow-left text-center container my-4 fs-5 rotate-90"></i>
              <To data={data} />
              <MoreInfo data={data} />
            </>
          )}
        </div>
        <div className="footer">
          This Currency Convertor Made by surajjaiswal0963@gmail.com
        </div>
      </div>
    </>
  );
};

export default Convertor;
