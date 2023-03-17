/**
 * GASではimport/export 非対応のため複数ファイルでの管理不可
 * どうしてもファイル分割したい場合はwebpack使う
 */

type App = GoogleAppsScript.Spreadsheet.Spreadsheet;
type Sheet = GoogleAppsScript.Spreadsheet.Sheet;
type Range = GoogleAppsScript.Spreadsheet.Range;

export default class MyGas {
	#ss: App = SpreadsheetApp.getActiveSpreadsheet();

	constructor(public name: string) {}

	#getSheet(): Sheet | null {
		return this.#ss.getSheetByName(this.name);
	}

	#getRange(row: number, column: number): Range | null {
		return this.#getSheet()?.getRange(row, column) || null;
	}

	getValue(row: number, column: number): unknown {
		return this.#getRange(row, column)?.getValue();
	}

	getLastRow(): number | null {
		return this.#getSheet()?.getLastRow() || null;
	}

	getLastColumn(): number | null {
		return this.#getSheet()?.getLastColumn() || null;
	}

	setValue(row: number, column: number, value: unknown): void {
		this.#getRange(row, column)?.setValue(value);
	}
}

/**
 * my app
 */
const myGas = new MyGas('シート1');
const endRow = myGas.getLastRow();
const endColumn = myGas.getLastColumn();

function main() {
	console.log(endRow, endColumn);
}
