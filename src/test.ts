/**
 * GASではimport/export 非対応のため複数ファイルでの管理不可
 * どうしてもファイル分割したい場合はwebpack使う
 */

/**
 * my app
 */
const s = new ActiveSheet()

const main = () => {
	s.setValue(1, 1, 'test')

}
