export function insertWordAfterSubstring(
  originalString: string,
  searchString: string,
  wordToAdd: string
) {
  // Find the index of the search string
  const index = originalString.indexOf(searchString);

  // Check if the search string is found
  if (index !== -1) {
    // Calculate the position to insert the new word, which is right after the search string
    const insertPosition = index + searchString.length;

    // Insert the word and return the new string
    return (
      originalString.slice(0, insertPosition) +
      wordToAdd +
      originalString.slice(insertPosition)
    );
  } else {
    // If the search string is not found, return the original string
    return originalString;
  }
}