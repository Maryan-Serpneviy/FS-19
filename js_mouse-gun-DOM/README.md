# Mouse Gun

## Task

1. Create an empty HTML page and add the following functionality to it: when you click anywhere on the page, the browser logs to the console the X and Y coordinates of where you have clicked in the window. For example, if you click in the top left corner of the page, the output will be `0 0` (or close to it). Use the `click` event.
2. Create an empty HTML page and add the following functionality to it: every time you move the cursor, the browser continuously logs to the console the X and Y coordinates of where the cursor is now. Use the `mousemove` event.
3. Create a page that works like described in #2, but only after the user clicks anywhere on the page. Before this initial click the page shouldn’t output anything to the console.
4. Create a page that prints `'down'` to the console every time the left mouse button is pressed down and prints `'up'` every time the button is released. For instance, if you click anywhere on the page, you should get `'down'` and then `'up'` in quick succession. If, on the other hand, you press the button and hold it for a while, you will see `'down'` in the console and then `'up'` only after you do release it. Use the `mousedown` and `mouseup` events.
5. Create a page that works like described in #2, but only when the mouse button is released. That is, it doesn’t print anything to the console until the button is pressed, then it starts outputting the cursor location upon its every movement, then it stops printing anything when the user releases the button (even if the cursor keeps moving). It restores printing when the button is released again.
6. Do what described in #5, but instead of printing coordinates to the console, create a red circular `div` and show it under the cursor during the time the button is released: the `div` should appear at exactly the point where the cursor is located just when the mouse button is pressed; the `div` then moves along with the cursor and disappears right when the button is released.
7. Do #1, but for an arbitrary webpage on the Internet: create a function such that after you run it in the console for a given page, you will get the coordinates of the cursor printed upon every click on the page.
8. Do #7, but on click, instead of printing coordinates destroy the element that happens to be at the current cursor position. Use the `elementFromPoint` method. __Upload your function to GitHub and share with your TA.__
9. (optional) Combine #6 and #8 in the following way: after running your function in the console of any webpage, you should be able to drag'n'drop every element on it and move them to arbitrary locations. You can use `transform/translate` for that (it’s okay if your method fails to work occasionally due to already assigned `transform` values).
---
**Read the guideline before start**

[Guideline](https://github.com/mate-academy/js_task-DOM-guideline)

**Result**

- [UPDATE DEMO LINK](https://<your_account>.github.io/<repo_name>/)
