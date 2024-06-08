# COA_Challenge TASKFORCE
## Photo Gallery 
This is a basic photo gallery website showcasing a few animal images with captions and "Know More" links.

### Features:
Displays multiple images in a grid layout.

Shows captions for each image, including animal name and location.

Includes "Know More" links for each image (currently not linked to anything) as it is on [figma] (https://www.figma.com/design/XF6xlvvHBv12WFveDjVoso/COA-Take-home-Challenge?node-id=1-482&t=AYgzSTKHscUZW0RT-0).

### Usage:
Save the HTML file (index.html) and any linked files (CSS: styles.css, Javascript: main.js, Images: folder named "images" containing the image files) in the same directory.

Open the index.html file in a web browser to view the photo gallery.

## Dependencies:

This code relies on external CSS file (styles.css) for styling the layout and appearance of the gallery.
## Customization:
You can easily replace the image source paths in the HTML code to display your own photos.

Edit the captions (animal names, locations) within the HTML code to match your images.
Update the "Know More" links (currently placeholders) to point to relevant external resources.

Modify the styles.css file to change the visual appearance of the gallery (font, colors, layout).

### Function ArrayWithSum
This document explains the JavaScript function arrayWithSum(arr, target). This function determines if a contiguous subarray within the given array arr sums up to the target value target.
 
 ### Functionality:
The function takes two arguments:
arr: An array of numbers.

target: The target sum you're looking for in a subarray.

It iterates through the arr and keeps track of a running sum Sum.

It checks if the current Sum is greater than the target. If so, it shrinks the subarray by removing elements from the beginning using a while loop until the Sum becomes less than or equal to the target.

If at any point the Sum becomes equal to the target, it means a subarray exists that sums up to the target, and the function returns true.

If the loop completes without finding a subarray that sums up to the target, the function returns false.

### Time Complexity:

The time complexity of this function is O(n), where n is the length of the array arr. This is because the loop iterates through the array at most once.

### Space Complexity:

The space complexity is O(1), which is considered constant. This is because it uses a limited number of variables (i, Sum) regardless of the array size.

## TransformString(str) Function 
This JavaScript function named transformString takes a string str as input and transforms it based on its length.

### Functionality:

Get String Length: It first calculates the length of the input string str and stores it in the variable length.

Conditional Checks: The function then performs a series of conditional checks based on the remainder when the length is divided by different numbers (15, 5, and 3).

Divisible by 15: If the length is a multiple of 15 (no remainder), the function:

Splits the string into an array of characters using split('').

Reverses the order of characters in the array using .reverse().

Converts each character to its corresponding ASCII code using charCodeAt(0). This gives the numerical representation of the character.

Joins the array of character codes back into a string with spaces in between using .join(' ').

Divisible by 5: If the length is a multiple of 5 (no remainder), the function:

Splits the string into an array of characters using split('').

Converts each character to its corresponding ASCII code using charCodeAt(0).

Joins the array of character codes back into a string with spaces in between using .join(' ').

Divisible by 3: If the length is a multiple of 3 (no remainder), the function:

Splits the string into an array of characters using split('').

Reverses the order of characters in the array using .reverse().

Joins the array of characters back into a string using .join('') (no spaces added).

Default Case: If the length is not a multiple of 3, 5, or 15, the function simply returns the original string str without any modification.
# COA_Challenge
# COA_Challenge
# COA_Challenge
