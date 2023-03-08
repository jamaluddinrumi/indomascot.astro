import { getDominantColor } from "@unpic/placeholder";
import { getPixels } from "@unpic/pixels";
import { promises as fs } from "node:fs";

export async function getDominantColorFromImageFile(filePath: string) {
  // Read the image data from a file
  const pngData = await fs.readFile(filePath);

  // Decode the image data into raw pixel data
  const { data } = getPixels(pngData);

  // Get the dominant color
  return getDominantColor(data);
}
