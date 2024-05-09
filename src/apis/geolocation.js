/**
 * https://www.npmjs.com/package/react-geocode
 * This sounds like a good option...maybe will implement later
 */

export async function getCoordinatesFromAddress(city, street) {
	const random = (min, max) => Math.random() * (max - min) + min;
	//NOTE: bounds according to this https://stackoverflow.com/a/13824556/22510505
	return { latitude: random(85, -85), longitude: random(180, -180) };
}
