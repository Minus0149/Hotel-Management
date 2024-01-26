"use client";

import imageUrlBuilder from "@sanity/image-url";
import sanityConfig from "../../sanity.config";

const builder = imageUrlBuilder(sanityConfig);

function urlFor(source: any) {
	return builder.image(source);
}
export default urlFor;
