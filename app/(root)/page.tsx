import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import { StartupTypeCard } from "../../components/StartupCard";
import StartupCard from "../../components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: "Jane Doe",
        image:
          "https://cdn.vectorstock.com/i/500p/11/22/robotic-hand-logo-template-vector-22681122.jpg",
      },
      _id: 1,
      description: "Something",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nao_Robot_%28Robocup_2016%29.jpg/960px-Nao_Robot_%28Robocup_2016%29.jpg",
      category: "Robots",
      title: "We Robots",
    },
  ];

  return (
    <>
      <section className="w-full bg-[#EE2B69] min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
