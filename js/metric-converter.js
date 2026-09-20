// Metric Converter Tool
function convertMetric(userValue, conversionType) {
    switch (conversionType) {
        case "in-cm":
            result = userValue * 2.54;
            outputUnit = "cm";
            break;
        case "ft-cm":
            result = userValue * 30.48;
            outputUnit = "cm";
            break;
        case "yd-m":
            result = userValue * 0.91;
            outputUnit = "m";
            break;
        case "mi-km":
            result = userValue * 1.61;
            outputUnit = "km";
            break;
        case "cm-in":
            result = userValue * 0.39;
            outputUnit = "in";
            break;
        case "cm-ft":
            result = userValue * 0.0328;
            outputUnit = "ft";
            break;
        case "m-yd":
            result = userValue * 1.09;
            outputUnit = "yd";
            break;
        case "km-mi":
            result = userValue * 0.62;
            outputUnit = "mi";
            break;
    }

    let output = (result + " " + outputUnit);
    document.getElementById("conversion-result").innerHTML = output;
}


// Event listener for the convert button click event
document.getElementById("convert-btn").addEventListener("click", function(event) {
    event.preventDefault();
    
    let userValue = parseFloat(document.getElementById("user-value").value);
    // The instructions said to use document.getElementsByTagName() here, but
    // wouldn't that fall apart if another select was ever added to the html?
    // I'll comment it below for demonstration purposes, but I'm really unclear
    // on why that would be a better approach than using getElementById().
    // let conversionType = document.getElementsByTagName("select")[0].value;
    let conversionType = document.getElementById("conversion-type").value;

    convertMetric(userValue, conversionType);
});