/**
 * シート名を指定して操作
 */
class Sheet {
	#ss: TypeApp = SpreadsheetApp.getActiveSpreadsheet()

	constructor(public name: string) {
		this.name = name
	}

	getSheet(): TypeSheet | null {
		return this.#ss.getSheetByName(this.name)
	}

	getValue(row: number, column: number): unknown {
		return this.getSheet()?.getRange(row, column)?.getValue()
	}

	getLastRow(): number | undefined {
		return this.getSheet()?.getLastRow()
	}

	getLastColumn(): number | undefined {
		return this.getSheet()?.getLastColumn()
	}

	setValue(row: number, column: number, value: any): void {
		this.getSheet()?.getRange(row, column)?.setValue(value)
	}
}

/**
 * アクティブシートの操作
 */
class ActiveSheet {
	#ss: TypeApp = SpreadsheetApp.getActiveSpreadsheet()

	getSheet(): TypeSheet {
		return this.#ss.getActiveSheet()
	}

	getSheetName(): string {
		return this.#ss.getActiveSheet().getName()
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