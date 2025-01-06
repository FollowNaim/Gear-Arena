const teamMembers = [
  {
    name: "John Doe",
    title: "Founder & CEO",
    imageUrl:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Kate Winslet",
    title: "Operations Manager",
    imageUrl:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Bob Smith",
    title: "Sales Director",
    imageUrl:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Peter Johnson",
    title: "Lead Developer",
    imageUrl:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "David Lee",
    title: "Senior Backend Engineer",
    imageUrl:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Sarah Williams",
    title: "UI/UX Designer",
    imageUrl:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Michael Brown",
    title: "Product Strategist",
    imageUrl:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Elizabeth Johnson",
    title: "Customer Support Manager",
    imageUrl:
      "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];
const MeetTeam = () => {
  return (
    <div className="flex flex-col items-center justify-center py-14 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-xl mx-auto">
        <b className="text-center text-muted-foreground text-base">
          Our Heroes
        </b>
        <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
          Meet Our <span className="text-destructive">Team</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg">
          At Gear Arena, we believe in the power of a diverse and passionate
          team that thrives in a culture of collaboration and continuous
          improvement.
        </p>
      </div>

      <div className="mt-20 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 max-w-screen-lg mx-auto">
        {teamMembers.map((member) => (
          <div key={member.name} className="text-center">
            <img
              src={member.imageUrl}
              alt={member.name}
              className="h-20 w-20 rounded-full object-cover mx-auto bg-secondary"
              width={120}
              height={120}
            />
            <h3 className="mt-4 text-lg font-bold">{member.name}</h3>
            <p className="text-destructive">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTeam;
