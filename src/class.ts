type TypeApp = GoogleAppsScript.Spreadsheet.Spreadsheet;
type TypeSheet = GoogleAppsScript.Spreadsheet.Sheet;
type TypeRange = GoogleAppsScript.Spreadsheet.Range;

class MyGas {
	#ss: TypeApp = SpreadsheetApp.getActiveSpreadsheet();

	constructor(public name: string) {}

	getSheet(): TypeSheet | null {
		return this.#ss.getSheetByName(this.name);
	}

	getRange(row: number, column: number): TypeRange | null {
		return this.getSheet()?.getRange(row, column) || null;
	}

	getValue(row: number, column: number): unknown {
		return this.getRange(row, column)?.getValue();
	}

	getLastRow(): number | null {
		return this.getSheet()?.getLastRow() || null;
	}

	getLastColumn(): number | null {
		return this.getSheet()?.getLastColumn() || null;
	}

	setValue(row: number, column: number, value: unknown): void {
		this.getRange(row, column)?.setValue(value);
	}
}
