import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/client";

interface AboutUs {
    _id: string;
    title: string;
    description: string
}

export const revalidate = 60;

async function getAboutUs() {
  const query = `*[_type == "aboutUs"]{
    _id,
    title,
    description
  }`;
  return client.fetch<AboutUs[]>(query);
}

export default async function AboutUsPage() {

    const abouts = await getAboutUs();
    //may need to nest the sidebar in another div so column is frozen but keeps the sidebar persistently on the side
    //will need to search for enboldened or italic text and replace it before returning
      //Will need to search for triple then duo then single asterisk
    return ( //need to map the menu and the actual text
        <div className="w-full max-w-7xl mx-auto py-12 px-4">
           <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
           <div className="flex flex-col gap-6 sm:flex-row">
            <div className="flex-shrink-0" id="sideBar"> 
              {abouts.map((about) => (
                <div key={about._id} className="">
                  {about.title}
                </div>
              ))}
            </div>
            <div className="mainText">
              {abouts.map((about) => (
                <div key={about._id} className="p-3">
                  <div className="text-2xl">{about.title}</div>
                  <div className="">{about.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
    );
}