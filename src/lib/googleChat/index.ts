const env = {
	googleChat: PropertiesService.getScriptProperties().getProperty('GOOGLE_CHAT_WEBHOOK'),
}

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

	if (env.googleChat) {
		const res = UrlFetchApp.fetch(env.googleChat, config(text))

		console.log('done')
	} else {
		throw new Error('google chatのwebhookが指定されていません')
	}
}
