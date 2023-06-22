import { useRouter } from "next/router";

//our-domain.com/aboutus/developer

function DeveloperDetails() {
  const router = useRouter();

  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },

    { id: 2, name: "Vaibhav", role: "Backend Developer" },

    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  const id = router.query.id;
  console.log(id);

  const developerData = details.find((data) => data.id === +id);
  console.log(developerData);
  if (developerData !== undefined) {
    return (
      <h1>
        {developerData.name}, {developerData.role}
      </h1>
    );
  }

  return <h1>Developer doesn't Exits</h1>;
}

export default DeveloperDetails;
