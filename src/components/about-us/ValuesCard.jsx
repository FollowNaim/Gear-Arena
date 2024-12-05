function ValuesCard({ text, bold, img, description }) {
  return (
    <div className="bg-white p-6">
      <div className="">
        <img className="w-10 " src={img} alt="" />
        <h3 className="text-xl font-semibold mt-6">
          <span className="text-destructive">{bold}</span> {text}
        </h3>
        <p className="text-primary/80 mt-2">{description}</p>
      </div>
    </div>
  );
}

export default ValuesCard;
