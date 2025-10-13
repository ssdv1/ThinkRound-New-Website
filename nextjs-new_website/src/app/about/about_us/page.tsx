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

    const members = await getAboutUs();

    return (
        <div>

        </div>
    );
}