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

	getValue(row: number, column: number): any {
		return this.getSheet()?.getRange(row, column)?.getValue()
	}

	getValues(row: number, column: number): any[][] | undefined {
		return this.getSheet()?.getRange(row, column)?.getValues()
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
