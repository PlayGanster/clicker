export function cutNumber(num: any) {
	if (num < 1000) {
			return num;
	}
	num = num.toString().replace(/[^0-9.]/g, '');
	let si = [
		{v: 1E3, s: "К"},
		{v: 1E6, s: "M"},
		{v: 1E9, s: "B"},
		{v: 1E12, s: "T"},
		{v: 1E15, s: "P"},
		{v: 1E18, s: "E"}
		];
	let index;
	for (index = si.length - 1; index > 0; index--) {
			if (num >= si[index].v) {
					break;
			}
	}
	return (num / si[index].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[index].s;
}