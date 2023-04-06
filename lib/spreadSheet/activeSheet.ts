/**
 * アクティブシートの操作
 */
class ActiveSheet {
	ss: TypeApp = SpreadsheetApp.getActiveSpreadsheet()

	getSheet(): TypeSheet {
		return this.ss.getActiveSheet()
	}

	getSheetName(): string {
		return this.ss.getActiveSheet().getName()
	}

	getValue(row: number, column: number): unknown {
		return this.getSheet().getRange(row, column)?.getValue()
	}

	getLastRow(): number {
		return this.getSheet().getLastRow()
	}

	getLastColumn(): number {
		return this.getSheet().getLastColumn()
	}

	setValue(row: number, column: number, value: any): void {
		this.getSheet().getRange(row, column).setValue(value)
	}
}
