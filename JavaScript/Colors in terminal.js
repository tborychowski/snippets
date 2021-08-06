export const blue = msg => '\x1B[34m' + msg + '\x1B[39m';
export const bold = msg => '\x1B[1m'  + msg + '\x1B[22m';
export const cyan = msg => '\x1B[36m' + msg + '\x1B[39m';
export const green = msg => '\x1B[32m' + msg + '\x1B[39m';
export const grey = msg => '\x1B[90m' + msg + '\x1B[39m';
export const magenta = msg => '\x1B[35m' + msg + '\x1B[39m';
export const red = msg => '\x1B[31m' + msg + '\x1B[39m';
export const yellow = msg => '\x1B[33m' + msg + '\x1B[39m';
export const white = msg => '\x1B[37m' + msg + '\x1B[39m';
export const underline = msg => '\x1B[4m' + msg + '\x1B[0m';

export const stripColors = str => str.toString().replace(/\\x1B\[\d+m/g, '');
export const beep = (times = 1) => { while (times--) process.stdout.write('\x07'); };
export const linkify = msg => underline(blue(msg));

