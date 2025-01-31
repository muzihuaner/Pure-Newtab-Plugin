/*v1.2.2*/
!
function(t, e) {
	var i = "",
	s = "?",
	n = "function",
	r = "undefined",
	o = "object",
	a = "string",
	l = "major",
	c = "model",
	h = "name",
	u = "type",
	d = "vendor",
	f = "version",
	g = "architecture",
	p = "console",
	v = "mobile",
	m = "tablet",
	w = "smarttv",
	b = "wearable",
	P = "embedded",
	y = {
		extend: function(t, e) {
			for (var i in e) - 1 !== "browser cpu device engine os".indexOf(i) && e[i].length % 2 === 0 && (t[i] = e[i].concat(t[i]));
			return t
		},
		has: function(t, e) {
			return "string" == typeof t ? -1 !== e.toLowerCase().indexOf(t.toLowerCase()) : !1
		},
		lowerize: function(t) {
			return t.toLowerCase()
		},
		major: function(t) {
			return typeof t === a ? t.split(".")[0] : e
		}
	},
	E = {
		rgx: function() {
			for (var t, i, s, a, l, c, h, u = 0,
			d = arguments; u < d.length && !c;) {
				var f = d[u],
				g = d[u + 1];
				if (typeof t === r) {
					t = {};
					for (a in g) g.hasOwnProperty(a) && (l = g[a], typeof l === o ? t[l[0]] = e: t[l] = e)
				}
				for (i = s = 0; i < f.length && !c;) if (c = f[i++].exec(this.getUA())) for (a = 0; a < g.length; a++) h = c[++s],
				l = g[a],
				typeof l === o && l.length > 0 ? 2 == l.length ? typeof l[1] == n ? t[l[0]] = l[1].call(this, h) : t[l[0]] = l[1] : 3 == l.length ? typeof l[1] !== n || l[1].exec && l[1].test ? t[l[0]] = h ? h.replace(l[1], l[2]) : e: t[l[0]] = h ? l[1].call(this, h, l[2]) : e: 4 == l.length && (t[l[0]] = h ? l[3].call(this, h.replace(l[1], l[2])) : e) : t[l] = h ? h: e;
				u += 2
			}
			return t
		},
		str: function(t, i) {
			for (var n in i) if (typeof i[n] === o && i[n].length > 0) {
				for (var r = 0; r < i[n].length; r++) if (y.has(i[n][r], t)) return n === s ? e: n
			} else if (y.has(i[n], t)) return n === s ? e: n;
			return t
		}
	},
	R = {
		browser: {
			oldsafari: {
				version: {
					"1.0": "/8",
					1.2 : "/1",
					1.3 : "/3",
					"2.0": "/412",
					"2.0.2": "/416",
					"2.0.3": "/417",
					"2.0.4": "/419",
					"?": "/"
				}
			}
		},
		device: {
			amazon: {
				model: {
					"Fire Phone": ["SD", "KF"]
				}
			},
			sprint: {
				model: {
					"Evo Shift 4G": "7373KT"
				},
				vendor: {
					HTC: "APA",
					Sprint: "Sprint"
				}
			}
		},
		os: {
			windows: {
				version: {
					ME: "4.90",
					"NT 3.11": "NT3.51",
					"NT 4.0": "NT4.0",
					2000 : "NT 5.0",
					XP: ["NT 5.1", "NT 5.2"],
					Vista: "NT 6.0",
					7 : "NT 6.1",
					8 : "NT 6.2",
					8.1 : "NT 6.3",
					10 : ["NT 6.4", "NT 10.0"],
					RT: "ARM"
				}
			}
		}
	},
	S = {
		browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [h, f], [/\s(opr)\/([\w\.]+)/i], [[h, "Opera"], f], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium)\/([\w\.-]+)/i], [h, f], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[h, "IE"], f], [/(edge)\/((\d+)?[\w\.]+)/i], [h, f], [/(yabrowser)\/([\w\.]+)/i], [[h, "Yandex"], f], [/(comodo_dragon)\/([\w\.]+)/i], [[h, /_/g, " "], f], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(qqbrowser)[\/\s]?([\w\.]+)/i], [h, f], [/(uc\s?browser)[\/\s]?([\w\.]+)/i, /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i, /JUC.+(ucweb)[\/\s]?([\w\.]+)/i], [[h, "UCBrowser"], f], [/(dolfin)\/([\w\.]+)/i], [[h, "Dolphin"], f], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[h, "Chrome"], f], [/XiaoMi\/MiuiBrowser\/([\w\.]+)/i], [f, [h, "MIUI Browser"]], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i], [f, [h, "Android Browser"]], [/FBAV\/([\w\.]+);/i], [f, [h, "Facebook"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [f, [h, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [f, h], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [h, [f, E.str, R.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [h, f], [/(navigator|netscape)\/([\w\.-]+)/i], [[h, "Netscape"], f], [/fxios\/([\w\.-]+)/i], [f, [h, "Firefox"]], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [h, f]],
		cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[g, "amd64"]], [/(ia32(?=;))/i], [[g, y.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[g, "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [[g, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[g, /ower/, "", y.lowerize]], [/(sun4\w)[;\)]/i], [[g, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [[g, y.lowerize]]],
		device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], [c, d, [u, m]], [/applecoremedia\/[\w\.]+ \((ipad)/], [c, [d, "Apple"], [u, m]], [/(apple\s{0,1}tv)/i], [[c, "Apple TV"], [d, "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [d, c, [u, m]], [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i], [c, [d, "Amazon"], [u, m]], [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i], [[c, E.str, R.device.amazon.model], [d, "Amazon"], [u, v]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [c, d, [u, v]], [/\((ip[honed|\s\w*]+);/i], [c, [d, "Apple"], [u, v]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [d, c, [u, v]], [/\(bb10;\s(\w+)/i], [c, [d, "BlackBerry"], [u, v]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i], [c, [d, "Asus"], [u, m]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[d, "Sony"], [c, "Xperia Tablet"], [u, m]], [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i], [[d, "Sony"], [c, "Xperia Phone"], [u, v]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [d, c, [u, p]], [/android.+;\s(shield)\sbuild/i], [c, [d, "Nvidia"], [u, p]], [/(playstation\s[34portablevi]+)/i], [c, [d, "Sony"], [u, p]], [/(sprint\s(\w+))/i], [[d, E.str, R.device.sprint.vendor], [c, E.str, R.device.sprint.model], [u, v]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], [d, c, [u, m]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i], [d, [c, /_/g, " "], [u, v]], [/(nexus\s9)/i], [c, [d, "HTC"], [u, m]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [c, [d, "Microsoft"], [u, p]], [/(kin\.[onetw]{3})/i], [[c, /\./g, " "], [d, "Microsoft"], [u, v]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s[6])/i], [c, [d, "Motorola"], [u, v]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [c, [d, "Motorola"], [u, m]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[d, "Samsung"], c, [u, m]], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i], [[d, "Samsung"], c, [u, v]], [/(samsung);smarttv/i], [d, c, [u, w]], [/\(dtv[\);].+(aquos)/i], [c, [d, "Sharp"], [u, w]], [/sie-(\w+)*/i], [c, [d, "Siemens"], [u, v]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i], [[d, "Nokia"], c, [u, v]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i], [c, [d, "Acer"], [u, m]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[d, "LG"], c, [u, m]], [/(lg) netcast\.tv/i], [d, c, [u, w]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i], [c, [d, "LG"], [u, v]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [c, [d, "Lenovo"], [u, m]], [/linux;.+((jolla));/i], [d, c, [u, v]], [/((pebble))app\/[\d\.]+\s/i], [d, c, [u, b]], [/android.+;\s(glass)\s\d/i], [c, [d, "Google"], [u, b]], [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i], [[c, /_/g, " "], [d, "Xiaomi"], [u, v]], [/(mobile|tablet);.+rv\:.+gecko\//i], [[u, y.lowerize], d, c]],
		engine: [[/windows.+\sedge\/([\w\.]+)/i], [f, [h, "EdgeHTML"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [h, f], [/rv\:([\w\.]+).*(gecko)/i], [f, h]],
		os: [[/microsoft\s(windows)\s(vista|xp)/i], [h, f], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [h, [f, E.str, R.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[h, "Windows"], [f, E.str, R.os.windows.version]], [/\((bb)(10);/i], [[h, "BlackBerry"], f], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i], [h, f], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i], [[h, "Symbian"], f], [/\((series40);/i], [h], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[h, "Firefox OS"], f], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i], [h, f], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[h, "Chromium OS"], f], [/(sunos)\s?([\w\.]+\d)*/i], [[h, "Solaris"], f], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i], [h, f], [/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i], [[h, "iOS"], [f, /_/g, "."]], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i], [[h, "Mac OS"], [f, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i], [h, f]]
	},
	k = function(e, s) {
		if (! (this instanceof k)) return new k(e, s).getResult();
		var n = e || (t && t.navigator && t.navigator.userAgent ? t.navigator.userAgent: i),
		r = s ? y.extend(S, s) : S;
		return this.getBrowser = function() {
			var t = E.rgx.apply(this, r.browser);
			return t.major = y.major(t.version),
			t
		},
		this.getCPU = function() {
			return E.rgx.apply(this, r.cpu)
		},
		this.getDevice = function() {
			return E.rgx.apply(this, r.device)
		},
		this.getEngine = function() {
			return E.rgx.apply(this, r.engine)
		},
		this.getOS = function() {
			return E.rgx.apply(this, r.os)
		},
		this.getResult = function() {
			return {
				ua: this.getUA(),
				browser: this.getBrowser(),
				engine: this.getEngine(),
				os: this.getOS(),
				device: this.getDevice(),
				cpu: this.getCPU()
			}
		},
		this.getUA = function() {
			return n
		},
		this.setUA = function(t) {
			return n = t,
			this
		},
		this.setUA(n),
		this
	};
	k.BROWSER = {
		NAME: h,
		MAJOR: l,
		VERSION: f
	},
	k.CPU = {
		ARCHITECTURE: g
	},
	k.DEVICE = {
		MODEL: c,
		VENDOR: d,
		TYPE: u,
		CONSOLE: p,
		MOBILE: v,
		SMARTTV: w,
		TABLET: m,
		WEARABLE: b,
		EMBEDDED: P
	},
	k.ENGINE = {
		NAME: h,
		VERSION: f
	},
	k.OS = {
		NAME: h,
		VERSION: f
	},
	t.UAInfo = k
} ("object" == typeof window ? window: this);
var AvatarDebug = !1,
RP = {
	options: {
		debug: !1,
		ns: "avt_",
		cookieDomain: "",
		permanentDays: 3650
	},
	state: null,
	cookieEnabled: null,
	isCookieEnabled: function() {
		if (null == RP.cookieEnabled) if (void 0 != navigator.cookieEnabled) RP.cookieEnabled = navigator.cookieEnabled ? 1 : 0;
		else {
			var t = "aaaaaa=";
			document.cookie = t,
			-1 == document.cookie.indexOf(t) ? RP.cookieEnabled = 0 : (RP.cookieEnabled = 1, document.cookie = t + ";expires=" + new Date(0).toUTCString())
		}
		return RP.cookieEnabled
	},
	getCookieDomain: function() {
		RP.domainSet || RP.setCookieDomain();
		var t = RP.options.cookieDomain || document.domain;
		return - 1 == t && (t = !1),
		t
	},
	setCookieDomain: function(t) {
		var e = !1;
		t || (t = document.domain, e = !0);
		var i = t.substr(0, 1);
		"." === i && (t = t.substr(1));
		var s = !1,
		n = t.substr(0, 4);
		"www." === n && (e && (t = t.substr(4)), s = !0);
		var r = !1;
		document.domain === t && (r = !0),
		t.split(".").length < 4 && t.split(".").length > 1 ? t = "." + t: 1 == t.split(".").length && (t = -1),
		RP.options.cookieDomain = t,
		RP.domainSet = !0,
		RP.debug("Cookie domain is: %s", t),
		RP.debug("---")
	},
	initializeStateManager: function() {
		RP.state || (RP.debug("initializing state manager..."), RP.state = new RP.stateManager)
	},
	registerStateStore: function(t, e) {
		return RP.state.registerStore(t, e)
	},
	setState: function(t, e, i) {
		return RP.state.set(t, e, i)
	},
	getState: function(t, e) {
		return RP.state.get(t, e)
	},
	clearState: function(t, e) {
		return RP.state.clear(t, e)
	},
	debug: function(t, e) {
		AvatarDebug && (window.console ? console.log(t) : e ? location.hash += t: location.hash = t)
	}
};
RP.stateManager = function() {
	RP.isCookieEnabled() ? (this.agency = RP.cookie, this.persist = this.persistCookie, this.retrieve = this.retrieveCookie) : window.localStorage && (this.agency = RP.storage, this.persist = this.persistStorage, this.retrieve = this.retrieveStorage)
},
RP.stateManager.prototype = {
	agency: null,
	stores: {},
	storeMeta: {},
	registerStore: function(t, e) {
		this.storeMeta[t] = {
			expiration: e
		}
	},
	persist: function() {},
	persistStorage: function(t) {
		var e = RP.util.serializeAssoc(this.stores[t]);
		this.agency.set(RP.options.ns + t, e, this.isPermanent(t))
	},
	persistCookie: function(t) {
		var e = RP.util.serializeAssoc(this.stores[t]);
		this.agency.set(RP.options.ns + t, e, this.getExpirationDays(t), "/")
	},
	retrieve: function() {},
	retrieveStorage: function(t) {
		return this.agency.get(RP.options.ns + t, this.isPermanent(t))
	},
	retrieveCookie: function(t) {
		var e = this.agency.get(RP.options.ns + t);
		return e[e.length - 1]
	},
	erase: function() {},
	eraseStorage: function(t) {
		this.agency.erase(RP.options.ns + t, this.isPermanent(t))
	},
	eraseCookie: function(t) {
		this.agency.erase(RP.options.ns + t)
	},
	isPermanent: function(t) {
		return this.storeMeta[t] && this.storeMeta[t].expiration === !0
	},
	getExpirationDays: function(t) {
		var e;
		return this.storeMeta.hasOwnProperty(t) && (e = this.storeMeta[t].expiration, e === !0 && (e = RP.options.permanentDays)),
		e
	},
	isPresent: function(t) {
		return this.stores.hasOwnProperty(t) ? !0 : void 0
	},
	set: function(t, e, i) {
		this.isPresent(t) || this.load(t),
		e ? this.stores[t][e] = i: this.stores[t] = i,
		this.agency && this.persist(t)
	},
	replaceStore: function(t, e) {
		t && e && (this.stores[t] = e, this.agency && this.persist(t))
	},
	get: function(t, e) {
		return this.isPresent(t) || this.load(t),
		e ? this.stores[t].hasOwnProperty(e) ? this.stores[t][e] : void 0 : this.stores[t]
	},
	load: function(t) {
		var e = "";
		if (this.agency) {
			var i = this.retrieve(t);
			i && (e = RP.util.parseAssoc(i))
		}
		e ? this.stores[t] = e: (this.stores[t] = {},
		RP.debug("No state for store: %s was found. Nothing to Load.", t))
	},
	clear: function(t, e) {
		if (e) {
			var i = this.get(t);
			i && i.hasOwnProperty(e) && (delete i[e], this.replaceStore(t, i))
		} else delete this.stores[t],
		this.agency && this.erase(RP.options.ns + t)
	}
},
RP.storage = {
	getStorage: function(t) {
		return window[t ? "localStorage": "sessionStorage"]
	},
	set: function(t, e, i) {
		RP.storage.getStorage(i).setItem(t, e)
	},
	get: function(t, e) {
		return RP.storage.getStorage(e).getItem(t)
	},
	erase: function(t, e) {
		RP.storage.getStorage(e).removeItem(t)
	},
	eraseMultiples: function(t, e) {
		for (var i = 0; i < t.length; i++) RP.storage.erase(t[i], e)
	}
},
RP.cookie = {
	Cache: null,
	set: function(t, e, i, s, n) {
		if (i) {
			var r = new Date;
			r.setTime(r.getTime() + 24 * i * 60 * 60 * 1e3)
		}
		var o = RP.getCookieDomain();
		document.cookie = t + "=" + escape(e) + (i ? "; expires=" + r.toGMTString() : "") + (s ? "; path=" + s: "") + (o ? "; domain=" + o: "") + (n ? "; secure": "")
	},
	readAlls: function() {
		RP.debug("Reading all cookies...");
		var t = RP.cookie.Cache = {},
		e = document.cookie.split(";");
		if (e) {
			RP.debug(document.cookie);
			for (var i = 0; i < e.length; i++) {
				var s = RP.util.trim(e[i]),
				n = RP.util.strpos(s, "="),
				r = s.substring(0, n),
				o = s.substring(n + 1, s.length);
				t.hasOwnProperty(r) || (t[r] = []),
				t[r].push(unescape(o))
			}
			return t
		}
	},
	get: function(t, e) {
		RP.debug("Attempting to read cookie: %s", t);
		var i = e && RP.cookie.Cache ? RP.cookie.Cache: RP.cookie.readAlls();
		return i.hasOwnProperty(t) ? i[t] : ""
	},
	erase: function(t, e) {
		RP.debug(document.cookie),
		e || (e = RP.getCookieDomain()),
		RP.debug("erasing cookie: " + t + " in domain: " + e),
		RP.cookie.set(t, "", -1, "/", e);
		var i = RP.cookie.get(t);
		if (i) {
			var s = e.substr(0, 1);
			if (RP.debug("period: " + s), "." === s) {
				var n = e.substr(1);
				RP.debug("erasing " + t + " in domain2: " + n),
				RP.cookie.set(t, "", -2, "/", n)
			} else RP.debug("erasing " + t + " in domain3: " + e),
			RP.cookie.set(t, "", -2, "/", e)
		}
	},
	eraseMultiples: function(t, e) {
		for (var i = 0; i < t.length; i++) RP.cookie.erase(t[i], e)
	}
},
RP.util = {
	params: null,
	strpos: function(t, e, i) {
		var s = (t + "").indexOf(e, i || 0);
		return - 1 === s ? !1 : s
	},
	parseAssoc: function(t) {
		var e = new Object,
		i = unescape(t),
		s = i.split("|||");
		for (var n in s) if (s.hasOwnProperty(n)) {
			var r = s[n].split("=>");
			e[r[0]] = r[1]
		}
		return e
	},
	serializeAssoc: function(t) {
		var e = "";
		for (var i in t) e += i + "=>" + t[i],
		e += "|||";
		return e.length && (e = e.substr(0, e.length - 3)),
		e
	},
	stripWwwFromDomain: function(t) {
		var e = t.split(".")[0];
		return "www" === e ? t.substring(4) : t
	},
	trim: function(t, e) {
		var i, s = 0,
		n = 0;
		for (t += "", e ? (e += "", i = e.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, "$1")) : i = " \n\r	\f聽鈥€鈥佲€傗€冣€勨€呪€嗏€団€堚€夆€娾€媆u2028\u2029銆€", s = t.length, n = 0; s > n; n++) if ( - 1 === i.indexOf(t.charAt(n))) {
			t = t.substring(n);
			break
		}
		for (s = t.length, n = s - 1; n >= 0; n--) if ( - 1 === i.indexOf(t.charAt(n))) {
			t = t.substring(0, n + 1);
			break
		}
		return - 1 === i.indexOf(t.charAt(0)) ? t: ""
	},
	rand: function(t, e) {
		var i = arguments.length;
		if (0 === i) t = 0,
		e = 2147483647;
		else if (1 === i) throw new Error("Warning: rand() expects exactly 2 parameters, 1 given");
		return Math.floor(Math.random() * (e - t + 1)) + t
	},
	getHost: function(t) {
		var e = t.match(/^https?:\/\/([\w-.]+)(:\d+)?\//i);
		return e[1]
	},
	isLowIE: function() {
		var t = document.all && RP.util.getInternetExplorerVersion() < 9;
		return RP.util.isLowIE = function() {
			return t
		},
		t
	},
	getInternetExplorerVersion: function() {
		var t = 100;
		if ("Microsoft Internet Explorer" == navigator.appName) {
			var e = navigator.userAgent,
			i = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
			null != i.exec(e) && (t = parseFloat(RegExp.$1));
			var s = e.match(i);
			s && (t = parseFloat(s[1]))
		}
		return t
	}
},
RP.evt = function() {
	this.properties = {},
	this.set("ts", RP.util.getTimeStamp())
},
RP.evt.prototype = {
	get: function(t) {
		return this.properties.hasOwnProperty(t) ? this.properties[t] : void 0
	},
	set: function(t, e) {
		this.properties[t] = e
	},
	setEventType: function(t) {
		this.set("evt_type", t)
	},
	getProperties: function() {
		return this.properties
	},
	merge: function(t) {
		for (param in t) t.hasOwnProperty(param) && this.set(param, t[param])
	},
	isSet: function(t) {
		return this.properties.hasOwnProperty(t) ? !0 : void 0
	}
},
RP.tracker = function(t) {
	if (this.options = {
		repeatAfterFail: 0,
		userStoreName: "v",
		sessionStoreName: "s",
		sessionLength: 1800,
		cookieDomain: !1,
		serverUrl: "",
		maxLengthForGet: 2e3
	},
	t) for (var e in t) this.options[e] = t[e];
	this.startTime = RP.util.getTimeStamp(),
	RP.registerStateStore(this.options.userStoreName, !0),
	RP.registerStateStore(this.options.sessionStoreName, null),
	this.page = new RP.evt
},
RP.tracker.prototype = {
	id: "",
	siteId: "",
	init: 0,
	globalEventProperties: {},
	startTime: null,
	isNewSessionFlag: !1,
	setDebug: function(t) {
		RP.options.debug = t
	},
	getCurrentUrl: function() {
		return document.URL
	},
	_assembleRequestUrl: function(t) {
		var e = this.getLoggerEndpoint();
		e += -1 === e.indexOf("?") ? "?": "&";
		var i = e + t;
		return i
	},
	getIframeDocument: function(t) {
		var e = null;
		return t.contentDocument ? e = t.contentDocument: t.contentWindow && t.contentWindow.document ? e = t.contentWindow.document: t.document && (e = t.document),
		null == e && RP.debug("Document not found, append the parent element to the DOM before creating the IFrame"),
		e.open(),
		e.close(),
		e
	},
	inferTrafficAttribution: function() {
		var t, e = document.referrer;
		if (e) {
			var i = RP.util.getHost(e);
			document.domain != i && (t = RP.util.stripWwwFromDomain(i))
		}
		if (RP.setState(this.options.sessionStoreName, "source", t || "direct"), this.setGlobalEventProperty("source", t || "direct"), t) RP.setState(this.options.sessionStoreName, "pref", ""),
		this.setGlobalEventProperty("pref", "");
		else {
			var s = RP.getState(this.options.sessionStoreName, "ref");
			RP.setState(this.options.sessionStoreName, "pref", s),
			this.setGlobalEventProperty("pref", s)
		}
		RP.setState(this.options.sessionStoreName, "ref", e || ""),
		this.setGlobalEventProperty("ref", e || "")
	},
	setNumberPriorSessions: function() {
		RP.debug("setting number of prior sessions");
		var t = RP.getState(this.options.userStoreName, "nps");
		t || (t = "0"),
		this.isNewSessionFlag === !0 && (t = 1 * t, t++, RP.setState(this.options.userStoreName, "nps", t, !0)),
		this.setGlobalEventProperty("nps", t)
	},
	setVisitorId: function() {
		var t = RP.getState(this.options.userStoreName, "vid");
		t || (t = RP.util.generateRandomGuid(15), this.globalEventProperties.newv = !0, RP.setState(this.options.userStoreName, "vid", t), RP.debug("Creating new visitor id")),
		this.setGlobalEventProperty("vid", t)
	},
	setFirstSessionTimestamp: function() {
		var t = RP.getState(this.options.userStoreName, "fsts");
		t || (t = this.page.get("ts"), RP.debug("setting fsts value: %s", t), RP.setState(this.options.userStoreName, "fsts", t, !0)),
		this.setGlobalEventProperty("fsts", t);
		var e = Math.round((this.page.get("ts") - t) / 86400);
		RP.setState(this.options.userStoreName, "dsfs", e),
		this.setGlobalEventProperty("dsfs", e)
	},
	setLastRequestTime: function() {
		var t = RP.getState(this.options.sessionStoreName, "lsts");
		RP.debug("lsts from cookie: %s", t),
		RP.debug("setting lsts global property of %s", t),
		this.setGlobalEventProperty("lsts", t),
		RP.setState(this.options.sessionStoreName, "lsts", this.page.get("ts"), !0)
	},
	setSessionId: function() {
		var t = "",
		e = this.isNewSession(this.page.get("ts"), this.getGlobalEventProperty("lsts"));
		if (e) {
			var i = RP.getState(this.options.sessionStoreName, "sid");
			i && (this.globalEventProperties.psid = i),
			this.resetSessionState(),
			t = RP.util.generateRandomGuid10(10),
			this.globalEventProperties.sid = t,
			this.globalEventProperties.news = !0,
			this.isNewSessionFlag = !0,
			RP.setState(this.options.sessionStoreName, "sid", t, !0)
		} else t = RP.getState(this.options.sessionStoreName, "sid"),
		this.globalEventProperties.sid = t;
		this.getGlobalEventProperty("sid") || (this.resetSessionState(), t = RP.util.generateRandomGuid10(20), this.globalEventProperties.sid = t, this.globalEventProperties.news = !0, this.isNewSessionFlag = !0, RP.setState(this.options.sessionStoreName, "sid", t, !0))
	},
	resetSessionState: function() {
		var t = RP.getState(this.options.sessionStoreName, "lsts");
		RP.clearState(this.options.sessionStoreName),
		RP.setState(this.options.sessionStoreName, "lsts", t)
	},
	isNewSession: function(t, e) {
		t || (t = RP.util.getTimeStamp()),
		e || (e = 0);
		var i = (t - e) / 1e3,
		s = this.options.sessionLength;
		return s > i ? (RP.debug("This request is part of a active session."), !1) : (RP.debug("This request is the start of a new session. Prior session expired."), !0)
	},
	getGlobalEventProperty: function(t) {
		return this.globalEventProperties[t]
	},
	setGlobalEventProperty: function(t, e) {
		this.globalEventProperties[t] = e
	},
	deleteGlobalEventProperty: function(t) {
		this.globalEventProperties.hasOwnProperty(t) && delete this.globalEventProperties[t]
	},
	setPageProperties: function(t) {
		for (var e in t) t.hasOwnProperty(e) && this.page.set(e, t[e])
	},
	addGlobalPropertiesToEvent: function(t, e) {
		for (var i in this.globalEventProperties) this.globalEventProperties.hasOwnProperty(i) && !t.isSet(i) && t.set(i, this.globalEventProperties[i])
	}
},
function(t, e) {
	function i(t, e, i) {
		var s = 0;
		return function() {
			var n = (new Date).getTime();
			n - s > i && (s = n, e.apply(t, arguments))
		}
	}
	function s(t, e, i, s) {
		this.ctnr = t,
		this.handler = e,
		this.ctx = s,
		i.ratio && i.ratio > 0 && (i.ratio > 1 && (i.ratio = 1), this.minRatio = i.ratio),
		i.irregular && (this.irregular = i.irregular, this.initItemHt = this.initItemHtIrg, this.getMaxIndex = this.getMaxIndexIrgOrDesc, this.initItemDimen = this.initItemDimenIrgOrDesc, this.initEffectiveHt = this.initEffectiveHtIrgOrDesc),
		i.subSelector && (this.subSelector = i.subSelector, this.getMaxIndex = this.getMaxIndexIrgOrDesc, this.initItemDimen = this.initItemDimenIrgOrDesc, this.initEffectiveHt = this.initEffectiveHtIrgOrDesc, this.calcItemHt = this.calcItemHtDescReg),
		this.init()
	}
	var n = "",
	r = "",
	o = "",
	a = "Avatar",
	l = 5,
	c = "unknown",
	h = 12,
	u = {
		IMEI: "imei",
		UUID: "uuid"
	};
	Function.prototype.bind || (Function.prototype.bind = function(t) {
		var e = this;
		return function() {
			e.apply(t, arguments)
		}
	}),
	Array.prototype.indexOf || (Array.prototype.indexOf = function(t) {
		for (var e = 0,
		i = this.length; i > e; e++) if (this[e] === t) return e;
		return - 1
	});
	var d, f = function(t, e) { (f = document.body.classList ?
		function(t, e) {
			return t.classList.contains(e)
		}: function(t, e) {
			return new RegExp("(s|^)" + e + "(s|$)").test(t.className)
		})(t, e)
	},
	g = window.getComputedStyle ?
	function(t, e) {
		return window.getComputedStyle(t).getPropertyValue(e)
	}: function(t, e) {
		var i, s; (i = e.indexOf("-")) > -1 && (s = e[i + 1]) && (e = e.substr(0, i) + s.toUpperCase() + e.substr(i + 2));
		var n = t.currentStyle[e];
		if (/^[+-]?(\d+\.|)\d+(?!px)[\w%]*$/.test(n)) {
			var e = t.style,
			r = t.runtimeStyle,
			o = e.left,
			a = r && r.left;
			a && (r.left = t.currentStyle.left),
			e.left = n,
			n = e.pixelLeft,
			e.left = o,
			a && (rsStyle.left = a)
		}
		return n
	};
	"object" == typeof t[a] && t[a] instanceof Array && (d = t[a].slice(), t[a] = null);
	var p = {
		click: function(t, e, s) {
			var n = s.throttle;
			n || (n = v.config.throttle.get()),
			n && (e = i(t, e, n)),
			RP.util.addEvent(t, "click", e)
		},
		show: function(t, e, i) {
			document.querySelectorAll && ScrollShow.add(t, e, i)
		}
	};
	ScrollShow = {
		listening: !1,
		scrollHdlr: null,
		resizer: null,
		closeHdlr: null,
		handler: null,
		items: [],
		pollTimer: null,
		scrollTimer: null,
		maxTop: 0,
		winHt: 0,
		docHt: 0,
		pollInterval: 1500,
		listen: function() {
			this.scrollHdlr || (this.scrollHdlr = this.scroll.bind(this), this.closeHdlr = this.close.bind(this), this.resizer = this.resize.bind(this), this.poller = this.poll.bind(this), this.bodyMargin = parseFloat(g(document.body, "margin-top")), isNaN(this.bodyMargin) && (this.bodyMargin = 0)),
			this.pollTimer || (this.pollTimer = window.setInterval(this.poller, this.pollInterval)),
			RP.util.addEvent(window, "resize", this.resizer),
			this.resize(),
			document.all ? RP.util.addEvent(window, "scroll", this.scrollHdlr) : RP.util.addEvent(document, "scroll", this.scrollHdlr),
			this.scroll(),
			v.registerCloseHandler(this.closeHdlr),
			this.listening = !0
		},
		stopListen: function() {
			RP.util.detachEvent(document, "scroll", this.scrollHdlr),
			RP.util.detachEvent(window, "resize", this.resizer),
			v.removeCloseHandler(this.closeHdlr),
			this.listening = !1
		},
		terminate: function() {
			this.listening && this.stopListen(),
			window.clearInterval(this.pollTimer),
			this.pollTimer = null
		},
		add: function(t, e, i) {
			this.listening || this.listen();
			var n = new s(t, e, i, this);
			this.items.push(n)
		},
		resize: function(t) {
			var e = document.documentElement.clientHeight;
			this.winHt != e && (this.winHt = e, this.top = this.maxTop = document.body.scrollTop || document.documentElement.scrollTop, this.visualChanged = !0)
		},
		scroll: function() {
			this.top = document.body.scrollTop || document.documentElement.scrollTop,
			this.top > this.maxTop && (this.maxTop = this.top, this.visualChanged = !0)
		},
		poll: function() {
			for (var t, e = 0,
			i = this.items.length; i > e; e++) {
				var s = this.items[e];
				s.checkLive() ? !t && s.getCheckHeight() && (t = s, s.height = -1) : (this.items.splice(e, 1), e--, i--)
			}
			var n = document.body.scrollHeight;
			if (!i) return this.terminate();
			if (t) {
				n < this.docHt && (this.top = this.maxTop = document.body.scrollTop || document.documentElement.scrollTop);
				for (var e = 0,
				i = this.items.length; i > e; e++) {
					var s = this.items[e];
					s.getCheckTop()
				}
			}
			this.docHt = n;
			for (var r = 0,
			e = 0,
			i = this.items.length; i > e; e++) {
				var s = this.items[e];
				s.isEmpty() ? r++:(s.checkContent() ? (s.initState(), s.getCheckVisual() && s.process()) : !s.isDone() && (t || this.visualChanged) && s.getCheckVisual() && s.process(), s.isDone() && r++)
			}
			this.visualChanged = !1,
			r == i ? this.listening && this.stopListen() : this.listening || this.listen()
		},
		close: function() {
			window.clearInterval(this.pollTimer),
			this.poll()
		}
	},
	s.prototype = {
		ctnr: null,
		handler: null,
		ctx: null,
		doneIndex: -1,
		height: 0,
		visibleHt: 0,
		itemHt: 0,
		itemHtMrg: 0,
		invalidHtTop: 0,
		topPadding: 0,
		offsetTop: 0,
		itemMargin: null,
		descendents: null,
		keyDisplay: "SS_DP",
		keyHt: "SS_HT",
		keyOffsetTop: "SS_TP",
		keyUpper: "SS_UP",
		keyMinUpper: "SS_MP",
		keyIndex: "SS_INDEX",
		minRatio: .5,
		fillList: function() {
			this.descendents = this.ctnr.querySelectorAll(this.subSelector)
		},
		getCount: function() {
			return this.descendents ? this.descendents.length: this.ctnr.childElementCount || this.ctnr.children.length
		},
		getList: function() {
			return this.descendents || this.ctnr.children
		},
		isEmpty: function() {
			return ! this.height || !this.getCount()
		},
		isDone: function() {
			return this.doneIndex + 1 == this.getCount()
		},
		init: function() {
			var t = g(this.ctnr, "position");
			"static" == t && (this.ctnr.style.position = "relative"),
			this.initState(),
			this.getCheckTop(),
			this.getCheckHeight(),
			this.removed = !1,
			this.getCount() && this.getCheckVisual() && this.process()
		},
		initState: function() {
			this.subSelector && this.fillList(),
			this.getCount() && (this.seekDoneIndex(), (this.descendents || this.irregular) && this.initOffsetTop(), this.initItemDimen(), this.initEffectiveHt())
		},
		initOffsetTop: function() {
			for (var t = this.getList(), e = 0, i = t.length; i > e; e++) this.setOffsetTop(t[e])
		},
		getCheckTop: function() {
			var t = this.ctnr,
			e = 0;
			do e += t.offsetTop,
			t = t.offsetParent;
			while (t && t != document.body);
			return e += this.ctx.bodyMargin,
			e != this.offsetTop ? (this.offsetTop = e, !0) : !1
		},
		getCheckHeight: function() {
			var t = this.ctnr.clientHeight;
			return this.height != t ? (this.height = t, this.descendents && this.fillList(), !0) : !1
		},
		initEffectiveHtIrgOrDesc: function() {
			var t = this.getList(),
			e = t[t.length - 1];
			this.effectiveHt = e[this.keyUpper]
		},
		initEffectiveHt: function() {
			var t = this.getList(),
			e = t[t.length - 1];
			this.effectiveHt = e.offsetTop + this.itemHt
		},
		seekDoneIndex: function() {
			var t = this.getCount();
			this.doneIndex = t - 1;
			for (var e = this.getList(), i = 0; t > i; i++) if (!e[i][this.keyDisplay]) {
				this.doneIndex = i - 1;
				break
			}
		},
		checkDoneIndex: function() {
			if (this.doneIndex > -1) {
				var t = this.getList();
				return ! t[this.doneIndex] || !t[this.doneIndex][this.keyDisplay]
			}
			return ! 1
		},
		checkLive: function() {
			return document.body.contains(this.ctnr)
		},
		checkContent: function() {
			return this.getCheckHeight() || this.checkDoneIndex()
		},
		initItemDimen: function() {
			null == this.itemMargin && this.getItemMargin(),
			this.itemHt || this.initItemHt()
		},
		initItemDimenIrgOrDesc: function() {
			this.initItemHt();
			for (var t = this.getList(), e = 0, i = t.length; i > e; e++) {
				var s = t[e],
				n = this.getItemHt(s);
				s[this.keyMinUpper] = s[this.keyOffsetTop] + n * this.minRatio,
				s[this.keyUpper] = s[this.keyOffsetTop] + n
			}
			this.visibleHt = this.invalidHtTop = t[0][this.keyMinUpper]
		},
		getItemHt: function(t) {
			return this.itemHt || t[this.keyHt]
		},
		initItemHt: function() {
			this.calcItemHt();
			var t, e = this.getList()[0];
			t = "IMG" == e.tagName ? [e] : e.getElementsByTagName("img");
			for (var i = this.calcItemHt.bind(this), s = 0, n = t.length; n > s; s++) t[s].onload = i
		},
		initItemHtIrg: function() {
			for (var t = this.getList(), e = 0, i = t.length; i > e; e++) {
				var s = t[e];
				s[this.keyHt] = s.offsetHeight
			}
		},
		calcItemHt: function() {
			var t = this.ctnr.firstElementChild || this.ctnr.children[0];
			this.itemHt = t.offsetHeight;
			var e = t.offsetTop;
			this.topPadding = e - this.itemMargin,
			this.evenMinHt = this.itemHt * this.minRatio,
			this.evenMinHtMrg = this.evenMinHt + this.itemMargin,
			this.visibleHt = this.invalidHtTop = this.evenMinHt + e,
			this.itemHtMrg = this.itemHt + this.itemMargin
		},
		calcItemHtDescReg: function() {
			this.itemHt = this.getList()[0].offsetHeight
		},
		getItemMargin: function() {
			var t = g(this.ctnr.firstElementChild || this.ctnr.children[0], "margin-top");
			t && (t = parseFloat(t), this.itemMargin = t),
			t = g(this.ctnr.firstElementChild || this.ctnr.children[0], "margin-bottom"),
			t && (t = parseFloat(t), t > this.itemMargin && (this.itemMargin = t))
		},
		setOffsetTop: function(t) {
			var e = 0,
			i = t;
			do e += i.offsetTop,
			i = i.offsetParent;
			while (i && i != this.ctnr);
			t[this.keyOffsetTop] = e
		},
		getMaxIndexIrgOrDesc: function() {
			var t = this.getList(),
			e = t[this.doneIndex];
			if (e && this.visibleHt <= e[this.keyUpper]) return this.doneIndex;
			for (var i = this.doneIndex + 1,
			s = t.length; s > i; i++) {
				var e = t[i];
				if (e[this.keyMinUpper] >= this.visibleHt) return this.visibleHt = e[this.keyMinUpper],
				i - 1
			}
			return this.visibleHt = this.effectiveHt,
			s - 1
		},
		getMaxIndex: function() {
			var t = this.visibleHt - this.topPadding,
			e = t / this.itemHtMrg,
			i = Math.floor(e),
			s = e - i;
			return this.itemHtMrg * s > this.evenMinHtMrg && i++,
			i == this.getCount() ? this.visibleHt = this.effectiveHt: this.visibleHt = this.itemHtMrg * i + this.evenMinHtMrg + this.topPadding,
			i - 1
		},
		getCheckVisual: function() {
			var t = this.ctx.winHt + this.ctx.maxTop - this.offsetTop;
			return t < this.invalidHtTop ? t = this.invalidHtTop: t > this.effectiveHt && (t = this.effectiveHt),
			t > this.visibleHt ? (this.visibleHt = t, !0) : !1
		},
		process: function() {
			var t = this.getMaxIndex();
			if (t > this.doneIndex) {
				var e, i = this.doneIndex + 1;
				if (document.all) {
					e = [];
					for (var s = this.getList(), n = i; t >= n; n++) e.push(s[n])
				} else e = Array.prototype.slice.call(this.getList(), i, t + 1);
				for (var n = 0,
				r = e.length; r > n; n++) e[n][this.keyIndex] = i + n,
				e[n][this.keyDisplay] = !0;
				this.handler({
					target: e
				}),
				this.doneIndex = t
			}
		}
	};
	var v = {
		worker: null,
		system: null,
		loadHandler: null,
		unloadHandler: null,
		clickHandler: null,
		preloadTrackers: [],
		trackerList: [],
		occuredEvents: [],
		closeHandlers: [],
		leaving: !1,
		setuped: !1,
		config: {
			delay: {
				val: 100,
				get: function() {
					return this.val
				},
				set: function(t) {
					this.val = t
				}
			},
			appKey: {
				val: "ak",
				get: function() {
					return this.val
				},
				set: function(t) {
					this.val = t
				}
			},
			throttle: {
				val: 0,
				get: function() {
					return this.val
				},
				set: function(t) {
					this.val = t
				}
			},
			startTime: {
				val: 0,
				get: function() {
					return this.val
				},
				set: function(t) {
					this.val = t
				}
			},
			trackStayTime: {
				val: !0,
				get: function() {
					return this.val
				},
				set: function(t) {
					this.val = t
				}
			},
			pageId: {
				get: function() {
					return v.config.PVInfo.val.EVENT_ACTION
				},
				set: function(t) {
					v.config.PVInfo.val.EVENT_ACTION = t
				}
			},
			PVInfo: {
				val: {},
				init: function() {
					this.val.ref = v.getDeepRef(),
					this.val.ua = navigator.userAgent,
					this.val.EVENT_ACTION = encodeURIComponent(window.location.pathname.substring(1)).substring(0, 100) || "-"
				},
				get: function() {
					return this.val
				},
				set: function(t) {
					for (var e in t) this.val[e] = t[e]
				}
			},
			channel: {
				val: null,
				get: function() {
					return this.val
				},
				set: function(t) {
					this.val = t
				}
			},
			versionName: {
				val: "-",
				get: function() {
					return this.val
				},
				set: function(t) {
					this.val = t
				}
			},
			deviceId: {
				val: null,
				get: function() {
					return this.val
				},
				set: function(t) {
					this.val = t
				}
			},
			versionCode: {
				val: 0,
				get: function() {
					return this.val
				},
				set: function(t) {
					this.val = t
				}
			},
			deviceModel: {
				val: null,
				get: function() {
					return this.val
				},
				set: function(t) {
					this.val = t
				}
			},
			manufacturer: {
				val: null,
				get: function() {
					return this.val
				},
				set: function(t) {
					this.val = t
				}
			},
			cookieDomain: {
				init: function() {
					this.set()
				},
				get: function() {
					return RP.options.cookieDomain
				},
				set: function(t) {
					RP.setCookieDomain(t)
				}
			},
			serverUrl: {
				init: function() {
					this.set(("https:" == document.location.protocol ? "https": "http") + "://fsr.lenovomm.com/reaper/server/image2/_t.gif")
				},
				get: function() {
					return v.worker.options.serverUrl
				},
				set: function(t) {
					v.worker.options.serverUrl = t
				}
			},
			session: {
				init: function() {
					this.set(1800)
				},
				get: function() {
					return v.worker.options.sessionLength
				},
				set: function(t) {
					v.worker.options.sessionLength = t
				}
			},
			getLimit: {
				init: function() {
					this.set(2036)
				},
				get: function() {
					return v.worker.options.maxLengthForGet
				},
				set: function(t) {
					v.worker.options.maxLengthForGet = t
				}
			},
			repeat: {
				init: function() {
					this.set(3)
				},
				get: function() {
					return v.worker.options.repeatAfterFail
				},
				set: function(t) {
					v.worker.options.repeatAfterFail = t
				}
			},
			events: {
				val: null,
				get: function() {
					return this.val
				},
				set: function(t) {
					this.val = t
				}
			},
			init: {
				val: null,
				get: function() {
					return this.val
				},
				set: function(t) {
					this.val = t
				}
			}
		},
		dataTpl: {
			ak: "",
			di: {
				DEVICE_ID_TYPE: "",
				DEVICE_ID: "",
				CHANNEL: "",
				OS_VERSION: "",
				DEVICE_MODEL: "",
				MANUFACTURER: "",
				RESOLUTION: "",
				IMSI: "",
				VERSION_NAME: "",
				VERSION_CODE: ""
			},
			wi: {
				USER_UUID: "vid",
				SESSION_ID: "sid",
				LOGIN_NAME: "",
				PAGE_TYPE: "page_type",
				VISIT_TIME_DIFF: "dif",
				LOG_TIME: "ts",
				RESIDENCE_TIME: "residence_time",
				VISIT_URI: "url",
				VISIT_SERIAL: "serial",
				SOURCE_WAY: "source",
				OTHERS: "extraWebInfo"
			},
			ci: null,
			bi: {
				BROWSER_NAME: "",
				BROWSER_VS: "",
				COOKIES_ENABLED: "",
				USER_LANGUAGE: ""
			}
		},
		getOption: function(t) {
			return t ? this.config[t].get(this) : void 0
		},
		setOption: function(t, e, i) {
			switch (t) {
			case "appKey":
				e = RP.util.zeroFill(e, h, "_"),
				this.dataTpl.ak = e,
				i || this.trackPageView();
				break;
			case "trackStayTime":
				i || (e ? this.addLogClose() : this.removeLogClose())
			}
			this.config[t] && this.config[t].set(e, this)
		},
		setOptions: function(t, e) {
			for (var i in t) this.setOption(i, t[i], e)
		},
		getState: function(t, e) {
			return RP.getState(t, e) || ""
		},
		getProperty: function(t) {
			return this.worker.getGlobalEventProperty(t) || ""
		},
		setup: function(e) {
			RP.initializeStateManager(),
			this.worker || this.createWorker();
			var i = this.config;
			for (var s in i) i[s].init && i[s].init();
			e ? this.setOptions(e, !0) : RP.debug("config is not supplied"),
			this.system = (new UAInfo).getResult(),
			this.initDataGlobal();
			var n = this.config.init.get();
			n && n();
			var r = this.config.startTime.get();
			r && (this.worker.startTime = r, this.worker.page.set("ts", r)),
			this.unloadHandler = this.onClose.bind(this),
			RP.util.addEvent(t, "beforeunload", this.unloadHandler),
			this.preloadTrackers.length && this.applyPreload(),
			this.setuped = !0,
			this.config.trackStayTime.get() && this.addLogClose(),
			this.trackPageView(),
			r && this.initLoadEvent(),
			this.handleOccuredEvents()
		},
		handleOccuredEvents: function() {
			var t = this.config.events.get(),
			e = 0;
			if (t) for (var i in t) t[i] && (t[i].remover && t[i].remover(), t[i].list && t[i].list.length ? e++:delete t[i]);
			if (e) {
				var s = this.trackerList;
				if (s.length) for (var n = 0,
				r = s.length; r > n; n++) {
					var o = s[n],
					a = o[0],
					l = o[1];
					for (var i in t) if (l[i]) for (var c = t[i].list, h = 0, u = c.length; u > h; h++) {
						var d = c[h];
						a.contains(d.target) && l[i](d)
					}
				}
			}
		},
		applyPreload: function() {
			for (var t = this.preloadTrackers,
			e = 0,
			i = t.length; i > e; e++) {
				var s = t[e];
				this.apply.apply(this, s)
			}
		},
		createWorker: function() {
			var t = this.worker = new RP.tracker;
			t.manageState(),
			t.inferTrafficAttribution(),
			this.initEvent(t.page)
		},
		getUserId: function() {
			return this.worker || this.createWorker(),
			this.worker.setVisitorId(),
			this.getProperty("vid")
		},
		getDeepRef: function() {},
		createCustomInfo: function(t, e) {
			var i = {
				category: void 0 != e.category ? e.category: "",
				action: void 0 != e.action ? e.action: "",
				label: void 0 != e.label ? e.label: "",
				params: void 0 != e.params ? e.params: {},
				value: void 0 != e.value ? e.value: ""
			},
			s = l,
			n = i.params;
			for (var r in n) s--;
			for (; s > 0;) n["k" + s] = "",
			s--;
			t.set("ci", i)
		},
		getReferrerInfo: function() {
			var t = [["Google", "q", /\.google\./], ["Yahoo!", "p", /search\.yahoo\./], ["MSN", "q", /\.msn\./], ["Live", "q", /\.live\./], ["AlltheWeb", "q", /\.alltheweb\./], ["AOL", "query", /\.aol\./], ["Ask", "q", /\.ask\./], ["AltaVista", "q", /\.altavista\./], ["BBC", "q", /\.bbc\./], ["HotBot", "query", /\.hotbot\./], ["Lycos", "query", /\.lycos\./], ["Bing", "q", /bing\./], ["Daum", "q", /\.daum\./], ["Eniro", "search_word", /\.eniro\./], ["Naver", "query", /\.naver\./], ["About", "terms", /\.about\./], ["Mamma", "query", /\.mamma\./], ["Alltheweb", "q", /\.alltheweb\./], ["Voila", "rdata", /\.voila\./], ["Baidu", "wd", /\.baidu\./], ["Alice", "qs", /\.alice\./], ["Yandex", "text", /\.yandex\./], ["Search", "q", /\.search\./], ["PCHome", "q", /\.pchome\./], ["Ozu", "q", /\.ozu\./], ["Terra", "query", /\.terra\./], ["Mynet", "q", /\.mynet\./], ["Ekolay", "q", /\.ekolay\./], ["Rambler", "words", /\.rambler\./]],
			e = "",
			i = "",
			s = window.decodeURI ? window.decodeURI(document.referrer) : document.referrer;
			if (s && "" !== s) {
				if (s.match("://" + window.location.host + "[^w]")) s = "";
				else for (var n = 0; n < t.length; n++) if (s.match(t[n][2])) {
					var r = s.match(t[n][1] + "=([^&$]{2,})");
					r && (e = r[1]),
					i = t[n][0]
				}
			} else s = "";
			return [i, e]
		},
		initDataGlobal: function() {
			var e = this.dataTpl,
			i = e.di;
			if (i.DEVICE_ID_TYPE = u.UUID, i.DEVICE_ID = this.config.deviceId.get(), i.DEVICE_ID || (i.DEVICE_ID = this.getUserId(), i.DEVICE_ID_TYPE = u.UUID), i.RESOLUTION = t.screen.width + "x" + t.screen.height, i.OS_VERSION = this.system.os.name, this.system.os.version && (i.OS_VERSION += " " + this.system.os.version), i.DEVICE_MODEL = this.config.deviceModel.get(), !i.DEVICE_MODEL) if (this.system.device.model) {
				var s = this.system.device.vendor || "";
				i.DEVICE_MODEL = s + " " + this.system.device.model
			} else i.DEVICE_MODEL = this.system.browser.name,
			this.system.browser.version && (i.DEVICE_MODEL += " " + this.system.browser.version);
			i.DEVICE_MODEL || (i.DEVICE_MODEL = c),
			i.CHANNEL = this.config.channel.get(),
			i.VERSION_NAME = this.config.versionName.get(),
			i.VERSION_CODE = this.config.versionCode.get(),
			e.diStr = this.stringifyData(i);
			var n = e.bi;
			n.USER_LANGUAGE = navigator.language || navigator.browserLanguage || "?",
			n.COOKIES_ENABLED = RP.isCookieEnabled(),
			n.BROWSER_NAME = this.system.browser.name,
			n.BROWSER_VS = this.system.browser.version,
			e.biStr = this.stringifyData(n)
		},
		stringifyData: function(t) {
			var e = "";
			for (var i in t) {
				var s = t[i];
				if (s instanceof Array) {
					for (var a = "",
					l = 0,
					c = s.length; c > l; l++) a += r + (void 0 == s[l] ? "": RP.util.encodeChinese(s[l]));
					a = a.substr(1),
					e += n + a
				} else if (s instanceof Object) {
					var a = "";
					for (var h in s) a += r + h + o + (void 0 == s[h] ? "": RP.util.encodeChinese(s[h]));
					a = a.substr(1),
					e += n + a
				} else e += n + (void 0 == t[i] ? "": RP.util.encodeChinese(t[i]))
			}
			return e.substr(1)
		},
		fillWebInfo: function(t) {
			var e = t.wi = {},
			i = this.dataTpl.wi;
			for (var s in i) e[s] = t[i[s]];
			e.LOGIN_NAME = e.OTHERS.uid
		},
		patch: function() {
			for (var t in E) RP.util[t] = E[t];
			for (var t in y) RP.tracker.prototype[t] = y[t];
			var e;
			if (d) for (var t = 0,
			i = d.length; i > t; t++)"[object Object]" == Object.prototype.toString.call(d[t]) ? (e = d[t], this.setup(e)) : this.push(d[t])
		},
		push: function(e) {
			var i = t[a];
			if (e instanceof Array) {
				var s;
				i[e[0]] && "function" == typeof i[e[0]] ? s = i: this.worker ? this.worker[e[0]] && "function" == typeof this.worker[e[0]] && (s = this.worker) : RP.debug("Please setup first."),
				s && s[e[0]].apply(s, e.slice(1))
			} else if ("object" == typeof e) this.setup(e);
			else if ("function" == typeof e) try {
				e()
			} catch(n) {
				RP.debug("function failed: " + n + "===" + e.toString())
			}
		},
		destroy: function() {
			RP.util.detachEvent(t, "load", this.loadHandler),
			RP.util.detachEvent(t, "unload", this.unloadHandler),
			delete t.Avatar
		},
		loadTrackers: function(t) {
			t instanceof Array || (t = [t]);
			for (var e = 0,
			i = t.length; i > e; e++) this.loadTracker(t[e])
		},
		loadTracker: function(t) {
			var e = document.createElement("script");
			e.type = "text/javascript",
			e.async = !0,
			e.src = t,
			document.head.appendChild(e)
		},
		trackPageView: function() {
			var t = this.worker.page;
			t.set("page_type", 2),
			this.worker.trackEvent(t)
		},
		initEvent: function(t) {
			var e = this.config.PVInfo.get(),
			i = this.getReferrerInfo();
			e.username = RP.cookie.get("avatar_account"),
			e.uid = RP.cookie.get("avatar_name"),
			e.engine = i[0],
			e.query = i[1],
			t.set("extraWebInfo", e)
		},
		initLoadEvent: function() {
			function i() {
				n && (n = !1, i = function() {},
				s.logLoadTime())
			}
			var s = this,
			n = !0;
			if (e.addEventListener) {
				if ("interactive" === e.readyState || "complete" === e.readyState || "loaded" === e.readyState) return i();
				e.addEventListener("DOMContentLoaded",
				function o() {
					e.removeEventListener("DOMContentLoaded", o, !1),
					i()
				},
				!1)
			} else if (e.attachEvent) {
				if ("complete" === e.readyState) return i();
				if (e.attachEvent("onreadystatechange",
				function a() {
					"complete" === e.readyState && i(),
					n || e.detachEvent("onreadystatechange", a)
				}), e.documentElement.doScroll && t === t.top) if (n) var r = window.setInterval(function() {
					try {
						e.documentElement.doScroll("left")
					} catch(t) {
						return
					}
					window.clearInterval(r),
					i()
				},
				100);
				else i()
			}
			if (new RegExp("WebKit").test("userAgent")) if (n) var r = window.setInterval(function() { / loaded | complete / .test(e.readyState) && (window.clearInterval(r), i())
			},
			100);
			else i();
			this.loadHandler = function() {
				i()
			},
			RP.util.addEvent(t, "load", this.loadHandler)
		},
		onClose: function() {
			if (this.config.repeat.set(0), this.worker.stopTimer(), this.leaving = !0, this.closeHandlers.length) for (var t in this.closeHandlers) this.closeHandlers[t]();
			this.worker.stopTimer(),
			this.worker.send()
		},
		logLoadTime: function() {
			this.track(["", "LOADTIME", "", [RP.util.getTimeStamp() - this.worker.startTime]])
		},
		logClose: function() {
			this.config.delay.set(0);
			var t = this.worker.page;
			t.set("page_type", 3),
			t.set("ci", null);
			var e = RP.util.getTimeStamp();
			t.set("ts", e),
			t.set("residence_time", e - this.worker.startTime),
			this.worker.trackEvent(t)
		},
		addLogClose: function() {
			this.closeHdlr || (this.closeHdlr = this.logClose.bind(this)),
			this.registerCloseHandler(this.closeHdlr)
		},
		removeLogClose: function() {
			this.removeCloseHandler(this.closeHdlr)
		},
		registerCloseHandler: function(t) { - 1 == this.closeHandlers.indexOf(t) && this.closeHandlers.push(t)
		},
		removeCloseHandler: function(t) {
			var e; (e = this.closeHandlers.indexOf(t)) > -1 && this.closeHandlers.splice(e, 1)
		},
		track: function(t) {
			var e = new RP.evt;
			this.initEvent(e),
			e.set("page_type", 0),
			this.createCustomInfo(e, {
				category: t[0],
				action: t[1],
				label: t[2],
				params: t[3],
				value: t[4]
			}),
			this.worker.trackEvent(e)
		},
		isElement: function(t) {
			return window.Element ? this.isElement = function(t) {
				return t instanceof Element
			}: this.isElement = function(t) {
				return "number" == typeof t.nodeType
			},
			this.isElement(t)
		},
		register: function(t, e) {
			if (t) {
				var i = this.isElement(t);
				if (i || t.length && "string" != typeof t) {
					var s = Object.prototype.toString.call(e);
					"[object Function]" == s ? e = [{
						selector: "",
						parser: e
					}] : "[object Object]" == s && (e.selector || (e.selector = ""), e = [e]),
					i && (t = [t]);
					for (var n = 0,
					r = t.length; r > n; n++) this.setuped ? this.apply(t[n], e) : this.preloadTrackers.push([t[n], e])
				}
			}
		},
		apply: function(t, e) {
			function i(e, i) {
				if (i) {
					var n = e.selector.substr(1);
					return function(r) {
						var o = i(t, r.target, n);
						o && s.readAndSend(e, o, r)
					}
				}
				return function(i) {
					s.readAndSend(e, t, i)
				}
			}
			if (this.isElement(t)) {
				for (var s = this,
				n = {},
				r = 0,
				o = e.length; o > r; r++) {
					var a = this.handlers[e[r].selector.charAt(0)];
					a ? (e[r].process = i(e[r], a.match), n[a.trigger] || (n[a.trigger] = []), n[a.trigger].push(e[r])) : RP.debug("error in selector:" + e[r].selector)
				}
				var l = {};
				for (var c in n) {
					var h, e = n[c];
					e.length > 1 ? h = function(t) {
						return function(e) {
							for (var i = 0,
							s = t.length; s > i; i++) t[i].process(e)
						}
					} (e) : (e = e[0], h = e.process),
					p[c](t, h, e),
					l[c] = h
				}
				this.trackerList.push([t, l])
			}
		},
		readAndSend: function(t, e, i) {
			var s;
			if (t.args) {
				var n = [i, e].concat(t.args);
				s = t.parser.apply(window, n)
			} else s = t.parser(i, e);
			s && this.track(s)
		},
		handlers: {
			"": {
				trigger: "click"
			},
			".": {
				trigger: "click",
				match: function(t, e, i) {
					for (; e && e != t;) {
						if (f(e, i)) return e;
						e = e.parentNode
					}
					return null
				}
			},
			"*": {
				trigger: "click",
				match: function(t, e, i) {
					for (; e && e != t;) {
						if (null !== e.getAttribute(i)) return e;
						e = e.parentNode
					}
					return null
				}
			},
			_: {
				trigger: "click",
				match: function(t, e, i) {
					for (; e && e != t;) {
						if (e.tagName == i.toUpperCase()) return e;
						e = e.parentNode
					}
					return null
				}
			},
			"|": {
				trigger: "show",
				match: function(t, e, i) {
					return e
				}
			}
		},
		getCookie: function(t, e) {
			return RP.cookie.get(t, e)
		},
		getURLParam: function(t) {
			return RP.util.getUrlParam(t)
		}
	},
	m = t[a] = {};
	m.push = v.push.bind(v),
	m.setup = v.setup.bind(v),
	m.destroy = v.destroy.bind(v),
	m.register = v.register.bind(v),
	m.track = v.track.bind(v),
	m.getUserId = v.getUserId.bind(v),
	m.getOption = v.getOption.bind(v),
	m.setOption = v.setOption.bind(v),
	m.setOptions = v.setOptions.bind(v),
	m.getProperty = v.getProperty.bind(v),
	m.getSearch = v.getURLParam,
	m.getCookie = v.getCookie;
	var w = v.config,
	b = m.config = {
		appKey: w.appKey,
		pageId: w.pageId,
		throttle: w.throttle,
		repeat: w.repeat,
		events: w.events,
		startTime: w.startTime,
		trackStayTime: w.trackStayTime,
		PVInfo: w.PVInfo,
		versionName: w.versionName,
		versionCode: w.versionCode,
		cookieDomain: w.cookieDomain,
		serverUrl: w.serverUrl,
		session: w.session,
		getLimit: w.getLimit,
		init: w.init,
		delay: w.delay
	};
	for (var P in b) w[P] = b[P];
	var y = {
		data: null,
		timer: null,
		div: null,
		send: function() {
			if (this.data) {
				var e = !0,
				i = "";
				if (v.leaving) t.XDomainRequest && (this.cdPost = this.postFromIframe);
				else {
					var s = RP.util.formatForUrl(this.data);
					i = this._assembleRequestUrl(s);
					var n = this.options.maxLengthForGet;
					e = i.length > n
				}
				e ? this.cdPost(this.data) : this.getByImage(i),
				this.data = null
			}
		},
		getByImage: function(t) {},
		stopTimer: function() {
			this.timer && t.clearInterval(this.timer)
		},
		trackEvent: function(e) {
			this.addGlobalPropertiesToEvent(e);
			var i = e.getProperties();
			v.fillWebInfo(i),
			this.timer ? (t.clearInterval(this.timer), this.data.wi.push(v.stringifyData(i.wi)), this.data.ci.push(v.stringifyData(i.ci))) : this.data = this.prepareRequestData(i),
			this.initSendTimer()
		},
		initSendTimer: function() {
			var e = this;
			v.config.delay.get() ? this.timer = t.setInterval(function() {
				t.clearInterval(e.timer),
				e.timer = null,
				e.send()
			},
			v.config.delay.get()) : (e.timer = null, e.send())
		},
		prepareRequestData: function(t) {
			var e = v.dataTpl,
			i = {
				ak: e.ak,
				di: e.diStr
			};
			i.wi = [v.stringifyData(t.wi)];
			var s = null;
			return t.ci && (s = v.stringifyData(t.ci)),
			i.ci = [s],
			i.bi = e.biStr,
			i.ts = t.ts,
			i
		},
		cdPost: function(e) {
			t.XMLHttpRequest && "withCredentials" in new t.XMLHttpRequest ? this.cdPost = function(e, i) {
				RP.debug("post_" + i),
				void 0 == i && (i = 0);
				var s = new t.XMLHttpRequest;
				s.open("POST", this.getLoggerEndpoint()),
				s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				var n = this;
				s.onreadystatechange = function() {
					i++,
					4 == s.readyState && 200 != s.status && i <= v.config.repeat.get() && n.cdPost(e, i)
				},
				s.send(RP.util.formatForUrl(e))
			}: this.cdPost = this.postFromIframe,
			this.cdPost(e)
		},
		generateHiddenIframe: function() {
			var t = "rp-tracker-post-iframe";
			if (RP.util.isLowIE()) var i = e.createElement('<iframe name="' + t + '" src="about:blank" width="1" height="1"></iframe>');
			else {
				var i = e.createElement("iframe");
				i.setAttribute("name", t),
				i.setAttribute("src", "about:blank"),
				i.setAttribute("width", 1),
				i.setAttribute("height", 1)
			}
			i.setAttribute("class", t),
			i.setAttribute("style", "border: none;");
			return e.body.appendChild(i),
			i
		},
		postFromIframe: function(e) {
			var i, s = this.generateHiddenIframe(),
			n = function(e) {
				function n(t, e) {
					if (RP.util.isLowIE()) var s = i.createElement("<input type='hidden' name='" + t + "' />");
					else {
						var s = i.createElement("input");
						s.setAttribute("name", t),
						s.setAttribute("type", "hidden")
					}
					return s.setAttribute("value", e),
					s
				}
				var r = this.getLoggerEndpoint(),
				o = "post_form" + Math.random();
				if (RP.util.isLowIE()) var a = i.createElement('<form name="' + o + '"></form>');
				else {
					var a = i.createElement("form");
					a.setAttribute("name", o)
				}
				a.setAttribute("id", o),
				a.setAttribute("action", r),
				a.setAttribute("method", "POST");
				for (var l in e) if (e.hasOwnProperty(l)) {
					var c = e[l];
					if (c instanceof Array) for (var h = 0,
					u = c.length; u > h; h++) a.appendChild(n(l, c[h]));
					else a.appendChild(n(l, c))
				}
				i.body.appendChild(a),
				i.forms[o].submit(),
				i.body.removeChild(a),
				t.setTimeout(function() {
					document.body.removeChild(s)
				},
				1e3)
			}; (function r() {
				i = this.getIframeDocument(s),
				i ? n.call(this, e) : t.setTimeout(r, 10)
			}).call(this)
		},
		manageState: function() {
			this.setLastRequestTime(),
			this.setVisitorId(),
			this.setFirstSessionTimestamp(),
			this.setSessionId(),
			this.setNumberPriorSessions(),
			this.setTimeSinceLastSession(),
			this.setVisitSerial()
		},
		getLoggerEndpoint: function() {
			return this.options.serverUrl
		},
		setVisitSerial: function() {
			var t = 1;
			if (!this.isNewSessionFlag) {
				var e = RP.getState("s", "vs");
				e && (e++, t = e)
			}
			RP.setState("s", "vs", t),
			this.setGlobalEventProperty("serial", t)
		},
		setTimeSinceLastSession: function() {
			RP.debug("setting days since last session.");
			var t = "";
			if (this.getGlobalEventProperty("isnew")) {
				var e = this.page.get("ts");
				RP.debug("ts: %s", e);
				var i = this.getGlobalEventProperty("lsts") || e;
				RP.debug("lsts: %s", i),
				t = e - i,
				RP.setState("s", "dif", t)
			}
			t || (t = RP.getState("s", "dif") || 0),
			this.setGlobalEventProperty("dif", t)
		}
	},
	E = {
		addEvent: function(t, e, i) {
			t.addEventListener ? RP.util.addEvent = function(t, e, i) {
				t.addEventListener(e, i, !1)
			}: t.attachEvent && (RP.util.addEvent = function(t, e, i) {
				var s = i.avatar_handler = function(t) {
					t.target = t.srcElement,
					i(t)
				};
				t.attachEvent("on" + e, s)
			}),
			RP.util.addEvent(t, e, i)
		},
		detachEvent: function(t, e, i) {
			t.addEventListener ? RP.util.detachEvent = function(t, e, i) {
				t.removeEventListener(e, i, !1)
			}: t.attachEvent && (RP.util.detachEvent = function(t, e, i) {
				t.attachEvent("on" + e, i.avatar_handler)
			}),
			RP.util.detachEvent(t, e, i)
		},
		formatForUrl: function() {
			var t = function(t) {
				return t = null == t ? "": t.toString(),
				t && (t = encodeURIComponent(t)),
				t
			};
			return function(e) {
				var i = "";
				for (var s in e) if (e[s] instanceof Array) for (var n = 0,
				r = e[s].length; r > n; n++) i += "&" + s + "=" + t(e[s][n]);
				else i += "&" + s + "=" + t(e[s]);
				return i.substr(1)
			}
		} (),
		getTimeStamp: function() {
			return (new Date).getTime()
		},
		zeroFill: function(t, e, i) {
			if (t || (t = ""), !e) return t;
			var s = e - t.length;
			if (s > 0) {
				var n = new Array(s + 1);
				t = n.join(i || "0") + t
			} else 0 > s && (t = t.substr( - s));
			return t
		},
		generateRandomGuid10: function(t) {
			return this.generateRandomGuid(t, 10)
		},
		generateRandomGuid: function(t, e) {
			e || (e = 16);
			var i = (new Date).getTime().toString(e),
			s = i.length;
			if (isNaN(t) || t == s) return i;
			s > t && (s = t / 2, i = this.zeroFill(i, s));
			var n = Math.round((t - s) / 2),
			r = Math.pow(10, n) - 1,
			o = this.zeroFill(this.rand(0, r).toString(e), n);
			n = t - s - n,
			r = Math.pow(10, n) - 1;
			var a = this.zeroFill(this.rand(0, r).toString(e), n);
			return i + o + a
		},
		encodeChinese: function(t) {
			return "string" != typeof t ? t: (t += "", t.replace(/./g,
			function(t) {
				return t.charCodeAt(0) > 255 ? encodeURIComponent(t) : t
			}))
		}
	};
	v.patch()
} (window, document);