i18n-node-sample
===

Using express.js

# Usage

```
npm install
```

```
npm start
```

```
// ja
curl http://localhost:3000/hello -H 'Accept-Language: ja,en'
// こんにちは World
```

```
// en
curl http://localhost:3000/hello -H 'Accept-Language: en,ja'
// Hello World
```

```
// ja
curl http://localhost:3000/api -H 'Accept-Language: ja,en'
// {"code":404,"message":"見つかりません"}
```

```
// en
curl http://localhost:3000/api -H 'Accept-Language: en,ja'
// {"code":404,"message":"Not Found"}
```

# Implementation

### message file
see `locales/en.json` and `locales/ja.json`

```json
{
	"hello": "Hello %s",
	"error": {
		"404": "Not Found",
		"500": "Internal Server Error"
	}
}
```

```json
{
    "hello": "こんにちは %s",
    "error": {
        "404": "見つかりません",
        "500": "サーバでエラーが発生しました"
    }
}
```

### i18n configure
see `app.js`

```js
var app = express();

const i18n = require('i18n');

i18n.configure({
  locales: ['en', 'ja'],
  directory: __dirname + '/locales'
})

app.use(i18n.init);
```

### fetching message
see `routes/hello.js` and `routes/api.js`

```js
router.get('/', (req, res, next) => {
    res.render('hello', {
        message: res.__('hello', 'World')
    })
})
```
