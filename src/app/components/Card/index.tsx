"use client";

interface ITitle {
  title: string;
  content?: string;
  image: string;
}
export function Card({ content, title, image }: ITitle) {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl bg-[#4A1E1D]">
      <figure>
        <img
          src={image}
          alt={title}
          style={{ width: "384px", height: "290px" }}
          className="transition duration-300 ease-in-out hover:scale-110"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-[#BD988A] card-title">{title}</h2>
        {content && <p>{content}</p>}
        <div className="card-actions justify-end">
          <button className="btn btn-primary bg-[#452E1F] text-[#BD988A] focus:outline-[#C4A78B] hover:bg-[#6D4C3B]">
            Click here
          </button>
        </div>
      </div>
    </div>
  );
}
