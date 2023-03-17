/**
 * GASではimport/export 非対応のため複数ファイルでの管理不可
 * どうしてもファイル分割したい場合はwebpack使う
 */

/**
 * my app
 */
const myGas = new MyGas('シート1');
const endRow = myGas.getLastRow();
const endColumn = myGas.getLastColumn();

function main() {
	console.log(endColumn, endRow);
}
