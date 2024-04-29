/**
 * Calculate the minimum number of page flips required to reach a specified page.
 * @param {number} n - The total number of pages in the book.
 * @param {number} p - The target page to reach.
 * @returns {number} The minimum number of page flips.
 */
function pageCount(n, p) {
  // Calculate the number of page flips from the beginning to the target page (front flips)
  let frontFlip = Math.floor(p / 2);
  
  // Calculate the number of page flips from the end to the target page (back flips)
  // The total number of pages minus the number of front flips gives the remaining pages to flip from the end
  let backFlip = Math.floor((n / 2) - frontFlip);

  // Determine the minimum number of flips required by taking the minimum of front flips and back flips
  let result = Math.min(frontFlip, backFlip);
  
  // Return the minimum number of page flips required
  return result;
}

