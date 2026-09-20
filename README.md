# Interactive Productivity Dashboard

This project is a web-based dashboard built for WEB-115 to demonstrate interactive JavaScript features.

## TODO: Future Enhancements
- [X] Add a metric conversion tool.
- [ ] Integrate a task list with array storage.
- [ ] Add JavaScript logic for a live clock.
- [X] Add a weekly task goal calculator.

## Weekly Task Goals

Calculates a user’s task targets based on daily goals and weekly bonuses. The user inputs their name, daily task goal, and weekly bonus tasks and submits. They then get an output with their name and the calculated total weekly goal (dailyGoal * 5 + bonusTasks).

## Imperial/Metric Converter

This app accepts a numeric input and converts it between US (Imperial) and Metric units. Unit conversions include inch to centimeter, foot to centimeter, yard to meter, and mile to kilometer (as well as each conversion in the other direction).

### Logic and Pseudocode
```
BEGIN
	// Display and input
	DISPLAY “Enter numeric value: "
	INPUT userValue
	DISPLAY		“1) in to cm
				2) ft to cm 
				3) yd to m
				4) mi to km
				5) cm to in
				6) cm to ft
				7) m to yd
				8) km to mi
				Select conversion type: "
	INPUT conversionType

	// Conversion logic
	IF conversionType EQUALS 1 THEN
	SET result = userValue * 2.54
	SET outputUnit = "cm"
        
	ELSE IF conversionType EQUALS 2 THEN
	SET result = userValue * 30.48
	SET outputUnit = "cm"
        
	ELSE IF conversionType EQUALS 3 THEN
	SET result = userValue * 0.91
	SET outputUnit = "m"
        
	ELSE IF conversionType EQUALS 4 THEN
	SET result = userValue * 1.61
	SET outputUnit = "km"

	ELSE IF conversionType EQUALS 5 THEN
	SET result = userValue * 0.39
	SET outputUnit = "in"
        
	ELSE IF conversionType EQUALS 6 THEN
	SET result = userValue * 0.0328
	SET outputUnit = "ft"
        
	ELSE IF conversionType EQUALS 7 THEN
	SET result = userValue * 1.09
	SET outputUnit = "yd"
        
	ELSE IF conversionType EQUALS 8 THEN
	SET result = userValue * 0.62
	SET outputUnit = "mi"

	// Output
	DISPLAY result + “ ” + outputUnit
END
```
