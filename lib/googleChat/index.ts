const { googleChat } = env

type Prop = {
	text: string
}

const sendGoogleChat = (prop: Prop = { text: 'Hello World!' }) => {
	const { text } = prop

	const config = {
		method: 'post' as GoogleAppsScript.URL_Fetch.HttpMethod,
		headers: {
			'Content-Type': 'application/json; charset=UTF-8',
		},
		payload: JSON.stringify({ text }),
	}

	if (googleChat) {
		const res = UrlFetchApp.fetch(googleChat, config)

		console.log('done')
	} else {
		throw new Error('google chatのwebhookが指定されていません')
	}
}
