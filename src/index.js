import log from 'sme-log';
import Request from './http';
import { get } from './utils';

const ilog = log();
const request = new Request();

function alice(options) {
  if (!options) {
    options = {
      apiKey: 'c811407ed2664cf5b686daf11a12421f',
      userId: '317341'
    };
  }
  if (!options.marker) options.marker = '$';
  window[options.marker] = turing;

  function turing(template) {
    const text = template && template[0];
    if (!text) { yan(); return; }
    const params = {
      perception: {
        inputText: {
          text: text
        }
      },
      userInfo: {
        apiKey: options.apiKey,
        userId: options.userId
      }
    };
    const url = 'http://openapi.tuling123.com/openapi/api/v2';
    request
      .post(url, params, { 'content-type': 'application/json' })
      .then(resp => {
        const normal = '...';
        ilog(get(resp, 'results[0].values.text') || normal);
      })
  }
 
  function yan() {
    request.get('https://v1.hitokoto.cn/').then(resp => {
      ilog(`${resp.hitokoto}    ${resp.from ? '-- ' + resp.from : ''}`);
    });
  }

  turing.toString = turing.valueOf = () => {}
}

exports.default = alice;
module.exports = exports['default'];
