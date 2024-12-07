// array of governorates with coordinates
const egyptGovernorates = [
  { name: "القاهرة", latitude: 30.0444, longitude: 31.2357 },
  { name: "الإسكندرية", latitude: 31.2156, longitude: 29.9553 },
  { name: "الجيزة", latitude: 29.987, longitude: 31.2118 },
  { name: "أسوان", latitude: 24.0889, longitude: 32.8998 },
  { name: "الأقصر", latitude: 25.6872, longitude: 32.6396 },
  { name: "المنيا", latitude: 28.0871, longitude: 30.7618 },
  { name: "أسيوط", latitude: 27.1801, longitude: 31.1837 },
  { name: "سوهاج", latitude: 26.5595, longitude: 31.6959 },
  { name: "قنا", latitude: 26.1642, longitude: 32.716 },
  { name: "بورسعيد", latitude: 31.2565, longitude: 32.2841 },
  { name: "دمياط", latitude: 31.4165, longitude: 31.8133 },
  { name: "الإسماعيلية", latitude: 30.5965, longitude: 32.2715 },
  { name: "السويس", latitude: 29.9737, longitude: 32.5263 },
  { name: "بني سويف", latitude: 28.4202, longitude: 30.7299 },
  { name: "الفيوم", latitude: 29.3088, longitude: 30.8428 },
  { name: "كفر الشيخ", latitude: 31.1118, longitude: 30.9396 },
  { name: "الغربية", latitude: 30.8753, longitude: 31.0335 },
  { name: "الشرقية", latitude: 30.7343, longitude: 31.7092 },
  { name: "الدقهلية", latitude: 31.0364, longitude: 31.3807 },
  { name: "البحيرة", latitude: 31.0368, longitude: 30.4661 },
  { name: "مطروح", latitude: 31.354, longitude: 27.2373 },
  { name: "شمال سيناء", latitude: 30.4176, longitude: 33.6647 },
  { name: "جنوب سيناء", latitude: 29.0414, longitude: 33.9545 },
];

// Function to calculate the distance between two points using Haversine's formula
function calculateDistance(lat1, lon1, lat2, lon2) {
  const toRadians = (degrees) => degrees * (Math.PI / 180);
  const R = 6371; // Earth's radius in kilometers

  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in kilometers
}

// Get user location
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const userLat = position.coords.latitude;
      const userLon = position.coords.longitude;

      // Find the nearest governorate
      let closestGovernorate = null;
      let minDistance = Infinity;

      egyptGovernorates.forEach((governorate) => {
        const distance = calculateDistance(
          userLat,
          userLon,
          governorate.latitude,
          governorate.longitude
        );
        if (distance < minDistance) {
          minDistance = distance;
          closestGovernorate = governorate.name;
        }
      });

      // Print the result
      if (closestGovernorate) {
        alert(`أنت تقريبا موجود في محافظة: ${closestGovernorate}`);
      } else {
        alert("تتعوض المره الجايه");
      }
    },
    (error) => {
      console.error("في مشكلة حصلت بسيطة هنحلها: ", error);
      alert("ممكن تسمحلي اعرف مكانك؟");
    }
  );
} else {
  alert("المتصفح لا يدعم تحديد الموقع الجغرافي.");
}
