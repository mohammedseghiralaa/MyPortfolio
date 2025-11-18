import { client } from "@/sanity/lib/client";

export async function fetchCv() {
  const CvInfo = await client.fetch(
    `*[_type == "cv"][0]{"MyCv":cvFile.asset->url, skills,"ProfileImage":ProfileImage.asset->url,myDescription, contacts[] {
        label,
        url
      }}`
  );
  return CvInfo;
}
export async function fetchProjects() {
  const projects = await client.fetch(
    `*[_type=="projects"]{
      id,
      name,
      description,
"images": image[].asset->url,
      skills,
      url
    }`
  );
  return projects;
}
export async function fetchSkills() {
  const skills = await client.fetch(
    `*[_type == "skills"][0]{
      frontEnd[]{
        "name":label,
        "icon": skillicon,
         "image":skillimage,
      },
      backEnd[]{
        "name":label,
        "icon": skillicon,
 "image":skillimage,
      },
      tools[]{
        "name":label,
        "icon": skillicon,
         "image":skillimage,

      }
    }`
  );

  return skills;
}
