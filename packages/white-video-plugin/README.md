# [@netless/white-video-plugin2](https://www.npmjs.com/package/@netless/white-video-plugin2)

## Install

```bash
npm i @netless/white-video-plugin2
```

## Usage

```ts
import { videoPlugin2 } from "@netless/white-video-plugin2";
import { createPlugins, WhiteWebSdk } from "white-web-sdk";
let plugins = createPlugins({ video2: videoPlugin2 });
plugins.setPluginContext("video2", {
    identity: "host",
    // due to browser's limit, play() will fail if user did not clicked
    // ref: https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
    // if that happens, this plugin will show an alert to guide user to click
    // you can disable that alert by enabling `hideMuteAlert`
    hideMuteAlert: true,
});
let sdk = new WhiteWebSdk({ plugins });
let room = await sdk.joinRoom({ ... });
room.insertPlugin("video2", {
    originX: -240,
    originY: -43,
    width: 480,
    height: 86,
    attributes: { src: url, poster: url2, isNavigationDisable: false },
});
```

Through vanilla JS:

```html
<!-- 1. put white-web-sdk and react before this plugin -->
<script src="https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://sdk.netless.link/white-web-sdk/2.13.8.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@netless/white-video-plugin2"></script>
<script>
    // 2. extract videoPlugin2 from global name WhiteVideoPlugin2
    const { videoPlugin2 } = WhiteVideoPlugin2;
    // 3. do whatever you want
</script>
```

## 参数

```ts
interface Context {
    /** 必填，有操作权限者为 "host"，观看者为 "guest" */
    identity："host" | "guest";
    /** 选填，不显示无法播放声音的警告 @default false */
    hideMuteAlert?: boolean;
}

interface Attributes {
    /** 视频地址 */
    src: string;
    /** 封面地址 */
    poster?: string;
    /** 是否隐藏标题栏 */
    isNavigationDisable?: boolean;
}
```

## License

The MIT License.
