function SmallCards({ head, text }) {
  return (
    <div className="bg-muted">
      <div className="p-4 text-center">
        <p className="text-destructive text-2xl font-bold">{head}</p>
        <p className="mt-2">{text}</p>
      </div>
    </div>
  );
}

export default SmallCards;
