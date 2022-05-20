/**
 * 😮 Wow what a major breakthrough function to check whether the number is odd or even 🎉
 * @param number
 * @returns "odd" or "even"
 */
function oddOrEven(number: number): "odd" | "even" {
  return number & 1 ? "odd" : "even";
}

export default oddOrEven;
