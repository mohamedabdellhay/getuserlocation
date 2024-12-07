# Egypt Governorates Geolocation Finder  

This project is a JavaScript-based application that determines the closest Egyptian governorate to the user's current location. It uses the browser's **Geolocation API** to retrieve the user's latitude and longitude and calculates the distance to each governorate using the **Haversine formula**.

---

## Features  
- Retrieves the user's location (latitude and longitude) using the **Geolocation API**.  
- Matches the user's location to the nearest governorate in Egypt from a predefined list.  
- Displays the closest governorate to the user using an alert box.  

---

## Prerequisites  
To use this application, you need:  
1. A modern browser with JavaScript enabled.  
2. Location services enabled in your browser/device.  

---

## How It Works  
1. The script retrieves the user's geolocation coordinates.  
2. A predefined list of Egyptian governorates and their coordinates is used to compare distances.  
3. The **Haversine formula** is applied to calculate the distance between the user's location and each governorate.  
4. The script identifies the closest governorate and displays it to the user.  

---

## How to Use  
1. Copy the JavaScript code from the file `script.js`.  
2. Include it in an HTML file:  

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Governorate Finder</title>
</head>
<body>
    <h1>Find Your Governorate</h1>
    <script src="script.js"></script>
</body>
</html>
