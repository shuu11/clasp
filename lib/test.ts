/**
 * GASではimport/export 非対応のため複数ファイルでの管理不可
 * どうしてもファイル分割したい場合はwebpack使う
 */

/**
 * my app
 */
const sheet = new ActiveSheet()
const sheetName = sheet.getSheetName()

const main = () => {
	console.log(sheetName)
}
