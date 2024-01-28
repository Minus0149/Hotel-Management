"use client";

import imageUrlBuilder from "@sanity/image-url";
import sanityConfig from "../../sanity.config";

const builder = imageUrlBuilder(sanityConfig);

export function urlFor(source: any) {
	return builder.image(source);
}
