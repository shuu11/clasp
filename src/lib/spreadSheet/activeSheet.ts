/**
 * アクティブシートの操作
 */
type activeSheet = {
	getSheet(): TypeSheet
	getSheetName(): string
	getValue(...args: any): any
	getValues(row: number, column: number): any[][]
	getLastRow(): number
	getLastColumn(): number
	setValue(row: number, column: number, value: any): void
}

class ActiveSheet implements activeSheet {
	#ss: TypeApp = SpreadsheetApp.getActiveSpreadsheet()

	getSheet(): TypeSheet {
		return this.#ss.getActiveSheet()
	}

	getSheetName(): string {
		return this.#ss.getActiveSheet().getName()
	}

	getValue(...args: any): any {
		switch (args.length) {
			case 2:
				let row = args[0]
				let column = args[1]
				return this.#ss.getActiveSheet().getRange(row, column).getValue()
				break

			case 1:
				if (typeof args[0] === 'string') {
					let a1Notation = args[0]
					return this.#ss.getActiveSheet().getRange(a1Notation).getValue()
				} else {
					throw new Error('Invalid arguments.')
				}
				break

			default:
				throw new Error('Invalid arguments.')
				break
		}
	}

	getValues(row: number, column: number): any[][] {
		return this.#ss.getActiveSheet().getRange(row, column)?.getValues()
	}

	getLastRow(): number {
		return this.#ss.getActiveSheet().getLastRow()
	}

	getLastColumn(): number {
		return this.#ss.getActiveSheet().getLastColumn()
	}

	setValue(row: number, column: number, value: any): void {
		this.#ss.getActiveSheet().getRange(row, column).setValue(value)
	}
}
