import{
    creatClient,
    createClient,
    createCurrentUserHook,
} from "next-sanity";

import createImageUrlBuilder from '@sanity/image-url';

//getting this info from sanity.json file an they are saved in .env.local
export const config={
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2021-03-25",
    useCdn: process.env.NODE_ENV === "production",
}
export const sanityClient = createClient(config);
//wtf is this?!
export const urlFor = (source) => createImageUrlBuilder(config).image(source);
export const useCurrentUser = createCurrentUserHook(config)