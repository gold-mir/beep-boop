## Specifications:
* Program allows user to input a number and prints out all integers between zero and that number.
  * Example Input: 5
  * Expected Output: 0, 1, 2, 3, 4, 5
* Program replaces all numbers that contain a 0 with "Beep!".
  * Example Input: 5
  * Expected Output: Beep!, 1, 2, 3, 4, 5
* Program replaces all numbers that contain a 1 with "Boop!" This rule overrides the first rule.
  * Example Input: 10
  * Expected Output: Beep!, Boop!, 2, 3, 4, 5, 6, 7, 8, 9, Boop!
* Program replaces all numbers divisible by 3 with "I'm sorry Dave, I'm afraid I can't do that." This rule overrides the previous two rules.
  * Example input: 30
  * Expected output: Beep!, Boop!, 2, I'm sorry Dave, I'm afraid I can't do that., 4 ... 28, 29, I'm sorry Dave, I'm afraid I can't do that.
