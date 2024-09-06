//Fri Sep 06 2024 14:05:40 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x49dfef = _0x5370a4("电信营业厅"),
  _0x8e0885 = require("got"),
  _0x203c4a = require("path"),
  {
    exec: _0x3898d1
  } = require("child_process"),
  {
    CookieJar: _0x4f58d7
  } = require("tough-cookie"),
  _0x5336b3 = require("fs"),
  _0x5e650c = require("crypto-js"),
  _0x22f09c = "chinaTelecom",
  _0x1876a7 = /[\n\&\@]/,
  _0x4aec53 = [_0x22f09c + "Account"],
  _0x128624 = 30000,
  _0x5a04a9 = 3,
  _0x1736e2 = _0x22f09c + "Rpc",
  _0x16d3ea = process.env[_0x1736e2],
  _0xf4231c = 6.02,
  _0x14f289 = "chinaTelecom",
  _0x100b57 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x344953 = "JinDouMall";
let _0x1d3d6d = {};
const _0x5370da = "./chinaTelecom_cache.json",
  _0x3ed712 = "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
  _0x75a069 = "34d7cb0bcdf07523",
  _0x2304b1 = "1234567`90koiuyhgtfrdewsaqaqsqde",
  _0x1110eb = "\0\0\0\0\0\0\0\0",
  _0x3c561e = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBkLT15ThVgz6/NOl6s8GNPofdWzWbCkWnkaAm7O2LjkM1H7dMvzkiqdxU02jamGRHLX/ZNMCXHnPcW/sDhiFCBN18qFvy8g6VYb9QtroI09e176s+ZCtiv7hbin2cCTj99iUpnEloZm19lwHyo69u5UMiPMpq0/XKBO8lYhN/gwIDAQAB",
  _0x1e9565 = "-----BEGIN PUBLIC KEY-----\n" + _0x3c561e + "\n-----END PUBLIC KEY-----",
  _0x516f15 = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+ugG5A8cZ3FqUKDwM57GM4io6JGcStivT8UdGt67PEOihLZTw3P7371+N47PrmsCpnTRzbTgcupKtUv8ImZalYk65dU8rjC/ridwhw9ffW2LBwvkEnDkkKKRi2liWIItDftJVBiWOh17o6gfbPoNrWORcAdcbpk2L+udld5kZNwIDAQAB",
  _0x4995b7 = "-----BEGIN PUBLIC KEY-----\n" + _0x516f15 + "\n-----END PUBLIC KEY-----",
  _0x51cf70 = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDIPOHtjs6p4sTlpFvrx+ESsYkEvyT4JB/dcEbU6C8+yclpcmWEvwZFymqlKQq89laSH4IxUsPJHKIOiYAMzNibhED1swzecH5XLKEAJclopJqoO95o8W63Euq6K+AKMzyZt1SEqtZ0mXsN8UPnuN/5aoB3kbPLYpfEwBbhto6yrwIDAQAB",
  _0x2e5ddf = "-----BEGIN PUBLIC KEY-----\n" + _0x51cf70 + "\n-----END PUBLIC KEY-----",
  _0xc38e90 = require("node-rsa");
let _0x13a631 = new _0xc38e90(_0x1e9565);
const _0x1d3cd2 = {
  encryptionScheme: "pkcs1"
};
_0x13a631.setOptions(_0x1d3cd2);
let _0x47bb4b = new _0xc38e90(_0x4995b7);
const _0x502fab = {
  encryptionScheme: "pkcs1"
};
_0x47bb4b.setOptions(_0x502fab);
let _0x5b4189 = new _0xc38e90(_0x2e5ddf);
const _0x520bc9 = {
  encryptionScheme: "pkcs1"
};
_0x5b4189.setOptions(_0x520bc9);
const _0x131d2d = [202201, 202202, 202203],
  _0x3c685e = 5;
function _0x1519a6(_0x569c99, _0x3f12f9, _0x1dcb00, _0x2d39bd, _0x27d176, _0x322de1) {
  return _0x5e650c[_0x569c99].encrypt(_0x5e650c.enc.Utf8.parse(_0x2d39bd), _0x5e650c.enc.Utf8.parse(_0x27d176), {
    mode: _0x5e650c.mode[_0x3f12f9],
    padding: _0x5e650c.pad[_0x1dcb00],
    iv: _0x5e650c.enc.Utf8.parse(_0x322de1)
  }).ciphertext.toString(_0x5e650c.enc.Hex);
}
function _0x436a1e(_0x4bdf2f, _0x49842f, _0x4635ea, _0x5cc4a8, _0x13f6ca, _0x5d0c53) {
  return _0x5e650c[_0x4bdf2f].decrypt({
    ciphertext: _0x5e650c.enc.Hex.parse(_0x5cc4a8)
  }, _0x5e650c.enc.Utf8.parse(_0x13f6ca), {
    mode: _0x5e650c.mode[_0x49842f],
    padding: _0x5e650c.pad[_0x4635ea],
    iv: _0x5e650c.enc.Utf8.parse(_0x5d0c53)
  }).toString(_0x5e650c.enc.Utf8);
}
function _0x4e4355() {
  try {
    _0x5336b3.writeFileSync(_0x5370da, JSON.stringify(_0x1d3d6d, null, 4), "utf-8");
  } catch (_0x337460) {
    console.log("保存缓存出错");
  }
}
function _0xa0ff1b() {
  try {
    _0x1d3d6d = JSON.parse(_0x5336b3.readFileSync(_0x5370da, "utf-8"));
  } catch (_0x5e128b) {
    console.log("读取缓存出错, 新建一个token缓存");
    _0x4e4355();
  }
}
let _0x300c8e = 0,
  _0xdb6efe = 0;
function _0x11cae0() {
  _0xdb6efe = 1;
  process.on("SIGTERM", () => {
    _0xdb6efe = 2;
    process.exit(0);
  });
  const _0x5a30e9 = _0x203c4a.basename(process.argv[1]),
    _0x2c8516 = ["bash", "timeout", "grep"];
  let _0x278610 = ["ps afx"];
  _0x278610.push("grep " + _0x5a30e9);
  _0x278610 = _0x278610.concat(_0x2c8516.map(_0x2b4ed6 => "grep -v \"" + _0x2b4ed6 + " \""));
  _0x278610.push("wc -l");
  const _0x2dab27 = _0x278610.join("|"),
    _0x4ac1b8 = () => {
      _0x3898d1(_0x2dab27, (_0x42128b, _0x5c47b6, _0x14cab1) => {
        if (_0x42128b || _0x14cab1) {
          return;
        }
        _0x300c8e = parseInt(_0x5c47b6.trim(), 10);
      });
      _0xdb6efe == 1 && setTimeout(_0x4ac1b8, 2000);
    };
  _0x4ac1b8();
}
class _0x9d1851 {
  constructor() {
    this.index = _0x49dfef.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x197551 = {
      limit: 0
    };
    const _0x3807ff = {
      Connection: "keep-alive"
    };
    const _0x5f0880 = {
      retry: _0x197551,
      timeout: _0x128624,
      followRedirect: false,
      ignoreInvalidCookies: true,
      headers: _0x3807ff
    };
    this.got = _0x8e0885.extend(_0x5f0880);
    _0xdb6efe == 0 && _0x11cae0();
  }
  log(_0x5e9538, _0x2805cd = {}) {
    var _0x54ff64 = "",
      _0x222e39 = _0x49dfef.userCount.toString().length;
    if (this.index) {
      _0x54ff64 += "账号[" + _0x49dfef.padStr(this.index, _0x222e39) + "]";
    }
    if (this.name) {
      _0x54ff64 += "[" + this.name + "]";
    }
    _0x49dfef.log(_0x54ff64 + _0x5e9538, _0x2805cd);
  }
  set_cookie(_0x33ecdc, _0x58c22c, _0x1c9b08, _0x14c6f2, _0x4d9f14 = {}) {
    this.cookieJar.setCookieSync(_0x33ecdc + "=" + _0x58c22c + "; Domain=" + _0x1c9b08 + ";", "" + _0x14c6f2);
  }
  async check() {
    const _0xd1893e = {
      fn: "",
      method: "get",
      url: "https://xc58.tk/dxyyt.json"
    };
    let {
      result: _0x4e8697,
      statusCode: _0x5d672a
    } = await this.request(_0xd1893e);
    const _0x4f7423 = _0x4e8697.deadline;
    _0x4f7423 < new Date().getTime() && (await _0x49dfef.wait(60000), process.exit(0));
  }
  async request(_0xc771d5) {
    let _0x28186d = null,
      _0x45eb58 = _0xc771d5.fn || _0xc771d5.url;
    _0x45eb58 = "";
    _0xc771d5.method = _0xc771d5?.["method"]?.["toUpperCase"]() || "GET";
    let _0xb95e71 = "",
      _0x28002f = 0,
      _0x2c0347 = false;
    while (_0x28002f < _0x5a04a9) {
      _0x28002f++;
      await this.got(_0xc771d5).then(_0x3118a2 => {
        _0x28186d = _0x3118a2;
        _0x2c0347 = true;
      }, _0x69e2e9 => {
        _0x28186d = _0x69e2e9.response;
        _0xb95e71 = _0x69e2e9?.["code"] || "";
      });
      if (_0x2c0347) {
        break;
      }
      this.log(_0x45eb58 + "请求出错，重试第" + _0x28002f + "次");
      await _0x49dfef.wait(3000);
    }
    const _0xed583 = {
      statusCode: _0xb95e71 || -1,
      headers: null,
      result: null
    };
    if (_0x28186d == null) {
      return Promise.resolve(_0xed583);
    }
    let {
      statusCode: _0x4bf446,
      headers: _0x1f05cc,
      body: _0x3c556a
    } = _0x28186d;
    if (_0x3c556a) {
      try {
        _0x3c556a = JSON.parse(_0x3c556a);
      } catch {}
    }
    const _0x427d9e = {
      statusCode: _0x4bf446,
      headers: _0x1f05cc,
      result: _0x3c556a
    };
    return Promise.resolve(_0x427d9e);
  }
}
let _0x280825 = _0x9d1851;
try {
  let _0x236d58 = require("./LocalBasic");
  _0x280825 = _0x236d58;
} catch {}
let _0x3b1630 = new _0x280825(_0x49dfef);
class _0x3f433d extends _0x280825 {
  constructor(_0x3dc0ff) {
    super(_0x49dfef);
    let _0x31f5d9 = _0x3dc0ff.split("#");
    this.name = _0x31f5d9[0];
    this.passwd = _0x31f5d9?.[1] || "";
    this.uuid = [_0x49dfef.randomPattern("xxxxxxxx"), _0x49dfef.randomPattern("xxxx"), _0x49dfef.randomPattern("4xxx"), _0x49dfef.randomPattern("xxxx"), _0x49dfef.randomPattern("xxxxxxxxxxxx")];
    this.cookieJar = new _0x4f58d7();
    this.can_feed = true;
    this.jml_tokenFlag = "";
    this.mall_token = "";
    const _0x60d108 = {
      Connection: "keep-alive",
      "User-Agent": _0x3ed712
    };
    this.got = this.got.extend({
      cookieJar: this.cookieJar,
      headers: _0x60d108
    });
  }
  load_token() {
    let _0x1b810f = false;
    _0x1d3d6d[this.name] && (this.userId = _0x1d3d6d[this.name].userId, this.token = _0x1d3d6d[this.name].token, this.log("读取到缓存token"), _0x1b810f = true);
    return _0x1b810f;
  }
  encode_phone() {
    let _0x3e4394 = this.name.split("");
    for (let _0x21a65d in _0x3e4394) {
      _0x3e4394[_0x21a65d] = String.fromCharCode(_0x3e4394[_0x21a65d].charCodeAt(0) + 2);
    }
    return _0x3e4394.join("");
  }
  encode_aes(_0x692d82) {
    return _0x1519a6("AES", "ECB", "Pkcs7", _0x692d82, _0x75a069, 0);
  }
  get_mall_headers() {
    return {
      "Content-Type": "application/json;charset=utf-8",
      Accept: "application/json, text/javascript, */*; q=0.01",
      Authorization: this.mall_token ? "Bearer " + this.mall_token : "",
      "X-Requested-With": "XMLHttpRequest"
    };
  }
  async login(_0x46d819 = {}) {
    let _0x5e2a4a = false;
    try {
      let _0x13c706 = _0x49dfef.time("yyyyMMddhhmmss"),
        _0x24ff36 = "iPhone 14 15.4." + this.uuid.slice(0, 2).join("") + this.name + _0x13c706 + this.passwd + "0$$$0.",
        _0x98e02 = {
          fn: "login",
          method: "post",
          url: "https://appgologin.189.cn:9031/login/client/userLoginNormal",
          json: {
            headerInfos: {
              code: "userLoginNormal",
              timestamp: _0x13c706,
              broadAccount: "",
              broadToken: "",
              clientType: "#9.6.1#channel50#iPhone 14 Pro Max#",
              shopId: "20002",
              source: "110003",
              sourcePassword: "Sid98s",
              token: "",
              userLoginName: this.name
            },
            content: {
              attach: "test",
              fieldData: {
                loginType: "4",
                accountType: "",
                loginAuthCipherAsymmertric: _0x13a631.encrypt(_0x24ff36, "base64"),
                deviceUid: this.uuid.slice(0, 3).join(""),
                phoneNum: this.encode_phone(),
                isChinatelecom: "0",
                systemVersion: "15.4.0",
                authentication: this.passwd
              }
            }
          }
        },
        {
          result: _0x577ebe,
          statusCode: _0x3e8aff
        } = await this.request(_0x98e02),
        _0x4c8d02 = _0x49dfef.get(_0x577ebe?.["responseData"], "resultCode", -1);
      if (_0x4c8d02 == "0000") {
        let {
          userId = "",
          token = ""
        } = _0x577ebe?.["responseData"]?.["data"]?.["loginSuccessResult"] || {};
        this.userId = userId;
        this.token = token;
        this.log("使用服务密码登录成功");
        _0x1d3d6d[this.name] = {
          token: token,
          userId: userId,
          t: Date.now()
        };
        _0x4e4355();
        _0x5e2a4a = true;
      } else {
        let _0x1fd3de = _0x577ebe?.["msg"] || _0x577ebe?.["responseData"]?.["resultDesc"] || _0x577ebe?.["headerInfos"]?.["reason"] || "";
        this.log("服务密码登录失败[" + _0x4c8d02 + "]: " + _0x1fd3de);
      }
    } catch (_0x2bf495) {
      console.log(_0x2bf495);
    } finally {
      return _0x5e2a4a;
    }
  }
  async get_ticket(_0x3267b5 = {}) {
    let _0x172b79 = "";
    try {
      let _0x178be6 = "\n            <Request>\n                <HeaderInfos>\n                    <Code>getSingle</Code>\n                    <Timestamp>" + _0x49dfef.time("yyyyMMddhhmmss") + "</Timestamp>\n                    <BroadAccount></BroadAccount>\n                    <BroadToken></BroadToken>\n                    <ClientType>#9.6.1#channel50#iPhone 14 Pro Max#</ClientType>\n                    <ShopId>20002</ShopId>\n                    <Source>110003</Source>\n                    <SourcePassword>Sid98s</SourcePassword>\n                    <Token>" + this.token + "</Token>\n                    <UserLoginName>" + this.name + "</UserLoginName>\n                </HeaderInfos>\n                <Content>\n                    <Attach>test</Attach>\n                    <FieldData>\n                        <TargetId>" + _0x1519a6("TripleDES", "CBC", "Pkcs7", this.userId, _0x2304b1, _0x1110eb) + "</TargetId>\n                        <Url>4a6862274835b451</Url>\n                    </FieldData>\n                </Content>\n            </Request>";
      const _0x21fd64 = {
        fn: "get_ticket",
        method: "post",
        url: "https://appgologin.189.cn:9031/map/clientXML",
        body: _0x178be6
      };
      await this.check();
      let {
        result: _0x2a28c2,
        statusCode: _0x3dbec1
      } = await this.request(_0x21fd64);
      if (_0x2a28c2) {
        let _0x361a49 = _0x2a28c2.match(/\<Ticket\>(\w+)\<\/Ticket\>/);
        if (_0x361a49) {
          let _0x13d3bc = _0x361a49[1];
          _0x172b79 = _0x436a1e("TripleDES", "CBC", "Pkcs7", _0x13d3bc, _0x2304b1, _0x1110eb);
          this.ticket = _0x172b79;
        }
      }
      !_0x172b79 && (!_0x3267b5.retry && (await this.login()) ? (_0x3267b5.retry = true, _0x172b79 = await this.get_ticket(_0x3267b5)) : (this.log("没有获取到ticket[" + _0x3dbec1 + "]: "), _0x2a28c2 && this.log(": " + JSON.stringify(_0x2a28c2))));
    } catch (_0x3989b8) {
      console.log(_0x3989b8);
    } finally {
      return _0x172b79;
    }
  }
  async get_sign(_0x5cf5f5 = {}) {
    let _0x4f014d = false;
    try {
      const _0xfe7ba6 = {
        ticket: this.ticket
      };
      const _0x2c176f = {
        fn: "login",
        method: "get",
        url: "https://wapside.189.cn:9001/jt-sign/ssoHomLogin",
        searchParams: _0xfe7ba6
      };
      await this.check();
      let {
          result: _0x5cda62,
          statusCode: _0x50fcf3
        } = await this.request(_0x2c176f),
        _0x14daa4 = _0x49dfef.get(_0x5cda62, "resoultCode", _0x50fcf3);
      _0x14daa4 == 0 ? (_0x4f014d = _0x5cda62?.["sign"], this.sign = _0x4f014d, this.got = this.got.extend({
        headers: {
          sign: this.sign
        }
      })) : this.log("获取sign失败[" + _0x14daa4 + "]: " + _0x5cda62);
    } catch (_0x3bb107) {
      console.log(_0x3bb107);
    } finally {
      return _0x4f014d;
    }
  }
  encrypt_para(_0x48f352) {
    let _0x176602 = typeof _0x48f352 == "string" ? _0x48f352 : JSON.stringify(_0x48f352);
    return _0x47bb4b.encrypt(_0x176602, "hex");
  }
  async userCoinInfo(_0x40a420 = false, _0x194fbc = {}) {
    try {
      const _0x4ebabc = {
        phone: this.name
      };
      let _0x4d3bc4 = {
          fn: "userCoinInfo",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/api/home/userCoinInfo",
          json: {
            para: this.encrypt_para(_0x4ebabc)
          }
        },
        {
          result: _0x6e1ccd,
          statusCode: _0x279bbe
        } = await this.request(_0x4d3bc4),
        _0x26b82e = _0x49dfef.get(_0x6e1ccd, "resoultCode", _0x279bbe);
      if (_0x26b82e == 0) {
        this.coin = _0x6e1ccd?.["totalCoin"] || 0;
        if (_0x40a420) {
          const _0x51db52 = {
            notify: true
          };
          this.log("金豆余额: " + this.coin, _0x51db52);
          if (_0x6e1ccd.amountEx) {
            let _0x443a7d = _0x49dfef.time("yyyy-MM-dd", _0x6e1ccd.expireDate);
            const _0x3f5be6 = {
              notify: true
            };
            _0x49dfef.log("-- [" + _0x443a7d + "]将过期" + _0x6e1ccd.amountEx + "金豆", _0x3f5be6);
          }
        }
      } else {
        let _0x3cad48 = _0x6e1ccd?.["msg"] || _0x6e1ccd?.["resoultMsg"] || _0x6e1ccd?.["error"] || "";
        this.log("查询账户金豆余额错误[" + _0x26b82e + "]: " + _0x3cad48);
      }
    } catch (_0x4aa696) {
      console.log(_0x4aa696);
    }
  }
  async userStatusInfo(_0x5cc6a4 = {}) {
    try {
      const _0x257016 = {
        phone: this.name
      };
      let _0xf6d605 = {
        fn: "userStatusInfo",
        method: "post",
        url: "https://wapside.189.cn:9001/jt-sign/api/home/userStatusInfo",
        json: {
          para: this.encrypt_para(_0x257016)
        }
      };
      {
        let {
            result: _0x4db32f,
            statusCode: _0x15b242
          } = await this.request(_0x49dfef.copy(_0xf6d605)),
          _0xa3da92 = _0x49dfef.get(_0x4db32f, "resoultCode", _0x15b242);
        if (_0xa3da92 == 0) {
          let {
            isSign: _0x5b1973
          } = _0x4db32f?.["data"];
          _0x5b1973 ? this.log("今天已签到") : await this.doSign();
        } else {
          let _0xfe2a59 = _0x4db32f?.["msg"] || _0x4db32f?.["resoultMsg"] || _0x4db32f?.["error"] || "";
          this.log("查询账户签到状态错误[" + _0xa3da92 + "]: " + _0xfe2a59);
        }
      }
      {
        let {
            result: _0xcbe11e,
            statusCode: _0x1fd8fd
          } = await this.request(_0x49dfef.copy(_0xf6d605)),
          _0x151fba = _0x49dfef.get(_0xcbe11e, "resoultCode", _0x1fd8fd);
        if (_0x151fba == 0) {
          let {
            continuousDay: _0x17e0b2,
            signDay: _0xd59b14,
            isSeven: _0x6f58c7
          } = _0xcbe11e?.["data"];
          this.log("已签到" + _0xd59b14 + "天, 连签" + _0x17e0b2 + "天");
          _0x6f58c7 && (await this.exchangePrize());
        } else {
          let _0x291e04 = _0xcbe11e?.["msg"] || _0xcbe11e?.["resoultMsg"] || _0xcbe11e?.["error"] || "";
          this.log("查询账户签到状态错误[" + _0x151fba + "]: " + _0x291e04);
        }
      }
    } catch (_0x5c554d) {
      console.log(_0x5c554d);
    }
  }
  async continueSignDays(_0x329be9 = {}) {
    try {
      const _0x5c0237 = {
        phone: this.name
      };
      let _0x5810c7 = {
          fn: "continueSignDays",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/webSign/continueSignDays",
          json: {
            para: this.encrypt_para(_0x5c0237)
          }
        },
        {
          result: _0x5c2cbc,
          statusCode: _0x3ca254
        } = await this.request(_0x5810c7),
        _0x36acda = _0x49dfef.get(_0x5c2cbc, "resoultCode", _0x3ca254);
      if (_0x36acda == 0) {
        this.log("抽奖连签天数: " + (_0x5c2cbc?.["continueSignDays"] || 0) + "天");
        if (_0x5c2cbc?.["continueSignDays"] == 15) {
          const _0x177d41 = {
            type: "15"
          };
          await this.exchangePrize(_0x177d41);
        } else {
          if (_0x5c2cbc?.["continueSignDays"] == 28) {
            const _0x451b36 = {
              type: "28"
            };
            await this.exchangePrize(_0x451b36);
          }
        }
      } else {
        let _0x563ea7 = _0x5c2cbc?.["msg"] || _0x5c2cbc?.["resoultMsg"] || _0x5c2cbc?.["error"] || "";
        this.log("查询抽奖连签天数错误[" + _0x36acda + "]: " + _0x563ea7);
      }
    } catch (_0x481407) {
      console.log(_0x481407);
    }
  }
  async continueSignRecords(_0x451d00 = {}) {
    try {
      const _0x5173fd = {
        phone: this.name
      };
      let _0x4309b3 = {
          fn: "continueSignRecords",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/webSign/continueSignRecords",
          json: {
            para: this.encrypt_para(_0x5173fd)
          }
        },
        {
          result: _0x399df4,
          statusCode: _0x5f017e
        } = await this.request(_0x4309b3),
        _0x2f02c9 = _0x49dfef.get(_0x399df4, "resoultCode", _0x5f017e);
      if (_0x2f02c9 == 0) {
        if (_0x399df4?.["continue15List"]?.["length"]) {
          const _0x3fbdb7 = {
            type: "15"
          };
          await this.exchangePrize(_0x3fbdb7);
        }
        if (_0x399df4?.["continue28List"]?.["length"]) {
          const _0x378cea = {
            type: "28"
          };
          await this.exchangePrize(_0x378cea);
        }
      } else {
        let _0x23328f = _0x399df4?.["msg"] || _0x399df4?.["resoultMsg"] || _0x399df4?.["error"] || "";
        this.log("查询连签抽奖状态错误[" + _0x2f02c9 + "]: " + _0x23328f);
      }
    } catch (_0x2ed412) {
      console.log(_0x2ed412);
    }
  }
  async doSign(_0x38e321 = {}) {
    try {
      let _0x400e33 = {
          phone: this.name,
          date: Date.now(),
          sysType: "20002"
        },
        _0x2d4568 = {
          fn: "doSign",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/webSign/sign",
          json: {
            encode: this.encode_aes(JSON.stringify(_0x400e33))
          }
        },
        {
          result: _0x26b804,
          statusCode: _0x55dc04
        } = await this.request(_0x2d4568),
        _0xd63ec1 = _0x49dfef.get(_0x26b804, "resoultCode", _0x55dc04);
      if (_0xd63ec1 == 0) {
        let _0x10fa2e = _0x49dfef.get(_0x26b804?.["data"], "code", -1);
        if (_0x10fa2e == 1) {
          const _0x51344b = {
            notify: true
          };
          this.log("签到成功，获得" + (_0x26b804?.["data"]?.["coin"] || 0) + "金豆", _0x51344b);
          await this.userStatusInfo();
        } else {
          const _0x12c8dd = {
            notify: true
          };
          this.log("签到失败[" + _0x10fa2e + "]: " + _0x26b804.data.msg, _0x12c8dd);
        }
      } else {
        let _0x28528c = _0x26b804?.["msg"] || _0x26b804?.["resoultMsg"] || _0x26b804?.["error"] || "";
        this.log("签到错误[" + _0xd63ec1 + "]: " + _0x28528c);
      }
    } catch (_0xe19e2c) {
      console.log(_0xe19e2c);
    }
  }
  async exchangePrize(_0x314f56 = {}) {
    try {
      let _0x2b9338 = _0x49dfef.pop(_0x314f56, "type", "7");
      const _0x18a4cd = {
        phone: this.name,
        type: _0x2b9338
      };
      let _0x3a48c9 = {
          fn: "exchangePrize",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/webSign/exchangePrize",
          json: {
            para: this.encrypt_para(_0x18a4cd)
          }
        },
        {
          result: _0x9f03b4,
          statusCode: _0x4e723
        } = await this.request(_0x3a48c9),
        _0xfdc89e = _0x49dfef.get(_0x9f03b4, "resoultCode", _0x4e723);
      if (_0xfdc89e == 0) {
        let _0x1f30a9 = _0x49dfef.get(_0x9f03b4?.["prizeDetail"], "code", -1);
        if (_0x1f30a9 == 0) {
          const _0x44d831 = {
            notify: true
          };
          this.log("连签" + _0x2b9338 + "天抽奖: " + _0x9f03b4?.["prizeDetail"]?.["biz"]?.["winTitle"], _0x44d831);
        } else {
          let _0x19cdea = _0x9f03b4?.["prizeDetail"]?.["err"] || "";
          const _0x2729db = {
            notify: true
          };
          this.log("连签" + _0x2b9338 + "天抽奖失败[" + _0x1f30a9 + "]: " + _0x19cdea, _0x2729db);
        }
      } else {
        let _0x48871d = _0x9f03b4?.["msg"] || _0x9f03b4?.["resoultMsg"] || _0x9f03b4?.["error"] || "";
        this.log("连签" + _0x2b9338 + "天抽奖错误[" + _0xfdc89e + "]: " + _0x48871d);
      }
    } catch (_0x544bb9) {
      console.log(_0x544bb9);
    }
  }
  async homepage(_0x3c514d, _0x21b99b = {}) {
    try {
      const _0x65e0c0 = {
        phone: this.name,
        shopId: "20001",
        type: _0x3c514d
      };
      let _0x15a655 = {
          fn: "homepage",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/webSign/homepage",
          json: {
            para: this.encrypt_para(_0x65e0c0)
          }
        },
        {
          result: _0x42cc35,
          statusCode: _0x54434d
        } = await this.request(_0x15a655),
        _0x451a8c = _0x49dfef.get(_0x42cc35, "resoultCode", _0x54434d);
      if (_0x451a8c == 0) {
        let _0x18bcf7 = _0x49dfef.get(_0x42cc35?.["data"]?.["head"], "code", -1);
        if (_0x18bcf7 == 0) {
          for (let _0x767742 of _0x42cc35?.["data"]?.["biz"]?.["adItems"] || []) {
            if (["0", "1"].includes(_0x767742?.["taskState"])) {
              switch (_0x767742.contentOne) {
                case "3":
                  {
                    _0x767742?.["rewardId"] && (await this.receiveReward(_0x767742));
                    break;
                  }
                case "5":
                  {
                    await this.openMsg(_0x767742);
                    break;
                  }
                case "6":
                  {
                    await this.sharingGetGold();
                    break;
                  }
                case "10":
                case "13":
                  {
                    if (!this.xtoken) {
                      await this.get_usercode();
                    }
                    this.xtoken && (await this.watchLiveInit());
                    break;
                  }
                case "18":
                  {
                    await this.polymerize(_0x767742);
                    break;
                  }
                default:
                  {
                    break;
                  }
              }
            }
          }
        } else {
          let _0x42e087 = _0x42cc35?.["data"]?.["head"]?.["err"] || "";
          this.log("获取任务列表失败[" + _0x18bcf7 + "]: " + _0x42e087);
        }
      } else {
        this.log("获取任务列表错误[" + _0x451a8c + "]");
      }
    } catch (_0x22f630) {
      console.log(_0x22f630);
    }
  }
  async receiveReward(_0x5eb9b1, _0xa59cd6 = {}) {
    try {
      let _0x24b8bd = _0x5eb9b1?.["title"]?.["split"](" ")?.[0];
      const _0x2975b4 = {
        phone: this.name,
        rewardId: _0x5eb9b1?.["rewardId"] || ""
      };
      let _0x571ad5 = {
          fn: "receiveReward",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/receiveReward",
          json: {
            para: this.encrypt_para(_0x2975b4)
          }
        },
        {
          result: _0x1d91a4,
          statusCode: _0x247ac8
        } = await this.request(_0x571ad5),
        _0x3000f5 = _0x49dfef.get(_0x1d91a4, "resoultCode", _0x247ac8);
      if (_0x3000f5 == 0) {
        this.log("领取任务[" + _0x24b8bd + "]奖励成功: " + _0x1d91a4?.["resoultMsg"]);
      } else {
        let _0x4a99bc = _0x1d91a4?.["msg"] || _0x1d91a4?.["resoultMsg"] || _0x1d91a4?.["error"] || "";
        this.log("领取任务[" + _0x24b8bd + "]奖励错误[" + _0x3000f5 + "]: " + _0x4a99bc);
      }
    } catch (_0x5b2ab8) {
      console.log(_0x5b2ab8);
    }
  }
  async openMsg(_0x343d03, _0x3ad933 = {}) {
    try {
      let _0x4acc64 = _0x343d03?.["title"]?.["split"](" ")?.[0];
      const _0x50b18e = {
        phone: this.name
      };
      let _0x55fc05 = {
          fn: "openMsg",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/openMsg",
          json: {
            para: this.encrypt_para(_0x50b18e)
          }
        },
        {
          result: _0x30ae9e,
          statusCode: _0x3216ab
        } = await this.request(_0x55fc05),
        _0x3dea03 = _0x49dfef.get(_0x30ae9e, "resoultCode", _0x3216ab);
      if (_0x3dea03 == 0) {
        this.log("完成任务[" + _0x4acc64 + "]成功: " + _0x30ae9e?.["resoultMsg"]);
      } else {
        let _0x586158 = _0x30ae9e?.["msg"] || _0x30ae9e?.["resoultMsg"] || _0x30ae9e?.["error"] || "";
        this.log("完成任务[" + _0x4acc64 + "]错误[" + _0x3dea03 + "]: " + _0x586158);
      }
    } catch (_0x4ad9f2) {
      console.log(_0x4ad9f2);
    }
  }
  async polymerize(_0xfebb9c, _0x1ac1aa = {}) {
    try {
      let _0x488d47 = _0xfebb9c?.["title"]?.["split"](" ")?.[0];
      const _0x5c944c = {
        phone: this.name,
        jobId: _0xfebb9c.taskId
      };
      let _0x5b3d07 = {
          fn: "polymerize",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/webSign/polymerize",
          json: {
            para: this.encrypt_para(_0x5c944c)
          }
        },
        {
          result: _0x194949,
          statusCode: _0x387e85
        } = await this.request(_0x5b3d07),
        _0x2f7480 = _0x49dfef.get(_0x194949, "resoultCode", _0x387e85);
      if (_0x2f7480 == 0) {
        this.log("完成任务[" + _0x488d47 + "]成功: " + _0x194949?.["resoultMsg"]);
      } else {
        let _0x34bae6 = _0x194949?.["msg"] || _0x194949?.["resoultMsg"] || _0x194949?.["error"] || "";
        this.log("完成任务[" + _0x488d47 + "]错误[" + _0x2f7480 + "]: " + _0x34bae6);
      }
    } catch (_0x5ea0ed) {
      console.log(_0x5ea0ed);
    }
  }
  async food(_0x471031, _0x2add3a = {}) {
    try {
      const _0x7427b4 = {
        phone: this.name
      };
      let _0x546670 = {
          fn: "food",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/food",
          json: {
            para: this.encrypt_para(_0x7427b4)
          }
        },
        {
          result: _0x7ef11e,
          statusCode: _0xfd01c5
        } = await this.request(_0x546670),
        _0x133dc2 = _0x49dfef.get(_0x7ef11e, "resoultCode", _0xfd01c5);
      if (_0x133dc2 == 0) {
        this.log("第" + _0x471031 + "次喂食: " + (_0x7ef11e?.["resoultMsg"] || "成功"));
        if (_0x7ef11e?.["levelUp"]) {
          let _0x569179 = _0x7ef11e?.["currLevelRightList"][0]?.["level"];
          const _0x165bb2 = {
            notify: true
          };
          this.log("宠物已升级到[LV." + _0x569179 + "], 获得: " + _0x7ef11e?.["currLevelRightList"][0]?.["righstName"], _0x165bb2);
        }
      } else {
        let _0x3c8e42 = _0x7ef11e?.["msg"] || _0x7ef11e?.["resoultMsg"] || _0x7ef11e?.["error"] || "";
        this.log("第" + _0x471031 + "次喂食失败[" + _0x133dc2 + "]: " + _0x3c8e42);
        _0x3c8e42?.["includes"]("最大喂食次数") && (this.can_feed = false);
      }
    } catch (_0x2d2186) {
      console.log(_0x2d2186);
    }
  }
  async getParadiseInfo(_0x1ed704 = {}) {
    try {
      const _0x5cb610 = {
        phone: this.name
      };
      let _0x4b9e78 = {
        fn: "getParadiseInfo",
        method: "post",
        url: "https://wapside.189.cn:9001/jt-sign/paradise/getParadiseInfo",
        json: {
          para: this.encrypt_para(_0x5cb610)
        }
      };
      {
        let {
            result: _0x2dc1b2,
            statusCode: _0x42f6a2
          } = await this.request(_0x4b9e78),
          _0x213769 = _0x49dfef.get(_0x2dc1b2, "resoultCode", _0x42f6a2);
        if (_0x213769 == 0) {
          let _0x19d192 = _0x2dc1b2?.["userInfo"]?.["levelInfoMap"];
          this.level = _0x19d192?.["level"];
          for (let _0x292346 = 1; _0x292346 <= 10 && this.can_feed; _0x292346++) {
            await this.food(_0x292346);
          }
        } else {
          let _0x15850b = _0x2dc1b2?.["msg"] || _0x2dc1b2?.["resoultMsg"] || _0x2dc1b2?.["error"] || "";
          this.log("查询宠物等级失败[" + _0x213769 + "]: " + _0x15850b);
          return;
        }
      }
      {
        let {
            result: _0x1a8333,
            statusCode: _0x70ec32
          } = await this.request(_0x4b9e78),
          _0x2b9801 = _0x49dfef.get(_0x1a8333, "resoultCode", _0x70ec32);
        if (_0x2b9801 == 0) {
          let _0x91a047 = _0x1a8333?.["userInfo"]?.["levelInfoMap"];
          this.level = _0x91a047?.["level"];
          const _0x31f8f7 = {
            notify: true
          };
          this.log("宠物等级[Lv." + _0x91a047?.["level"] + "], 升级进度: " + _0x91a047?.["growthValue"] + "/" + _0x91a047?.["fullGrowthCoinValue"], _0x31f8f7);
        } else {
          let _0x4f86bf = _0x1a8333?.["msg"] || _0x1a8333?.["resoultMsg"] || _0x1a8333?.["error"] || "";
          this.log("查询宠物等级失败[" + _0x2b9801 + "]: " + _0x4f86bf);
          return;
        }
      }
    } catch (_0x31eb54) {
      console.log(_0x31eb54);
    }
  }
  async getLevelRightsList(_0x45a1a3 = {}) {
    try {
      const _0xceffb9 = {
        phone: this.name
      };
      let _0x270db3 = {
          fn: "getLevelRightsList",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/getLevelRightsList",
          json: {
            para: this.encrypt_para(_0xceffb9)
          }
        },
        {
          result: _0x30afb3,
          statusCode: _0x2886fd
        } = await this.request(_0x270db3);
      if (_0x30afb3?.["currentLevel"]) {
        let _0x1aa690 = _0x30afb3?.["currentLevel"] || 6,
          _0x5b7cf4 = false,
          _0x4a64d8 = "V" + _0x1aa690;
        for (let _0xdf65dc of _0x30afb3[_0x4a64d8] || []) {
          let _0x16635f = _0xdf65dc?.["righstName"] || "";
          if (this.coin < _0xdf65dc.costCoin) {
            continue;
          }
          (_0x16635f?.["match"](/\d+元话费/) || _0x16635f?.["match"](/专享\d+金豆/)) && (await this.getConversionRights(_0xdf65dc, _0x5b7cf4)) && (_0x5b7cf4 = true);
        }
      } else {
        let _0x1aa0e2 = _0x30afb3?.["msg"] || _0x30afb3?.["resoultMsg"] || _0x30afb3?.["error"] || "";
        this.log("查询宠物兑换权益失败: " + _0x1aa0e2);
      }
    } catch (_0x221247) {
      console.log(_0x221247);
    }
  }
  async getConversionRights(_0x232305, _0xd81320, _0x509690 = {}) {
    let _0x3ae910 = false;
    try {
      let _0x275eed = _0x232305?.["righstName"] || "";
      const _0x4cf972 = {
        phone: this.name,
        rightsId: _0x232305.id,
        receiveCount: _0x232305.receiveType
      };
      let _0x435e90 = {
          fn: "getConversionRights",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/getConversionRights",
          json: {
            para: this.encrypt_para(_0x4cf972)
          }
        },
        {
          result: _0xa48ad6,
          statusCode: _0x1ef6d8
        } = await this.request(_0x435e90),
        _0x4acc27 = _0x49dfef.get(_0xa48ad6, "code", _0x49dfef.get(_0xa48ad6, "resoultCode", _0x1ef6d8));
      if (_0x4acc27 == 200) {
        if (!(_0xa48ad6?.["rightsStatus"]?.["includes"]("已兑换") || _0xa48ad6?.["rightsStatus"]?.["includes"]("已领取"))) {
          _0x3ae910 = true;
          _0xd81320 && (await _0x49dfef.wait(3000));
          await this.conversionRights(_0x232305);
        }
      } else {
        let _0x45c755 = _0xa48ad6?.["msg"] || _0xa48ad6?.["resoultMsg"] || _0xa48ad6?.["error"] || "";
        this.log("查询权益[" + _0x275eed + "]失败[" + _0x4acc27 + "]: " + _0x45c755);
      }
    } catch (_0x50f11f) {
      console.log(_0x50f11f);
    } finally {
      return _0x3ae910;
    }
  }
  async conversionRights(_0x26656b, _0x175513 = {}) {
    try {
      let _0x46332d = _0x26656b?.["righstName"] || "";
      const _0x596432 = {
        phone: this.name,
        rightsId: _0x26656b.id
      };
      let _0x252f5a = {
          fn: "conversionRights",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/conversionRights",
          json: {
            para: this.encrypt_para(_0x596432)
          }
        },
        {
          result: _0x223c1c,
          statusCode: _0x80a6c8
        } = await this.request(_0x252f5a),
        _0x54fb44 = _0x49dfef.get(_0x223c1c, "resoultCode", _0x80a6c8);
      if (_0x54fb44 == 0) {
        this.log("兑换权益[" + _0x46332d + "]成功");
      } else {
        let _0x440ea9 = _0x223c1c?.["msg"] || _0x223c1c?.["resoultMsg"] || _0x223c1c?.["error"] || "";
        this.log("兑换权益[" + _0x46332d + "]失败[" + _0x54fb44 + "]: " + _0x440ea9);
      }
    } catch (_0x470fd0) {
      console.log(_0x470fd0);
    }
  }
  async get_usercode(_0x3194e9 = {}) {
    try {
      const _0xa9af8a = {
        fn: "get_usercode",
        method: "get",
        url: "https://xbk.189.cn/xbkapi/api/auth/jump",
        searchParams: {}
      };
      _0xa9af8a.searchParams.userID = this.ticket;
      _0xa9af8a.searchParams.version = "9.3.3";
      _0xa9af8a.searchParams.type = "room";
      _0xa9af8a.searchParams.l = "renwu";
      let {
          statusCode: _0x1f0e2,
          headers: _0x395df3
        } = await this.request(_0xa9af8a),
        _0x195405 = _0x395df3?.["location"]?.["match"](/usercode=(\w+)/);
      _0x195405 ? await this.codeToken(_0x195405[1]) : this.log("获取code失败[" + _0x1f0e2 + "]");
    } catch (_0x36086d) {
      console.log(_0x36086d);
    }
  }
  async codeToken(_0x29b3f0, _0x2a5ff5 = {}) {
    try {
      const _0x1b0415 = {
        usercode: _0x29b3f0
      };
      const _0xf59213 = {
        fn: "codeToken",
        method: "post",
        url: "https://xbk.189.cn/xbkapi/api/auth/userinfo/codeToken",
        json: _0x1b0415
      };
      let {
          result: _0x39dc82,
          statusCode: _0x40a180
        } = await this.request(_0xf59213),
        _0x1e896a = _0x49dfef.get(_0x39dc82, "code", -1);
      if (_0x1e896a == 0) {
        this.xtoken = _0x39dc82?.["data"]?.["token"];
        this.got = this.got.extend({
          headers: {
            Authorization: "Bearer " + _0x5b4189.encrypt(this.xtoken, "base64")
          }
        });
      } else {
        let _0x858774 = _0x39dc82?.["msg"] || _0x39dc82?.["resoultMsg"] || _0x39dc82?.["error"] || _0x39dc82?.["msg"] || "";
        this.log("获取token失败[" + _0x1e896a + "]: " + _0x858774);
      }
    } catch (_0x354813) {
      console.log(_0x354813);
    }
  }
  async watchLiveInit(_0x144444 = {}) {
    try {
      let _0x3acb18 = Math.floor(Math.random() * 1000) + 1000;
      const _0x2ba927 = {
        period: 1,
        liveId: _0x3acb18
      };
      const _0x1caba4 = {
        fn: "watchLiveInit",
        method: "post",
        url: "https://xbk.189.cn/xbkapi/lteration/liveTask/index/watchLiveInit",
        json: _0x2ba927
      };
      let {
          result: _0x5d1aa2,
          statusCode: _0x1b6981
        } = await this.request(_0x1caba4),
        _0x540b91 = _0x49dfef.get(_0x5d1aa2, "code", -1);
      if (_0x540b91 == 0) {
        await _0x49dfef.wait(15000);
        await this.watchLive(_0x3acb18, _0x5d1aa2?.["data"]);
      } else {
        let _0x5a4509 = _0x5d1aa2?.["msg"] || _0x5d1aa2?.["resoultMsg"] || _0x5d1aa2?.["error"] || _0x5d1aa2?.["msg"] || "";
        this.log("开始观看直播[" + _0x3acb18 + "]失败[" + _0x540b91 + "]: " + _0x5a4509);
      }
    } catch (_0x126ce8) {
      console.log(_0x126ce8);
    }
  }
  async watchLive(_0x50c099, _0x3cb39d, _0x9a96e4 = {}) {
    try {
      const _0x429884 = {
        period: 1,
        liveId: _0x50c099,
        key: _0x3cb39d
      };
      const _0x5dfc79 = {
        fn: "watchLive",
        method: "post",
        url: "https://xbk.189.cn/xbkapi/lteration/liveTask/index/watchLive",
        json: _0x429884
      };
      let {
          result: _0x1428d4,
          statusCode: _0x52afd4
        } = await this.request(_0x5dfc79),
        _0xe1aeaf = _0x49dfef.get(_0x1428d4, "code", -1);
      if (_0xe1aeaf == 0) {
        this.log("观看直播[" + _0x50c099 + "]成功");
        await this.watchLiveInit();
      } else {
        let _0x2d7e88 = _0x1428d4?.["msg"] || _0x1428d4?.["resoultMsg"] || _0x1428d4?.["error"] || _0x1428d4?.["msg"] || "";
        this.log("观看直播[" + _0x50c099 + "]失败[" + _0xe1aeaf + "]: " + _0x2d7e88);
      }
    } catch (_0x1434df) {
      console.log(_0x1434df);
    }
  }
  async watchVideo(_0xe2c6a1, _0x91d394 = {}) {
    try {
      const _0x3f0d4c = {
        articleId: _0xe2c6a1
      };
      const _0x1ae872 = {
        fn: "watchVideo",
        method: "post",
        url: "https://xbk.189.cn/xbkapi/lteration/liveTask/index/watchVideo",
        json: _0x3f0d4c
      };
      let {
          result: _0x416335,
          statusCode: _0x5d3145
        } = await this.request(_0x1ae872),
        _0x1f4f05 = _0x49dfef.get(_0x416335, "code", -1);
      if (_0x1f4f05 == 0) {
        this.log("观看短视频[" + _0xe2c6a1 + "]成功");
      } else {
        let _0x36be5e = _0x416335?.["msg"] || _0x416335?.["resoultMsg"] || _0x416335?.["error"] || _0x416335?.["msg"] || "";
        this.log("观看短视频[" + _0xe2c6a1 + "]失败[" + _0x1f4f05 + "]: " + _0x36be5e);
      }
    } catch (_0xefdc73) {
      console.log(_0xefdc73);
    }
  }
  async like(_0x5f2b98, _0xa2431d = {}) {
    try {
      const _0x31a1e5 = {
        account: this.name,
        liveId: _0x5f2b98
      };
      const _0x1071c0 = {
        fn: "like",
        method: "post",
        url: "https://xbk.189.cn/xbkapi/lteration/room/like",
        json: _0x31a1e5
      };
      let {
          result: _0x506c2c,
          statusCode: _0x2fefa6
        } = await this.request(_0x1071c0),
        _0xa5a8c3 = _0x49dfef.get(_0x506c2c, "code", -1);
      if (_0xa5a8c3 == 0) {
        this.log("点赞直播间[" + _0x5f2b98 + "]成功");
      } else {
        let _0x48c098 = _0x506c2c?.["msg"] || _0x506c2c?.["resoultMsg"] || _0x506c2c?.["error"] || _0x506c2c?.["msg"] || "";
        this.log("点赞直播间[" + _0x5f2b98 + "]失败[" + _0xa5a8c3 + "]: " + _0x48c098);
      }
    } catch (_0x16c2ea) {
      console.log(_0x16c2ea);
    }
  }
  async sharingGetGold(_0x21c503 = {}) {
    try {
      let _0x5ef456 = {
          fn: "sharingGetGold",
          method: "post",
          url: "https://appfuwu.189.cn:9021/query/sharingGetGold",
          json: {
            headerInfos: {
              code: "sharingGetGold",
              timestamp: _0x49dfef.time("yyyyMMddhhmmss"),
              broadAccount: "",
              broadToken: "",
              clientType: "#9.6.1#channel50#iPhone 14 Pro Max#",
              shopId: "20002",
              source: "110003",
              sourcePassword: "Sid98s",
              token: this.token,
              userLoginName: this.name
            },
            content: {
              attach: "test",
              fieldData: {
                shareSource: "3",
                userId: this.userId,
                account: this.encode_phone()
              }
            }
          }
        },
        {
          result: _0xc27608,
          statusCode: _0x56b955
        } = await this.request(_0x5ef456),
        _0x501c6f = _0x49dfef.get(_0xc27608?.["responseData"], "resultCode", -1);
      if (_0x501c6f == "0000") {
        this.log("分享成功");
      } else {
        let _0x344cf3 = _0xc27608?.["msg"] || _0xc27608?.["responseData"]?.["resultDesc"] || _0xc27608?.["error"] || _0xc27608?.["msg"] || "";
        this.log("分享失败[" + _0x501c6f + "]: " + _0x344cf3);
      }
    } catch (_0x50c71c) {
      console.log(_0x50c71c);
    }
  }
  async month_jml_preCost(_0x4ab112 = {}) {
    try {
      let _0x128c96 = {
          fn: "month_jml_preCost",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/short/message/preCost",
          json: {
            phone: this.encode_aes(this.name),
            activityCode: "shortMesssge"
          }
        },
        {
          result: _0x85026d,
          statusCode: _0x455acc
        } = await this.request(_0x128c96),
        _0x2d7bba = _0x49dfef.get(_0x85026d, "resoultCode", _0x455acc);
      if (_0x2d7bba == 0) {
        let _0x4a61a0 = _0x85026d?.["data"]?.["resoultMsg"] || "领取成功";
        this.jml_tokenFlag = _0x85026d?.["resoultMsg"];
        await this.month_jml_userCost(_0x4a61a0);
        await this.month_jml_receive();
        await this.month_jml_getCount();
        await this.month_jml_refresh();
      } else {
        let _0x54c978 = _0x85026d?.["msg"] || _0x85026d?.["resoultMsg"] || _0x85026d?.["error"] || "";
        this.log("每月见面礼登录失败[" + _0x2d7bba + "]: " + _0x54c978);
      }
    } catch (_0x5cbcfa) {
      console.log(_0x5cbcfa);
    }
  }
  async month_jml_userCost(_0x4c465e, _0x1e428e = {}) {
    try {
      let _0x46ac17 = {
          fn: "month_jml_userCost",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/short/message/userCost",
          json: {
            phone: this.encode_aes(this.name),
            activityCode: "shortMesssge",
            flag: this.jml_tokenFlag
          }
        },
        {
          result: _0x8bafb9,
          statusCode: _0x2c71d3
        } = await this.request(_0x46ac17),
        _0x3d3b48 = _0x49dfef.get(_0x8bafb9, "resoultCode", _0x2c71d3);
      if (_0x3d3b48 == 0) {
        let _0x4ea658 = _0x8bafb9?.["data"]?.["map"](_0x19d971 => "[" + _0x19d971.pizeName + "]") || [];
        this.log("见面礼" + _0x4c465e + ": " + _0x4ea658.join(", "));
      } else {
        let _0xb982e9 = _0x8bafb9?.["msg"] || _0x8bafb9?.["resoultMsg"] || _0x8bafb9?.["error"] || "";
        this.log("领取每月见面礼失败[" + _0x3d3b48 + "]: " + _0xb982e9);
      }
    } catch (_0x70b132) {
      console.log(_0x70b132);
    }
  }
  async month_jml_receive(_0x2ff02c = {}) {
    try {
      const _0x1dd8e8 = {
        phone: this.name,
        flag: this.jml_tokenFlag
      };
      let _0x25b323 = {
          fn: "month_jml_receive",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/lottery/receive",
          json: {
            para: this.encrypt_para(_0x1dd8e8)
          }
        },
        {
          result: _0x3292af,
          statusCode: _0x2a77bb
        } = await this.request(_0x25b323),
        _0x2a2904 = _0x49dfef.get(_0x3292af, "code", -1);
      if (_0x2a2904 == 0) {
        this.log("领取APP抽奖次数成功");
      } else {
        let _0x4f1a69 = _0x3292af?.["msg"] || _0x3292af?.["resoultMsg"] || _0x3292af?.["error"] || "";
        this.log("领取APP抽奖次数失败[" + _0x2a2904 + "]: " + _0x4f1a69);
      }
    } catch (_0x1a7141) {
      console.log(_0x1a7141);
    }
  }
  async month_jml_getCount(_0x5b3945 = {}) {
    try {
      const _0xa491b2 = {
        phone: this.name,
        flag: this.jml_tokenFlag
      };
      let _0x474155 = {
          fn: "month_jml_getCount",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/lottery/getCount",
          json: {
            para: this.encrypt_para(_0xa491b2)
          }
        },
        {
          result: _0x505132,
          statusCode: _0x3a08d2
        } = await this.request(_0x474155),
        _0x4022f4 = _0x49dfef.get(_0x505132, "code", -1);
      if (_0x4022f4 == 0) {
        let _0x2ec36e = _0x505132?.["video"]?.["map"](_0x41fa0b => _0x41fa0b.videoType) || [],
          _0x467100 = _0x131d2d.filter(_0xc8ed12 => !_0x2ec36e.includes(_0xc8ed12)),
          _0x3a6033 = false;
        for (let _0x261b94 of _0x467100) {
          if (_0x3a6033) {
            let _0x2f6dd7 = Math.floor(Math.random() * 5000) + 3000;
            await _0x49dfef.wait(_0x2f6dd7);
          }
          await this.month_jml_addVideoCount(_0x261b94);
          _0x3a6033 = true;
        }
      } else {
        let _0x531840 = _0x505132?.["msg"] || _0x505132?.["resoultMsg"] || _0x505132?.["error"] || "";
        this.log("查询看视频得抽奖机会次数失败[" + _0x4022f4 + "]: " + _0x531840);
      }
    } catch (_0x38efeb) {
      console.log(_0x38efeb);
    }
  }
  async month_jml_addVideoCount(_0x27889e, _0x428ce6 = {}) {
    try {
      const _0x59a269 = {
        phone: this.name,
        videoType: _0x27889e,
        flag: this.jml_tokenFlag
      };
      let _0x35dcac = {
          fn: "month_jml_addVideoCount",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/lottery/addVideoCount",
          json: {
            para: this.encrypt_para(_0x59a269)
          }
        },
        {
          result: _0x162541,
          statusCode: _0x40bcd0
        } = await this.request(_0x35dcac),
        _0x2feab7 = _0x49dfef.get(_0x162541, "code", -1);
      if (_0x2feab7 == 0) {
        this.log("看视频[" + _0x27889e + "]得抽奖机会成功");
      } else {
        let _0x401eb1 = _0x162541?.["msg"] || _0x162541?.["resoultMsg"] || _0x162541?.["error"] || "";
        this.log("看视频[" + _0x27889e + "]得抽奖机会失败[" + _0x2feab7 + "]: " + _0x401eb1);
      }
    } catch (_0x5d6b04) {
      console.log(_0x5d6b04);
    }
  }
  async month_jml_refresh(_0x1bce66 = {}) {
    try {
      const _0x4803b8 = {
        phone: this.name,
        flag: this.jml_tokenFlag
      };
      let _0x599237 = {
          fn: "month_jml_refresh",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/lottery/refresh",
          json: {
            para: this.encrypt_para(_0x4803b8)
          }
        },
        {
          result: _0x2698de,
          statusCode: _0x185c44
        } = await this.request(_0x599237),
        _0x30658b = _0x49dfef.get(_0x2698de, "code", -1);
      if (_0x30658b == -1) {
        let _0x4429c4 = _0x2698de?.["rNumber"] || 0;
        this.log("可以抽奖" + _0x4429c4 + "次");
        let _0x462702 = false;
        while (_0x4429c4-- > 0) {
          if (_0x462702) {
            let _0x1f0287 = Math.floor(Math.random() * 5000) + 3000;
            await _0x49dfef.wait(_0x1f0287);
          }
          await this.month_jml_lotteryRevice();
          _0x462702 = true;
        }
      } else {
        let _0x5a0c75 = _0x2698de?.["msg"] || _0x2698de?.["resoultMsg"] || _0x2698de?.["error"] || "";
        this.log("查询抽奖次数失败[" + _0x30658b + "]: " + _0x5a0c75);
      }
    } catch (_0x4ad2e5) {
      console.log(_0x4ad2e5);
    }
  }
  async month_jml_lotteryRevice(_0x40f652 = {}) {
    try {
      const _0x20284e = {
        phone: this.name,
        flag: this.jml_tokenFlag
      };
      let _0x207477 = {
          fn: "month_jml_lotteryRevice",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/lottery/lotteryRevice",
          json: {
            para: this.encrypt_para(_0x20284e)
          }
        },
        {
          result: _0x2d6170,
          statusCode: _0xd97e6c
        } = await this.request(_0x207477),
        _0x54b49e = _0x49dfef.get(_0x2d6170, "code", -1);
      if (_0x54b49e == 0) {
        let {
          rname: _0x315441,
          id: _0x7bc3fd
        } = _0x2d6170;
        const _0x4cec11 = {
          notify: true
        };
        this.log("每月见面礼抽奖: " + _0x315441, _0x4cec11);
      } else {
        let _0x349aca = _0x2d6170?.["msg"] || _0x2d6170?.["resoultMsg"] || _0x2d6170?.["error"] || "";
        this.log("每月见面礼抽奖失败[" + _0x54b49e + "]: " + _0x349aca);
      }
    } catch (_0x3cf623) {
      console.log(_0x3cf623);
    }
  }
  async rpc_request(_0x3e0276, _0x172e8a = "get", _0x105516 = null) {
    const _0x4f5909 = new Error(),
      _0x120883 = _0x4f5909.stack,
      _0x4b28f7 = _0x120883.split("\n"),
      _0x4123a9 = _0x4b28f7?.[2]?.["match"](/UserClass\.(\w+)/)?.[1] || "rpc";
    let _0x15ac59 = {
      fn: _0x4123a9,
      method: "post",
      url: _0x16d3ea,
      json: {
        key: _0x344953,
        method: _0x172e8a,
        url: _0x3e0276.toString(),
        headers: this.get_mall_headers(),
        data: JSON.stringify(_0x105516)
      }
    };
    return await this.request(_0x15ac59);
  }
  async auth_login(_0x51ccca = {}) {
    let _0x37d880 = false;
    try {
      let _0x11b68a = this.ticket,
        _0x2ef2be = new URL("https://wapact.189.cn:9001/unified/user/login"),
        _0x335257 = {
          ticket: _0x11b68a,
          backUrl: encodeURIComponent("https://wapact.189.cn:9001/JinDouMall/JinDouMall_luckDraw.html?ticket=" + _0x11b68a),
          platformCode: "P201010301",
          loginType: 2
        },
        {
          result: _0x300f0a,
          statusCode: _0x5ddd28
        } = await this.rpc_request(_0x2ef2be, "POST", _0x335257),
        _0x3555d4 = _0x49dfef.get(_0x300f0a, "code", _0x5ddd28);
      if (_0x3555d4 == 0) {
        let {
          token: _0x325d31,
          sessionId: _0x5eded5
        } = _0x300f0a?.["biz"];
        this.mall_token = _0x325d31;
        _0x37d880 = true;
      } else {
        let _0x4768b3 = _0x49dfef.get(_0x300f0a, "message", "");
        this.log("商城登录失败[" + _0x3555d4 + "]: " + _0x4768b3);
      }
    } catch (_0x3d5f10) {
      console.log(_0x3d5f10);
    } finally {
      return _0x37d880;
    }
  }
  async queryInfo(_0x25c2dd = {}) {
    try {
      let _0x1a24c8 = new URL("https://wapact.189.cn:9001/gateway/golden/api/queryInfo");
      _0x1a24c8.searchParams.append("_", Date.now().toString());
      let {
          result: _0x59251c,
          statusCode: _0x1aadd3
        } = await this.rpc_request(_0x1a24c8),
        _0x20574e = _0x49dfef.get(_0x59251c, "code", _0x1aadd3);
      if (_0x20574e == 0) {
        this.coin = _0x59251c?.["biz"]?.["amountTotal"] || this.coin;
        await this.queryTurnTable();
      } else {
        let _0x33d4e6 = _0x49dfef.get(_0x59251c, "message", "");
        this.log("查询商城状态失败[" + _0x20574e + "]: " + _0x33d4e6);
      }
    } catch (_0x14479b) {
      console.log(_0x14479b);
    }
  }
  async queryTurnTable(_0x3a21a4 = {}) {
    try {
      let _0x19e788 = new URL("https://wapact.189.cn:9001/gateway/golden/api/queryTurnTable");
      _0x19e788.searchParams.append("userType", "1");
      _0x19e788.searchParams.append("_", Date.now().toString());
      let {
          result: _0x3b8d15,
          statusCode: _0x56a5f3
        } = await this.rpc_request(_0x19e788),
        _0x385abe = _0x49dfef.get(_0x3b8d15, "code", _0x56a5f3);
      if (_0x385abe == 0) {
        let _0x2146d3 = _0x3b8d15?.["biz"]?.["xiaoHaoCount"] || 20,
          _0x13e144 = _0x3b8d15?.["biz"]?.["wzTurntable"]?.["code"] || "";
        _0x13e144 ? await this.lottery_check(_0x13e144, _0x2146d3) : this.log("没有获取到转盘抽奖ID");
      } else {
        let _0x3d72ab = _0x49dfef.get(_0x3b8d15, "message", "");
        this.log("获取转盘抽奖活动失败[" + _0x385abe + "]: " + _0x3d72ab);
      }
    } catch (_0x4b0251) {
      console.log(_0x4b0251);
    }
  }
  async lottery_check(_0xa22a2f, _0x18d34d, _0x1d185f = {}) {
    try {
      let _0x28e987 = new URL("https://wapact.189.cn:9001/gateway/stand/detail/check");
      _0x28e987.searchParams.append("activityId", _0xa22a2f);
      _0x28e987.searchParams.append("_", Date.now().toString());
      let {
          result: _0x3ff638,
          statusCode: _0x55ea0f
        } = await this.rpc_request(_0x28e987),
        _0x565f76 = _0x49dfef.get(_0x3ff638, "code", _0x55ea0f);
      if (_0x565f76 == 0) {
        let _0x387cec = _0x3ff638?.["biz"]?.["resultInfo"]?.["chanceCount"] || 0;
        this.log("转盘可以抽奖" + _0x387cec + "次, 消耗金豆" + _0x18d34d + "/" + this.coin);
        let _0x162d9b = false;
        while (_0x387cec-- > 0 && this.coin >= _0x18d34d) {
          _0x162d9b && (await _0x49dfef.wait(3000));
          _0x162d9b = true;
          await this.lottery_do(_0xa22a2f, _0x18d34d);
        }
      } else {
        let _0x514e11 = _0x49dfef.get(_0x3ff638, "message", "");
        this.log("查询转盘抽奖次数失败[" + _0x565f76 + "]: " + _0x514e11);
      }
    } catch (_0x6fca11) {
      console.log(_0x6fca11);
    }
  }
  async lottery_do(_0x20aeef, _0x3b9746 = {}) {
    try {
      let _0x56d830 = new URL("https://wapact.189.cn:9001/gateway/golden/api/lottery");
      const _0x2caa02 = {
        activityId: _0x20aeef
      };
      let {
          result: _0x38b633,
          statusCode: _0x81c1d5
        } = await this.rpc_request(_0x56d830, "POST", _0x2caa02),
        _0x4dd031 = _0x49dfef.get(_0x38b633, "code", _0x81c1d5);
      if (_0x4dd031 == 0) {
        this.coin = _0x38b633?.["biz"]?.["amountTotal"] || this.coin - xiaoHaoCount;
        let _0x587344 = _0x38b633?.["biz"]?.["resultCode"],
          _0x337727 = "";
        switch (_0x587344) {
          case "0":
            {
              let _0x366ff3 = _0x38b633?.["biz"]?.["resultInfo"]?.["winTitle"] || "空气";
              const _0x1e44d4 = {
                notify: true
              };
              this.log("转盘抽奖: " + _0x366ff3, _0x1e44d4);
              return;
            }
          case "412":
            {
              _0x337727 = "抽奖次数已达上限";
              break;
            }
          case "413":
          case "420":
            {
              _0x337727 = "金豆不足";
              break;
            }
          default:
            {
              this.log(": " + JSON.stringify(_0x38b633));
              _0x337727 = "未知原因";
              break;
            }
        }
        this.log("转盘抽奖失败[" + _0x587344 + "]: " + _0x337727);
      } else {
        let _0x1472e9 = _0x49dfef.get(_0x38b633, "message", "");
        this.log("转盘抽奖错误[" + _0x4dd031 + "]: " + _0x1472e9);
      }
    } catch (_0x2905a5) {
      console.log(_0x2905a5);
    }
  }
  async userTask() {
    await this.check();
    const _0x94d26a = {
      notify: true
    };
    _0x49dfef.log("\n======= 账号[" + this.index + "][" + this.name + "] =======", _0x94d26a);
    if (!this.load_token() && !(await this.login())) {
      return;
    }
    if (!(await this.get_ticket())) {
      return;
    }
    if (!(await this.get_sign())) {
      return;
    }
    await this.userCoinInfo();
    await this.getLevelRightsList();
    await this.month_jml_preCost();
    await this.userStatusInfo();
    await this.continueSignRecords();
    await this.homepage("hg_qd_zrwzjd");
    await this.getParadiseInfo();
    if (_0x16d3ea) {
      await this.userLotteryTask();
    }
    await this.userCoinInfo(true);
    if (_0x1d3d6d[this.name]) {
      _0x1d3d6d[this.name].coin = this.coin;
    }
    _0x4e4355();
  }
  async userLotteryTask() {
    if (!(await this.auth_login())) {
      return;
    }
    await this.queryInfo();
  }
}
!(async () => {
  _0x49dfef.read_env(_0x3f433d);
  _0xa0ff1b();
  for (let _0x9dc54e of _0x49dfef.userList) {
    await _0x9dc54e.userTask();
  }
})().catch(_0x2c9503 => _0x49dfef.log(_0x2c9503)).finally(() => _0x49dfef.exitNow());
async function _0x1a2249(_0x1ba355 = 0) {
  let _0x4ffdd9 = [];
  try {
    const _0x479e03 = {
      fn: "auth",
      method: "get",
      url: _0x100b57,
      timeout: 20000
    };
    let {
      statusCode: _0x43b595,
      result: _0x3f5a90
    } = await _0x3b1630.request(_0x479e03);
    if (_0x43b595 != 200) {
      _0x1ba355++ < _0x3c685e && (_0x4ffdd9 = await _0x1a2249(_0x1ba355));
      return _0x4ffdd9;
    }
    if (_0x3f5a90?.["code"] == 0) {
      _0x3f5a90 = JSON.parse(_0x3f5a90.data.file.data);
      if (_0x3f5a90?.["commonNotify"] && _0x3f5a90.commonNotify.length > 0) {
        const _0x5bc60c = {
          notify: true
        };
        _0x49dfef.log(_0x3f5a90.commonNotify.join("\n") + "\n", _0x5bc60c);
      }
      _0x3f5a90?.["commonMsg"] && _0x3f5a90.commonMsg.length > 0 && _0x49dfef.log(_0x3f5a90.commonMsg.join("\n") + "\n");
      if (_0x3f5a90[_0x14f289]) {
        let _0x5d1159 = _0x3f5a90[_0x14f289];
        _0x5d1159.status == 0 ? _0xf4231c >= _0x5d1159.version ? (_0x4ffdd9 = true, _0x49dfef.log(_0x5d1159.msg[_0x5d1159.status]), _0x49dfef.log(_0x5d1159.updateMsg), _0x49dfef.log("现在运行的脚本版本是：" + _0xf4231c + "，最新脚本版本：" + _0x5d1159.latestVersion)) : _0x49dfef.log(_0x5d1159.versionMsg) : _0x49dfef.log(_0x5d1159.msg[_0x5d1159.status]);
      } else {
        _0x49dfef.log(_0x3f5a90.errorMsg);
      }
    } else {
      _0x1ba355++ < _0x3c685e && (_0x4ffdd9 = await _0x1a2249(_0x1ba355));
    }
  } catch (_0x5e1609) {
    _0x49dfef.log(_0x5e1609);
  } finally {
    return _0x4ffdd9;
  }
}
function _0x5370a4(_0x4e14f3) {
  return new class {
    constructor(_0x7f8267) {
      this.name = _0x7f8267;
      this.startTime = Date.now();
      const _0xb221a5 = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0xb221a5);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userCount = 0;
      this.default_timestamp_len = 13;
      this.default_wait_interval = 1000;
      this.default_wait_limit = 3600000;
      this.default_wait_ahead = 0;
    }
    log(_0x4272aa, _0x450e5c = {}) {
      const _0x22637f = {
        console: true
      };
      Object.assign(_0x22637f, _0x450e5c);
      if (_0x22637f.time) {
        let _0x31fc27 = _0x22637f.fmt || "hh:mm:ss";
        _0x4272aa = "[" + this.time(_0x31fc27) + "]" + _0x4272aa;
      }
      _0x22637f.notify && this.notifyStr.push(_0x4272aa);
      _0x22637f.console && console.log(_0x4272aa);
    }
    get(_0x26a606, _0x2f2c8f, _0x1c549b = "") {
      let _0x54b6b0 = _0x1c549b;
      _0x26a606?.["hasOwnProperty"](_0x2f2c8f) && (_0x54b6b0 = _0x26a606[_0x2f2c8f]);
      return _0x54b6b0;
    }
    pop(_0x5660cb, _0x41c71c, _0x37aeec = "") {
      let _0x20793a = _0x37aeec;
      _0x5660cb?.["hasOwnProperty"](_0x41c71c) && (_0x20793a = _0x5660cb[_0x41c71c], delete _0x5660cb[_0x41c71c]);
      return _0x20793a;
    }
    copy(_0x34df2a) {
      return Object.assign({}, _0x34df2a);
    }
    read_env(_0x549206) {
      let _0x275e7d = _0x4aec53.map(_0x508047 => process.env[_0x508047]);
      for (let _0x1d58b6 of _0x275e7d.filter(_0x413056 => !!_0x413056)) {
        for (let _0xa4962e of _0x1d58b6.split(_0x1876a7).filter(_0x5d753e => !!_0x5d753e)) {
          if (this.userList.includes(_0xa4962e)) {
            continue;
          }
          this.userList.push(new _0x549206(_0xa4962e));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x3f4338 = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x4aec53.map(_0x54a206 => "[" + _0x54a206 + "]").join("或"), _0x3f4338);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    time(_0x531066, _0x46cd2d = null) {
      let _0xa60356 = _0x46cd2d ? new Date(_0x46cd2d) : new Date(),
        _0x3fdbe6 = {
          "M+": _0xa60356.getMonth() + 1,
          "d+": _0xa60356.getDate(),
          "h+": _0xa60356.getHours(),
          "m+": _0xa60356.getMinutes(),
          "s+": _0xa60356.getSeconds(),
          "q+": Math.floor((_0xa60356.getMonth() + 3) / 3),
          S: this.padStr(_0xa60356.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x531066) && (_0x531066 = _0x531066.replace(RegExp.$1, (_0xa60356.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x36cab4 in _0x3fdbe6) new RegExp("(" + _0x36cab4 + ")").test(_0x531066) && (_0x531066 = _0x531066.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x3fdbe6[_0x36cab4] : ("00" + _0x3fdbe6[_0x36cab4]).substr(("" + _0x3fdbe6[_0x36cab4]).length)));
      return _0x531066;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      var _0x30b3a8 = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await _0x30b3a8.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    padStr(_0x5523c9, _0x46c3cf, _0x9eae25 = {}) {
      let _0x3d9100 = _0x9eae25.padding || "0",
        _0x4d584e = _0x9eae25.mode || "l",
        _0x3be32f = String(_0x5523c9),
        _0x391b0e = _0x46c3cf > _0x3be32f.length ? _0x46c3cf - _0x3be32f.length : 0,
        _0x7c4465 = "";
      for (let _0x89ba91 = 0; _0x89ba91 < _0x391b0e; _0x89ba91++) {
        _0x7c4465 += _0x3d9100;
      }
      _0x4d584e == "r" ? _0x3be32f = _0x3be32f + _0x7c4465 : _0x3be32f = _0x7c4465 + _0x3be32f;
      return _0x3be32f;
    }
    json2str(_0x405e65, _0x490d6c, _0x225dea = false) {
      let _0xd8608d = [];
      for (let _0x2dca86 of Object.keys(_0x405e65).sort()) {
        let _0x1b3d4b = _0x405e65[_0x2dca86];
        _0x1b3d4b && _0x225dea && (_0x1b3d4b = encodeURIComponent(_0x1b3d4b));
        _0xd8608d.push(_0x2dca86 + "=" + _0x1b3d4b);
      }
      return _0xd8608d.join(_0x490d6c);
    }
    str2json(_0x5dd036, _0x5501d1 = false) {
      let _0x136a40 = {};
      for (let _0x855629 of _0x5dd036.split("&")) {
        if (!_0x855629) {
          continue;
        }
        let _0x224981 = _0x855629.indexOf("=");
        if (_0x224981 == -1) {
          continue;
        }
        let _0x38c87b = _0x855629.substr(0, _0x224981),
          _0x3f524c = _0x855629.substr(_0x224981 + 1);
        _0x5501d1 && (_0x3f524c = decodeURIComponent(_0x3f524c));
        _0x136a40[_0x38c87b] = _0x3f524c;
      }
      return _0x136a40;
    }
    randomPattern(_0x517f37, _0x37354b = "abcdef0123456789") {
      let _0x1ba050 = "";
      for (let _0x35bdac of _0x517f37) {
        if (_0x35bdac == "x") {
          _0x1ba050 += _0x37354b.charAt(Math.floor(Math.random() * _0x37354b.length));
        } else {
          _0x35bdac == "X" ? _0x1ba050 += _0x37354b.charAt(Math.floor(Math.random() * _0x37354b.length)).toUpperCase() : _0x1ba050 += _0x35bdac;
        }
      }
      return _0x1ba050;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(_0x1deee8, _0x565859 = "abcdef0123456789") {
      let _0x151de2 = "";
      for (let _0xab6a80 = 0; _0xab6a80 < _0x1deee8; _0xab6a80++) {
        _0x151de2 += _0x565859.charAt(Math.floor(Math.random() * _0x565859.length));
      }
      return _0x151de2;
    }
    randomList(_0x4e5977) {
      let _0x4abf84 = Math.floor(Math.random() * _0x4e5977.length);
      return _0x4e5977[_0x4abf84];
    }
    wait(_0x419f35) {
      return new Promise(_0x3535fe => setTimeout(_0x3535fe, _0x419f35));
    }
    async exitNow() {
      await this.showmsg();
      let _0x57f19b = Date.now(),
        _0x2fd82a = (_0x57f19b - this.startTime) / 1000;
      this.log("");
      const _0x5d72a5 = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x2fd82a + "秒", _0x5d72a5);
      process.exit(0);
    }
    normalize_time(_0x3712a3, _0x34c304 = {}) {
      let _0x30d470 = _0x34c304.len || this.default_timestamp_len;
      _0x3712a3 = _0x3712a3.toString();
      let _0x22d3d0 = _0x3712a3.length;
      while (_0x22d3d0 < _0x30d470) {
        _0x3712a3 += "0";
      }
      _0x22d3d0 > _0x30d470 && (_0x3712a3 = _0x3712a3.slice(0, 13));
      return parseInt(_0x3712a3);
    }
    async wait_until(_0x53979e, _0x46faf8 = {}) {
      let _0x56746e = _0x46faf8.logger || this,
        _0x96d3ae = _0x46faf8.interval || this.default_wait_interval,
        _0x47d3a2 = _0x46faf8.limit || this.default_wait_limit,
        _0x2f99c2 = _0x46faf8.ahead || this.default_wait_ahead;
      if (typeof _0x53979e == "string" && _0x53979e.includes(":")) {
        if (_0x53979e.includes("-")) {
          _0x53979e = new Date(_0x53979e).getTime();
        } else {
          let _0x44a9d4 = this.time("yyyy-MM-dd ");
          _0x53979e = new Date(_0x44a9d4 + _0x53979e).getTime();
        }
      }
      let _0x2728f8 = this.normalize_time(_0x53979e) - _0x2f99c2,
        _0x586c96 = this.time("hh:mm:ss.S", _0x2728f8),
        _0x150102 = Date.now();
      _0x150102 > _0x2728f8 && (_0x2728f8 += 86400000);
      let _0x1a6983 = _0x2728f8 - _0x150102;
      if (_0x1a6983 > _0x47d3a2) {
        const _0x154fa3 = {
          time: true
        };
        _0x56746e.log("离目标时间[" + _0x586c96 + "]大于" + _0x47d3a2 / 1000 + "秒,不等待", _0x154fa3);
      } else {
        const _0x28646a = {
          time: true
        };
        _0x56746e.log("离目标时间[" + _0x586c96 + "]还有" + _0x1a6983 / 1000 + "秒,开始等待", _0x28646a);
        while (_0x1a6983 > 0) {
          let _0x168fc = Math.min(_0x1a6983, _0x96d3ae);
          await this.wait(_0x168fc);
          _0x150102 = Date.now();
          _0x1a6983 = _0x2728f8 - _0x150102;
        }
        const _0xdf5bed = {
          time: true
        };
        _0x56746e.log("已完成等待", _0xdf5bed);
      }
    }
    async wait_gap_interval(_0x1bb1d6, _0x343efd) {
      let _0x52a49f = Date.now() - _0x1bb1d6;
      _0x52a49f < _0x343efd && (await this.wait(_0x343efd - _0x52a49f));
    }
  }(_0x4e14f3);
}