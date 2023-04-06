/**
 * GASではimport/export 非対応のため複数ファイルでの管理不可
 * どうしてもファイル分割したい場合はwebpack使う
 */

/**
 * my app
 */
const s = new ActiveSheet()

const main = () => {
	const val1 = s.getValue(1, 2)

	console.log(val1);

	const val2 = s.getValue("A3")

	console.log(val2);


}
