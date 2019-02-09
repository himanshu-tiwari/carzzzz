# carzzzz
A listing of cars built using react/redux

Functionality synopsis:

======= Screen 1: Landing Page =======
Following user inputs:-
Location, Start Date, Submit Button.

Clicking "Submit" button takes to Screen 2.

======= Screen 2: Car Details =======
Display car details as a list of cards, as per the input in Screen 1.

Info needed in the car details card:
1. Car photo
2. Price 
3. Name of car 
4. Location 
5. Seats 
6. Petrol / Diesel
7. Automatic / Manual
8. Select this Car button

If the car is not available on the selected date, still list the car and add a label as "NOT AVAILABLE".

"Select" button functionality on every card on the list. The UI will change to reflect the selected card. If the car is not available, Select button should be disabled.


There will be following two functionalities - Filtering and Sorting, on the displayed data.
 
=== Filter by: ===
1. Transmission Type - Manual / Automatic
2. Car Type - Hatchback / Sedan / SUV / Mini SUV
3. Fuel - Petrol / Diesel

=== Sort By: ===
1) Price