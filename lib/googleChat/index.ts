const { googleChat } = env

const config = (text: string) => ({
	method: 'post' as GoogleAppsScript.URL_Fetch.HttpMethod,
	headers: {
		'Content-Type': 'application/json; charset=UTF-8',
	},
	payload: JSON.stringify({ text }),
})

type Prop = {
	text: string
}

/**
 * google chatにメッセージを送信する
 * @param {{text}} string メッセージテキスト
 */
function sendGoogleChat(prop: Prop = { text: 'Hello World!' }) {
	const { text } = prop

	if (googleChat) {
		const res = UrlFetchApp.fetch(googleChat, config(text))

		console.log('done')
	} else {
		throw new Error('google chatのwebhookが指定されていません')
	}
}
