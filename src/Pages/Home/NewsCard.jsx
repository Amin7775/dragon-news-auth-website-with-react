import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, image_url, author,details,thumbnail_url ,_id} = news;
  return (
    <div className="card  bg-base-100 shadow-md mb-16">
      <div className="bg-[#F3F3F3] p-5 pb-2 flex gap-5 items-center">
        <img className="w-12 rounded-full" src={author.img} alt="" />
        <div>
          <h2 className="text-lg font-medium">{author.name}</h2>
          <h2 className="text-base font-medium text-gray-600">
            {author.published_date}
          </h2>
        </div>
      </div>
      <div className="p-3 ">
        <h2 className="card-title p-1 text-2xl font-bold mb-5">{title}</h2>
        <figure>
          <img src={image_url} />
        </figure>
        <div className="card-body">
            {details.length > 200 ?
            <p>
                {details.slice(0,200)}<Link to={`/news/${_id}`} className="text-blue-600">Read More</Link>
            </p> 
            :
                <p>{details}</p>
            }
            
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
