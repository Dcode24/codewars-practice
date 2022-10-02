// Parameters - an integer that is non-negative indicating a count of seconds,
// which are the basic unit on our clock. The max number of seconds will be 359999 or less
// Returns - a clock value containing hours, minutes, seconds,
// with the specific format of HH:MM:SS, with values 9 and below
// having a leading zero
// Examples
// (humanReadable(0), '00:00:00', 'humanReadable(0)');
// (humanReadable(59), '00:00:59', 'humanReadable(59)');
// (humanReadable(60), '00:01:00', 'humanReadable(60)');
// (humanReadable(90), '00:01:30', 'humanReadable(90)');
// (humanReadable(3599), '00:59:59', 'humanReadable(3599)');
// (humanReadable(3600), '01:00:00', 'humanReadable(3600)');
// (humanReadable(45296), '12:34:56', 'humanReadable(45296)');
// (humanReadable(86399), '23:59:59', 'humanReadable(86399)');
// (humanReadable(86400), '24:00:00', 'humanReadable(86400)');
// (humanReadable(359999), '99:59:59', 'humanReadable(359999)');

// Pseducode - Take in integer and divide by 60 the appropriate amount of times
// and assign the result to hours, minutes, and seconds. Pad leading zeros where needed, and print hours, minutes, seconds
// with a colon between them.

function humanReadable(seconds) {
  let hours = Math.floor(seconds / 3600);
  seconds = seconds - hours * 3600;
  hours = hours.toString().padStart(2, '0');
  let minutes = Math.floor(seconds / 60);
  seconds = (seconds - minutes * 60).toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');
  console.log(`${hours}:${minutes}:${seconds}`);
}
humanReadable(45296);
